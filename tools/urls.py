from django.conf import settings
from django.conf.urls.static import static
from django.contrib import admin
from django.urls import path, include
from django.views.generic import TemplateView

app_name = 'texttools'
urlpatterns = [
    path('bootstrap', TemplateView.as_view(template_name="tools/home.html"), name="HOME"),
    path('small-text-generator', TemplateView.as_view(template_name="tools/small-text-generator.html"),
         name="small-text-generator"),
    path('', TemplateView.as_view(template_name="tools/vaporwave-text.html"), name="vaporwave-text"),
    path('star-symbols', TemplateView.as_view(template_name="tools/star-symbols.html"), name="star-symbbols"),
]
