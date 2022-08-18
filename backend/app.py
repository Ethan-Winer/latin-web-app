from re import sub
from flask import Flask, jsonify, request
import json
import subprocess
import os
from pathlib import Path

app = Flask(__name__)

@app.route('/')
def hello():  
  # exists =   text = subprocess.Popen(['ls', '-la', os.getcwd()], shell=False, stdout=subprocess.PIPE, stderr=subprocess.STDOUT).communicate()



  # text = subprocess.Popen(['/app/words/words'], shell=False, stdout=subprocess.PIPE, stderr=subprocess.STDOUT).communicate()
  
  return subprocess.getoutput('./words facio')
  # return text
  # print(text)
  # return text
  # exists = os.path.exists('/app/words')

  # is_file = Path('/app/words').is_file()

  # return str(exists) + '  ' + str(is_file) +subprocess.getoutput(['/app/words facio'])

  # var_command = 'light'
  # item = subprocess.Popen(['./latin.sh'], stdout=subprocess.PIPE, shell=True)
  # print(item.communicate())

@app.route('/translate-to-latin', methods=['POST'])
def translate_to_latin():
  data = json.loads(request.get_data())
  translations = []
  for word in data ['words']:
    translation= subprocess.getoutput('./words ~E ' + word)
    translations.append(translation)
  return jsonify({'translationList': translations})
  # return jsonify({'translationList': ['translation to latin']})

@app.route('/translate-to-english', methods=['POST'])
def translate_to_english():
  data = json.loads(request.get_data())
  translations=[]
  for word in data['words']:
    translation = subprocess.getoutput('echo "Enter" | ./words ' + word)
    translations.append(translation)
  return jsonify({'translationList': translations})
  # return jsonify({'translationList': ['translate to english']})

if __name__ == "__main__":
  
  port = int(os.environ.get('PORT', 5000))
  app.run(debug=True, host='0.0.0.0', port=port)