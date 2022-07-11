from django.shortcuts import render
from django.http import HttpResponse, JsonResponse
# from django.views.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt

import subprocess
import json

# Create your views here.


@csrf_exempt
def translate_to_latin(request):
  body = json.loads(request.body.decode('utf-8'))
  translations = []
  # for word in words:
  for word in body['words']:
    translation= subprocess.getoutput('/usr/local/words-1.97Ed/latin.sh ~E ' + word)
    translations.append(translation)
  return JsonResponse({'translationList': translations})

@csrf_exempt
def translate_to_english(request):
  body = json.loads(request.body.decode('utf-8'))
  translations=[]
  for word in body['words']:
    translation = subprocess.getoutput('echo "Enter" | /usr/local/words-1.97Ed/latin.sh ' + word)
    translations.append(translation)
  return JsonResponse({'translationList': translations})