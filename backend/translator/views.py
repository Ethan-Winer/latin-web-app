from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
import subprocess

# Create your views here.
def translate_to_latin(request):
  words = request.headers['Words'].split(',')
  translations = []
  for word in words:
    translation= subprocess.getoutput('/usr/local/words-1.97Ed/latin.sh ~E ' + word)
    translations.append(translation)
  return JsonResponse({'translationList': translations})

def translate_to_english(request):
  words = request.headers['Words'].split(',')
  translations=[]
  for word in words:
    translation = subprocess.getoutput('echo "Enter" | /usr/local/words-1.97Ed/latin.sh ' + word)
    translations.append(translation)
  return JsonResponse({'translationList': translations})