import { Component, EventEmitter, Input, OnInit, Output, HostBinding, ViewChild, ElementRef } from '@angular/core';
import { Translation } from './translation.model';
import {
  trigger,
  transition,
  animate,
  style,
  keyframes,
  state
} from '@angular/animations';
import { TranslateService } from '../translate.service';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css'],
  animations: [
    trigger('slideUpDown', [
      state('open',
        style({ height: '*' })
      ),
      state('closed',
        style({ height: '0px' })
      ),
      transition('* => closed', [
        animate('200ms ease')
      ]),
      transition('* => open', [
        animate('200ms ease')
      ])
    ])
  ]
})

export class TranslationComponent implements OnInit {
  @Input() translation: Translation;
  @Input() hovering: boolean = false;
  @Output() destroy = new EventEmitter();
  @HostBinding('@.disabled') disabled = true;

  isOpen: boolean = true;
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    this.disabled = false;
  }

  emitDestroy() {
    this.destroy.emit();
  }

  getShowTranslationButtons() {
    return this.translateService.showTranslationButtons;
  }
}
