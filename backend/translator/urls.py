from django.urls import include, path

from rest_framework import routers

from translator.views import test

# router = routers.DefaultRouter()
# router.register('test', test)

urlpatterns = [
  path('test', test)
]