from django.urls import include, path

from rest_framework import routers

from translator.views import translate_to_english, translate_to_latin


# router = routers.DefaultRouter()
# router.register('test', test)

urlpatterns = [
  path('translate-to-latin', translate_to_latin),
  path('translate-to-english', translate_to_english)
]