from pickle import FALSE
from flask import Flask, jsonify, request
import json
import subprocess
import os

def check_for_valid_request(data):
  if type(data) != list:
    return False

  elif 'words' not in data:
    return False
  elif len(data['words']) == 0:
    return False
  else:
    for word in data['words']:
      if not word.isalpha():
        return False
    return True

app = Flask(__name__)
@app.route('/translate-to-latin', methods=['POST'])
def translate_to_latin():
  data = json.loads(request.get_data())
  translations = []
  for word in data ['words']:
    if not word.isalpha():
      return 'bad request'
    translation= subprocess.getoutput('./words ~E ' + word)
    translations.append(translation)
  return jsonify({'translationList': translations})

@app.route('/translate-to-english', methods=['POST'])
def translate_to_english():
  data = json.loads(request.get_data())
  translations=[]
  for word in data['words']:
    if not word.isalpha():
      return 'bad request'
    translation = subprocess.getoutput('./words ' + word)
    translations.append(translation)
  return jsonify({'translationList': translations})

if __name__ == "__main__":  
  port = int(os.environ.get('PORT', 5000))
  app.run(debug=True, host='0.0.0.0', port=port)
