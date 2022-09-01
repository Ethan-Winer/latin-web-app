from pickle import FALSE
from flask import Flask, jsonify, request
import json
import subprocess
import os
import time

def get_body_and_validate(request):
  try:
    body = json.loads(request.get_data())
  except ValueError:
    return False

  if len(body.keys()) == 0 or 'words' != list(body.keys())[0]:
    return False
  elif len(body['words']) == 0:
    return False
  else:
    for word in body['words']:
      if not word.isalpha():
        return False
    return body

app = Flask(__name__)

@app.route('/translate-to-latin', methods=['POST'])
def translate_to_latin():
  body = get_body_and_validate(request)
  if not body:
    return 'bad request'
  
  translations = []
  for word in body['words']:
    translation= subprocess.getoutput('./words ~E ' + word)
    translations.append(translation)
  return jsonify({'translationList': translations})

@app.route('/translate-to-english', methods=['POST'])
def translate_to_english():
  body = get_body_and_validate(request)
  if not body:
    return 'bad request'

  translations=[]
  for word in body['words']:
    translation = subprocess.getoutput('./words ' + word)
    translations.append(translation)
  return jsonify({'translationList': translations})

if __name__ == "__main__":  
  port = int(os.environ.get('PORT', 5000))
  app.run(debug=True, host='0.0.0.0', port=port)
