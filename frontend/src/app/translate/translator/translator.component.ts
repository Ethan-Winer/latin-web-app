import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, HostBinding } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TranslateService } from '../translate.service';
import {
  trigger,
  transition,
  animate,
  style,
  keyframes
} from '@angular/animations';

import { Translation } from '../translation/translation.model';

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
            style({ transform: 'scale(1)', margin: '*' }),
            style({ opacity: 0, transform: 'scale(0.4)' }),
            style({ height: 0, margin: 0 })
          ])
        ),
      ])
    ])
  ]
})
export class TranslatorComponent implements OnInit {
  @Input() translateTo: string;
  @Input() hovering: boolean;
  @HostBinding('@.disabled') disabled = true;

  translations: Translation[];
  inputText: string;
  invalidInput: boolean = false;

  dragging: boolean = false;

  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    if (this.translateTo === 'latin') {
      this.translations = this.translateService.latinTranslations;
    }
    else {
      this.translations = this.translateService.englishTranslations;
    }
  }

  ngAfterViewChecked(): void {
    this.disabled = false;
  }

  onSubmit(form: NgForm): void {
    this.translateService.translate(form.value['text'], this.translateTo)
    form.controls['text'].setValue('');
  }

  destroyTranslation(index: number): void {
    this.translations.splice(index, 1);
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.translations, event.previousIndex, event.currentIndex);
  }

  check() {
    this.invalidInput = this.inputText.length > 0 && !/^[A-Za-z\s,]+$/.test(this.inputText)
  }
}
