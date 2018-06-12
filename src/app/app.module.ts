import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SyllablesControlComponent } from './syllables-control/syllables-control.component';
import { MatSliderModule } from '@angular/material/slider';
import { NamesControlComponent } from './names-control/names-control.component';

@NgModule({
  declarations: [
    AppComponent,
    SyllablesControlComponent,
    NamesControlComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NoopAnimationsModule,
    MatSliderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
