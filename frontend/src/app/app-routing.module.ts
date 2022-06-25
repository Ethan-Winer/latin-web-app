import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TranslatorPageComponent } from './translator-page/translator-page.component';
import { GuidePageComponent } from './guide-page/guide-page.component';

const routes: Routes = [
  { path: '', component: TranslatorPageComponent },
  { path: 'guide', component: GuidePageComponent }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
