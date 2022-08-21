import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { TranslateRoutingModule } from './translate-routing.module';
import { TranslateComponent } from './translate.component';
import { TranslatorComponent } from './translator/translator.component';
import { TranslationComponent } from './translation/translation.component';


@NgModule({
  declarations: [
    TranslateComponent,
    TranslatorComponent,
    TranslationComponent
  ],
  imports: [
    CommonModule,
    TranslateRoutingModule,
    FormsModule,
    DragDropModule
  ]
})
export class TranslateModule { }
