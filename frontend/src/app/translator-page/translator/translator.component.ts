import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit, ChangeDetectorRef, HostBinding } from '@angular/core';
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
  disableAnimations: boolean = false;

  constructor(private translator: TranslatorServiceService, private changeDetectorRef: ChangeDetectorRef) { }

  ngOnInit(): void {
    if (this.translateTo === 'latin') {
      this.translations = this.translator.latinTranslations;
    }
    else {
      this.translations = this.translator.englishTranslations;
    }
    setTimeout(() => {
      this.disabled = false;
    }, 510);
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
