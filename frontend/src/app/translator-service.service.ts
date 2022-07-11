import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Translation } from './translation.model';

@Injectable({
  providedIn: 'root'
})
export class TranslatorServiceService {
  public latinTranslations: Translation[] = [];
  englishTranslations: Translation[] = [];

  constructor(private http: HttpClient) { }



  translate(formText: string, translateTo: string) {
    let words: string[] = this.parseTextToList(formText);
    this.post(translateTo, words).subscribe(response => {
      let translations: string[] = response['translationList']
      for (let i = 0; i < words.length; i++) {
        if (translateTo === 'latin') {
          this.latinTranslations.splice(i, 0, (new Translation(words[i], translations[i])));
        }
        else {
          this.englishTranslations.unshift(new Translation(words[i], translations[i]))
        }
      }
    });
  }

  parseTextToList(text: string): string[] {
    var words: string[] = [];
    var tempWord = '';
    for (let char of text) {
      if (char === ' ' || char === ',') {
        if (tempWord.length == 0) continue;
        words.push(tempWord);
        tempWord = '';
      }
      else {
        tempWord += char;
      }
    }

    if (tempWord != '') {
      words.push(tempWord);
    }
    return words;
  }

  post(translateTo: string, words: string[]) {
    // let headers = {
    //   headers: new HttpHeaders({ 'Words': words })
    // }
    // return this.http.post('/translate-to-' + translateTo, headers);
    var body: string = '{"words": [';
    for (let i = 0; i < words.length - 1; i++) {
      body += '"' + words[i] + '",';
    }
    body += '"' + words[words.length - 1] + '"]}'
    console.log(body);
    return this.http.post('/translate-to-' + translateTo, body);
  }

}
