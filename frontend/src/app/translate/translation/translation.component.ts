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
      transition(':enter', [
        animate('300ms ease',
          keyframes([
            style({ height: 0, marginBottom: 0 }),
            style({ height: '*', marginBottom: '*' })
          ])
        )
      ]),
      transition(':leave', [
        animate('300ms ease',
          keyframes([
            style({ height: '*', marginTop: '*' }),
            style({ height: 0, marginTop: 0 })
          ])
        )
      ])
    ])
  ]
})

export class TranslationComponent implements OnInit {
  @Input() translation: Translation;
  @Input() hovering: boolean = false;
  @Output() destroy = new EventEmitter();
  @ViewChild('definition') definition: ElementRef;

  isOpen: boolean = true;
  defHeight: number;
  //placehoolder is temporary im gonna make an actual solution maybe
  placeholder: boolean;
  constructor(private translateService: TranslateService) { }

  ngOnInit(): void {
    this.placeholder = this.translation.isOpen
    this.translation.isOpen = true;
  }

  ngAfterViewInit(): void {
    this.defHeight = this.definition.nativeElement.offsetHeight;
    this.translation.isOpen = this.placeholder;
  }

  emitDestroy() {
    this.destroy.emit();
  }

  getShowTranslationButtons() {
    return this.translateService.showTranslationButtons;
  }
}
