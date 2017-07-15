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
import { DateformatService } from './services/dateformat.service';
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
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { ArticlesListComponent } from './articles-list/articles-list.component';

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
    ArticlesListComponent,
  ],
  imports: [
    OrderModule,
    Ng2OrderModule,
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
  providers: [
    RecordsService, 
    Pager,  
    DateformatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
