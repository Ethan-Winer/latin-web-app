import { Component, OnInit } from '@angular/core';
import { TranslateService } from './translate.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-translate',
  templateUrl: './translate.component.html',
  styleUrls: ['./translate.component.css']
})
export class TranslateComponent implements OnInit {
  constructor(private translator: TranslateService) { }
  result: string = 'nothing yet';

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    form.controls['english-text'].setValue('');
  }

}
