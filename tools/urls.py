from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView
from tools.views import EmojiList,EmojiSearch

app_name = 'texttools'
urlpatterns = [
    path('small-text-generator', TemplateView.as_view(template_name="tools/small-text-generator.html"),
         name="small-text-generator"),
    path('', TemplateView.as_view(template_name="tools/vaporwave-text.html"), name="HOME"),
    path('star-symbols', TemplateView.as_view(template_name="tools/star-symbols.html"), name="star-symbbols"),
    path('copyright-symbols', TemplateView.as_view(template_name="tools/copyright-symbols.html"),
         name="copyright-symbols"),
    path('emoji-list/',EmojiList.as_view(),name="emoji-list"),
    path('emoji-search/<str:search>',EmojiSearch.as_view())
    # path('bootstrap', TemplateView.as_view(template_name="tools/home.html"), name="vaporwave-text"),
]
