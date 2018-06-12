import { Component } from '@angular/core';

@Component({
  selector: 'kng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.DEFAULT_NUMBER_OF_SYLLABLES = 1;
    this._numberOfSyllables = this.DEFAULT_NUMBER_OF_SYLLABLES;

    this.DEFAULT_NUMBER_OF_NAMES = 5;
    this._numberOfNames = this.DEFAULT_NUMBER_OF_NAMES;
  }

  onNumberOfSyllablesChanged(event: number): void {
    this._numberOfSyllables = event;
  }

  onNumberOfNamesChanged(event: number): void {
    this._numberOfNames = event;
  }

  private _numberOfSyllables: number;
  private _numberOfNames: number;

  private DEFAULT_NUMBER_OF_SYLLABLES: number;
  private DEFAULT_NUMBER_OF_NAMES: number;
}
