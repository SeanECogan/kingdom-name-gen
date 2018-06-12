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
  }

  onNumberOfSyllablesChanged(event: number): void {
    this._numberOfSyllables = event;
  }

  private _numberOfSyllables: number;

  private DEFAULT_NUMBER_OF_SYLLABLES: number;
}
