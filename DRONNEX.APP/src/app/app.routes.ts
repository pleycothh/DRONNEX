import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlashComponent } from './flash/flash.component';
import { PrintComponent } from './print/print.component';
import { DetailedPrintComponent } from './print/detailed-print/detailed-print.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ToolComponent } from './tool/tool.component';
import { DetailedBlogComponent } from './blog/detailed-blog/detailed-blog.component';
import { BlogComponent } from './blog/blog.component';
import { ProjectComponent } from './project/project.component';

export const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'home', component: HomeComponent },

        { path: 'tool', component: ToolComponent },

        { path: 'project', component: ProjectComponent },

        { path: 'blog', component: BlogComponent },
        { path: 'blog/detail/:id', component: DetailedBlogComponent },

        { path: 'contact', component: ContactComponent },

      
      ]
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

