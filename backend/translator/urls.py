from django.urls import include, path

from rest_framework import routers

from translator.views import translate_english

# router = routers.DefaultRouter()
# router.register('test', test)

urlpatterns = [
  path('english', translate_english)
]