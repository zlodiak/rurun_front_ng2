import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MdButtonModule, 
         MdInputModule, 
         MdToolbarModule, 
         MdSidenavModule, 
         MdListModule, 
         MdDatepickerModule,
         MdNativeDateModule, 
         MdTabsModule, 
         MdDialogModule } from '@angular/material';         

import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { RenderComponent } from './render/render.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ArticlesComponent } from './articles/articles.component';
import { FilterComponent } from './filter/filter.component';
import { RecordDetailsComponent } from './record-details/record-details.component';
import { ArticlesListComponent } from './articles-list/articles-list.component';
import { ArticleDetailsComponent } from './article-details/article-details.component';
import { EventsComponent } from './events/events.component';

import { DateformatService } from './services/dateformat.service';
import { EventsService } from './services/events.service';
import { HeaderService } from './services/header.service';
import { RecordsService } from './services/records.service';
import { ArticlesService } from './services/articles.service';
import { ScrollService } from './services/scroll.service';

import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { ArticlesFilterPipe } from './pipes/articles-filter.pipe';

import { ScrollArrowDirective } from './directives/scroll-arrow.directive';

import 'hammerjs';
import 'hammer-timejs';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { OrderModule } from 'ngx-order-pipe';
import { PopupModule } from 'ng2-opd-popup';


@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    EllipsisPipe,
    RenderComponent,
    HomeComponent,
    NotFoundComponent,
    ArticlesComponent,
    FilterComponent,
    RecordDetailsComponent,
    ArticlesListComponent,
    ArticleDetailsComponent,
    EventsComponent,
    ArticlesFilterPipe,
    ScrollArrowDirective,
  ],
  imports: [
    PopupModule.forRoot(),
    MdDialogModule,
    MdTabsModule,
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
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [
    ArticlesService,
    ScrollService,
    HeaderService,
    EventsService,
    RecordsService,  
    DateformatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
