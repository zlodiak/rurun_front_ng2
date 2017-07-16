import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ArticlesComponent } from './articles/articles.component';
import { PanelComponent } from './panel/panel.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: '/home', 
    pathMatch: 'full'
  },
  {
    path: 'home',
    children: [],
    component: HomeComponent
  },
  {
    path: 'panel',
    children: [],
    component: PanelComponent
  }, 
  {
    path: 'articles',
    children: [],
    component: ArticlesComponent
  },
  { 
    path: '**', 
    children: [],
    component: NotFoundComponent 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
