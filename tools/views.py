from django.db.models import Q
from django.shortcuts import render
from tools.models import store
from django.views import generic
from django.utils.decorators import method_decorator
from django.views.decorators.cache import cache_page


# Create your views here.
# @method_decorator(cache_page(60 * 5, key_prefix="emoji-list"), name='dispatch')
class EmojiList(generic.ListView):
    model = store
    template_name = 'tools/emoji-keyboard.html'
    paginate_by = 80

    def get_queryset(self):
        queryset = self.model.objects.all()
        search = self.request.GET.get('s', '').strip()
        if search:
            queryset = queryset.filter(Q(shortname__icontains=search))
            # print(queryset.query)
        return queryset


class EmojiSearch(generic.ListView):
    model = store
    template_name = 'tools/emoji-keyboard.html'

    def get_queryset(self):
        search = self.kwargs.get('search', '')
        object_list = self.model.objects.all()
        if search:
            object_list = object_list.filter(Q(name__icontains=search))
        return object_list
