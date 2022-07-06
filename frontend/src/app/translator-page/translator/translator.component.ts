import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslatorServiceService } from 'src/app/translator-service.service';

import { Translation } from 'src/app/translation.model';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css']
})
export class TranslatorComponent implements OnInit {
  @Input() translateTo: string;
  @Input() hovering: boolean;
  translations: Translation[];


  constructor(private translator: TranslatorServiceService) { }

  ngOnInit(): void {
    if (this.translateTo === 'latin') {
      this.translations = this.translator.latinTranslations;
    }
    else {
      this.translations = this.translator.englishTranslations;
    }
  }

  onSubmit(form: NgForm): void {
    this.translator.translate(form.value['text'], this.translateTo)
    form.controls['text'].setValue('');
  }

  destroyTranslation(index: number): void {
    this.translations.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.translations, event.previousIndex, event.currentIndex);
  }
}
