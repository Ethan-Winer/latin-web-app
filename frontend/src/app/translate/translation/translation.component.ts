import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
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
  // animations: [
  //   trigger('slideUpDown', [
  //     transition(':enter', [
  //       animate('300ms ease',
  //         keyframes([
  //           style({ height: 0, padding: 0 }),
  //           style({ height: '*', padding: '*' })
  //         ])
  //       )
  //     ]),
  //     transition(':leave', [
  //       animate('300ms ease',
  //         keyframes([
  //           style({ height: '*', padding: '*' }),
  //           style({ height: 0, padding: 0 })
  //         ])
  //       )
  //     ])
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
  //   ])
  // ]
})
export class TranslationComponent implements OnInit {
  @Input() disableAnimations: boolean;
  @Input() translation: Translation;
  hovering: boolean = false;
  @Output() destroy = new EventEmitter();
  isOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
    // this.isOpen = this.translation.isOpen;
  }

  emitDestroy() {
    this.destroy.emit();
  }
}
