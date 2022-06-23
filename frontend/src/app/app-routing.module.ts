import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { TranslatorPageComponent } from './translator-page/translator-page.component';

const routes: Routes = [
  {
    path: '', component: AppComponent, children: [
      { path: '', component: TranslatorPageComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
