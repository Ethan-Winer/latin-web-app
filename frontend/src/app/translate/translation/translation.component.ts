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
  //     //     state('open',
  //     //       style({ height: '*' })
  //     //     ),
  //     //     state('closed',
  //     //       style({ height: '0px' })
  //     //     ),
  //     //     // transition('* => open, * => closed', [
  //     //     //   animate('300ms ease')
  //     //     // ])
  //     //     transition('* => open', [
  //     //       animate('300ms ease',
  //     //         keyframes([
  //     //           style({ height: '0px' }),
  //     //           style({ height: '*' })
  //     //         ])
  //     //       )
  //     //     ]),
  //     //     transition('* => closed', [
  //     //       animate('300ms ease',
  //     //         keyframes([
  //     //           style({ height: '*' }),
  //     //           style({ height: '0px' })
  //     //         ])
  //     //       )
  //     //     ])


})
export class TranslationComponent implements OnInit {
  @Input() disableAnimations: boolean;
  @Input() translation: Translation;
  @HostBinding('@.disabled')
  disabled = false;
  @Input() hovering: boolean = false;
  @Output() destroy = new EventEmitter();
  isOpen: boolean = true;
  defHeight: number;
  @ViewChild('definition') definition: ElementRef;

  @Input() dragging: boolean = false;

  placeholder;
  constructor(public translator: TranslateService) { }

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
}
