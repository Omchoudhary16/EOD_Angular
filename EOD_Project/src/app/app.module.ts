import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterComponent } from './footer/footer.component';
import { AddEODComponent } from './add-eod/add-eod.component';
import { ViewEODComponent } from './view-eod/view-eod.component';
import { EodPipe } from './Pipe/eod.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PopModalComponent } from './pop-modal/pop-modal.component';
import { LeaveEODComponent } from './leave-eod/leave-eod.component'

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    AddEODComponent,
    ViewEODComponent,
    EodPipe,
    PopModalComponent,
    LeaveEODComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
