import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Translation } from '../translation.model';

@Component({
  selector: 'app-translation',
  templateUrl: './translation.component.html',
  styleUrls: ['./translation.component.css']
})
export class TranslationComponent implements OnInit {
  @Input() translation: Translation;
  hovering: boolean = false;
  @Output() destroy = new EventEmitter();
  minimized: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  emitDestroy() {
    this.destroy.emit();
  }
}
