import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { TranslatorPageComponent } from './translator-page/translator-page.component';
// import { GuidePageComponent } from './guide-page/guide-page.component';

const routes: Routes = [
  { path: 'guide', loadChildren: () => import('./guide/guide.module').then(m => m.GuideModule) },
  { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
  { path: 'contact', loadChildren: () => import('./contact/contact.module').then(m => m.ContactModule) },
  { path: '', loadChildren: () => import('./translate/translate.module').then(m => m.TranslateModule) },  //i had to put this on the bottom to stop it from loading if any of the other routes loaded
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
