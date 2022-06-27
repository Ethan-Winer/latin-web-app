import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TranslatorServiceService {
  latinTranslations: string[];
  englishTranslations: string[];


  constructor(private http: HttpClient) { }

  translate(formText: string, translateFrom: string) {
    var words: string[] = this.parseTextToList(formText);
    return this.get(translateFrom, words);
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

  get(translateFrom: string, words: string[]) {
    let headers = {
      headers: new HttpHeaders({ 'Words': words })
    }
    return this.http.get('/translate-' + translateFrom, headers);
  }

}
