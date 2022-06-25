from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def translate_english(request):
  return JsonResponse({'translationList' : ['here is the response', 'other response']});