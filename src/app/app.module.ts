import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, 
         MdInputModule, 
         MdToolbarModule, 
         MdSidenavModule, 
         MdListModule, 
         MdDatepickerModule,
         MdNativeDateModule } from '@angular/material';

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
import { FilterComponent } from './filter/filter.component';
import { RecordDetailsComponent } from './record-details/record-details.component';

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
    FilterComponent,
    RecordDetailsComponent,
  ],
  imports: [
    MdNativeDateModule,
    MdDatepickerModule,
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
