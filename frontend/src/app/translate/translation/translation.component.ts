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
  hovering: boolean = false;
  @Output() destroy = new EventEmitter();
  isOpen: boolean = true;
  defHeight: number;
  @ViewChild('definition') definition: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.defHeight = this.definition.nativeElement.offsetHeight;
  }

  emitDestroy() {
    this.destroy.emit();
  }
}
