import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslatorServiceService } from 'src/app/translator-service.service';
import {
  trigger,
  transition,
  animate,
  style,
  state
} from '@angular/animations';

import { Translation } from 'src/app/translation.model';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css'],
  animations: [
    // the fade-in/fade-out animation.
    // the fade-in/fade-out animation.
    trigger('simpleFadeAnimation', [

      // the "in" style determines the "resting" state of the element when it is visible.

      // fade in when created. this could also be written as transition('void => *')
      transition(':enter', [
        style({ opacity: 0, scale: 0.5 }),
        animate('0.2s ease-in')
      ]),

      // fade out when destroyed. this could also be written as transition('void => *')
      transition(':leave',
        animate('0.2s ease-out', style({ opacity: 0, scale: 0.5 })))
    ])
  ]
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
