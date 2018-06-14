import { Component, Input } from '@angular/core';

@Component({
  selector: 'kng-generate-control',
  templateUrl: './generate-control.component.html',
  styleUrls: ['./generate-control.component.css']
})
export class GenerateControlComponent {

  constructor() { }

  onGenerateButtonClicked(): void {
  }

  @Input() numberOfSyllables: number;
  @Input() numberOfNames: number;
}
