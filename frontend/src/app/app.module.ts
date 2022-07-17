import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { DragDropModule } from '@angular/cdk/drag-drop';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TranslatorPageComponent } from './translator-page/translator-page.component';
import { HeaderComponent } from './header/header.component';
import { GuidePageComponent } from './guide-page/guide-page.component';
import { TranslatorComponent } from './translator-page/translator/translator.component';
import { TranslationComponent } from './translation/translation.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    TranslatorPageComponent,
    HeaderComponent,
    GuidePageComponent,
    TranslatorComponent,
    TranslationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    DragDropModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
