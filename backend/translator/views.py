from django.shortcuts import render
from django.http import HttpResponse, JsonResponse

# Create your views here.
def translate_english(request):
  words = request.headers['Words'].split(',')
  return JsonResponse({'translationList' : words});