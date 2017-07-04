import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
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
    path: 'books',
    children: [],
    component: BooksComponent
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
