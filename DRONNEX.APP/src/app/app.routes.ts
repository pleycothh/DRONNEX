import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashComponent } from './flash/flash.component';
import { PrintComponent } from './print/print.component';
import { DetailedPrintComponent } from './print/detailed-print/detailed-print.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {
      path: '',
      //component: FlashComponent,
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },
        { path: 'flash', component: FlashComponent },
        { path: 'print', component: PrintComponent },
        { path: 'print/detail/:id', component: DetailedPrintComponent },
        { path: 'contact', component: ContactComponent },

      
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

