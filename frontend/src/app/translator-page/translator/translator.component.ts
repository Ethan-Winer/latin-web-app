import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
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
      this.translations = this.translations.concat(response['translationList'])
    });
    form.controls['text'].setValue('');
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.translations, event.previousIndex, event.currentIndex);
    console.log(this.translations);
  }
}
