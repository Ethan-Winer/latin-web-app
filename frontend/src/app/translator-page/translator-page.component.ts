import { Component, OnInit } from '@angular/core';
import { TranslatorServiceService } from '../translator-service.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-translator-page',
  templateUrl: './translator-page.component.html',
  styleUrls: ['./translator-page.component.css']
})
export class TranslatorPageComponent implements OnInit {
  constructor(private translator: TranslatorServiceService) { }
  result: string = 'nothing yet';

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    form.controls['english-text'].setValue('');
  }

}
