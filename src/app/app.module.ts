import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { SyllablesControlComponent } from './syllables-control/syllables-control.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import { NamesControlComponent } from './names-control/names-control.component';
import { GenerateControlComponent } from './generate-control/generate-control.component';
import { NameGeneratorService } from './services/name-generator.service';
import { NamesDisplayComponent } from './names-display/names-display.component';

@NgModule({
  declarations: [
    AppComponent,
    SyllablesControlComponent,
    NamesControlComponent,
    GenerateControlComponent,
    NamesDisplayComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NoopAnimationsModule,
    MatSliderModule,
    MatButtonModule
  ],
  providers: [
    NameGeneratorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
