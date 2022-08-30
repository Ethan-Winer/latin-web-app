import { Component, EventEmitter, Input, OnInit, Output, HostBinding } from '@angular/core';
import { Translation } from './translation.model';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css'],
})

export class TranslationComponent implements OnInit {
  @Input() translation: Translation;
  @Input() hovering: boolean = false;
  @Output() destroy = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  emitDestroy() {
    this.destroy.emit();
  }
}
