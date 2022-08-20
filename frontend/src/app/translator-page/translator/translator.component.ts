import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslatorServiceService } from 'src/app/translator-service.service';
import {
  trigger,
  transition,
  animate,
  style,
  keyframes
} from '@angular/animations';

import { Translation } from 'src/app/translation.model';

import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-translator',
  templateUrl: './translator.component.html',
  styleUrls: ['./translator.component.css'],
  animations: [
    trigger('growInOut', [
      transition(':enter', [
        animate('500ms ease',
          keyframes([
            style({ opacity: 0, height: 0, margin: 0, transform: 'scale(0.4 )' }),
            style({ height: '*', margin: '*', transform: 'scale(0.4)', opacity: 0 }),
            style({ transform: 'scale(1)', opacity: 1 })
          ]),
        )
      ]),
      transition(':leave', [
        animate('500ms ease',
          keyframes([
            style({ transform: 'scale(1)' }),
            style({ opacity: 0, transform: 'scale(0.4)' }),
            style({ height: 0, margin: 0 })
          ])
        ),
      ])
    ])
  ]
})
export class TranslatorComponent implements OnInit {
  @HostBinding('@.disabled')
  disabled = true;
  @Input() translateTo: string;
  @Input() hovering: boolean;
  translations: Translation[];
  text: string;
  goodInput: boolean = false;

  constructor(private translator: TranslatorServiceService) { }

  ngOnInit(): void {
    if (this.translateTo === 'latin') {
      this.translations = this.translator.latinTranslations;
    }
    else {
      this.translations = this.translator.englishTranslations;
    }

  }

  ngAfterViewChecked(): void {
    this.disabled = false;
  }

  onSubmit(form: NgForm): void {
    let text: string = form.value['text'];
    this.translator.translate(form.value['text'], this.translateTo)
    form.controls['text'].setValue('');
  }

  checkForValidInput(text: string) {
    // this.badInput = /^[a-zA-Z\s.,]+$/.test(text);
    // console.log(this.badInput);
  }


  destroyTranslation(index: number): void {
    this.translations.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.translations, event.previousIndex, event.currentIndex);
  }
}
