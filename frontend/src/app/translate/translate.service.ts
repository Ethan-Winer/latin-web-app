import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Translation } from './translation/translation.model'

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  latinTranslations: Translation[] = [];
  englishTranslations: Translation[] = [];
  constructor(private http: HttpClient) { }

  translate(formText: string, translateTo: string) {
    let words: string[] = this.parseTextToList(formText);
    if (words.length > 0) {
      this.post(translateTo, words).subscribe(response => {
        let translations: string[] = response['translationList']
        for (let i = 0; i < words.length; i++) {
          if (translateTo === 'latin') {
            this.latinTranslations.splice(i, 0, (new Translation(words[i], translations[i], true)));
          }
          else {
            this.englishTranslations.splice(i, 0, (new Translation(words[i], translations[i], true)));
          }
        }
      });
    }
  }

  parseTextToList(text: string): string[] {
    var words: string[] = [];
    var tempWord = '';
    for (let char of text) {
      if (char === ' ' || char === ',') {
        if (tempWord.length == 0) continue;
        words.push(tempWord)
        tempWord = '';
      }
      else {
        tempWord += char;
      }
    }

    if (tempWord != '') {
      words.push(tempWord)
    }
    return words;
  }

  post(translateTo: string, words: string[]) {
    var body: string = '{"words": [';
    for (let i = 0; i < words.length - 1; i++) {
      body += '"' + words[i] + '",';
    }
    body += '"' + words[words.length - 1] + '"]}'
    return this.http.post('/translate-to-' + translateTo, body);
  }
}
