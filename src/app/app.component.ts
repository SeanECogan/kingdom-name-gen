import { Component } from '@angular/core';

@Component({
  selector: 'kng-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor() {
    this.DEFAULT_NUMBER_OF_SYLLABLES = 1;
    this.numberOfSyllables = this.DEFAULT_NUMBER_OF_SYLLABLES;

    this.DEFAULT_NUMBER_OF_NAMES = 5;
    this.numberOfNames = this.DEFAULT_NUMBER_OF_NAMES;

    this.DEFAULT_NAMES = [];
    this.names = [];
  }

  onNumberOfSyllablesChanged(event: number): void {
    this.numberOfSyllables = event;
  }

  onNumberOfNamesChanged(event: number): void {
    this.numberOfNames = event;
  }

  onNamesGenerated(event: string[]): void {
    this.names = event;
  }

  numberOfSyllables: number;
  numberOfNames: number;
  names: string[];

  private DEFAULT_NUMBER_OF_SYLLABLES: number;
  private DEFAULT_NUMBER_OF_NAMES: number;
  private DEFAULT_NAMES: string[];
}
