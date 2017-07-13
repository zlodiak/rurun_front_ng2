import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MdButtonModule, MdInputModule, MdToolbarModule, MdSidenavModule, MdListModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { MyDatePickerModule } from 'mydatepicker';
import { PaginatorService } from './services/paginator.service';
import { RecordsService } from './records.service';
import { Pager } from './pager';
import { EllipsisPipe } from './ellipsis.pipe';
import { RenderComponent } from './render/render.component';
import { HomeComponent } from './home/home.component';
import { BooksComponent } from './books/books.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlesComponent } from './articles/articles.component';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    EllipsisPipe,
    RenderComponent,
    HomeComponent,
    BooksComponent,
    NotFoundComponent,
    ArticlesComponent,
  ],
  imports: [
    MdListModule,
    MdSidenavModule,
    MdToolbarModule,
    MdInputModule,
    BrowserAnimationsModule,
    MdButtonModule,
    MyDatePickerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RecordsService, Pager, PaginatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
