import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PanelComponent } from './panel/panel.component';
import { MyDatePickerModule } from 'mydatepicker';
import { RecordsService } from './records.service';
import { EllipsisPipe } from './ellipsis.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PanelComponent,
    EllipsisPipe
  ],
  imports: [
    MyDatePickerModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [RecordsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
