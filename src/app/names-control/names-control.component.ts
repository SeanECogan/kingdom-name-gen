import { Component, EventEmitter, Output } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'kng-names-control',
  templateUrl: './names-control.component.html',
  styleUrls: ['./names-control.component.css']
})
export class NamesControlComponent {
  constructor() {
    this.numberOfNamesChange = new EventEmitter<number>();
    this.DEFAULT_SLIDER_VALUE = 5;
  }

  onNumberOfNamesChanged(event: MatSliderChange): void {
    if (event !== null && event.value !== null) {
      this.numberOfNamesChange.emit(event.value);
    } else {
      this.numberOfNamesChange.emit(this.DEFAULT_SLIDER_VALUE);
    }
  }

  @Output() numberOfNamesChange: EventEmitter<number>;

  private DEFAULT_SLIDER_VALUE: number;
}
