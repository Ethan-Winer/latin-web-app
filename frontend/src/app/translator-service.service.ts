import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class TranslatorServiceService {
  private _result: string;
  constructor(private http: HttpClient) { }

  get result(): string {
    return this._result;
  }

  getStuff() {
    return this.http.get('http://127.0.0.1:8000/test');
  }
}
