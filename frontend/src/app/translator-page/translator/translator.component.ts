import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslatorServiceService } from 'src/app/translator-service.service';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  @Input() translateFrom: string;
  translations: string[] = [];

  constructor(private translator: TranslatorServiceService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm): void {
    this.translator.translate(form.value['text'], this.translateFrom).subscribe(response => {
      console.log(response['translationList'])
      for (let translation of response['translationList']) {
        this.translations.push(translation);
      }
    });
    console.log(this.translations);


  }
}
