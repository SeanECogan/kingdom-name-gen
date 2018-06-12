import { Component, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'kng-syllables-control',
  templateUrl: './syllables-control.component.html',
  styleUrls: ['./syllables-control.component.css']
})
export class SyllablesControlComponent {
  constructor() {
    this.numberOfSyllablesChange = new EventEmitter<number>();
    this.DEFAULT_SLIDER_VALUE = 1;
  }

  onNumberOfSyllablesChanged(event: MatSliderChange): void {
    if (event !== null && event.value !== null) {
      this.numberOfSyllablesChange.emit(event.value);
    } else {
      this.numberOfSyllablesChange.emit(this.DEFAULT_SLIDER_VALUE);
    }
  }

  @Output() numberOfSyllablesChange: EventEmitter<number>;

  private DEFAULT_SLIDER_VALUE: number;
}
