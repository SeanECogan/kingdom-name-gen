import { Component, Input, Output, EventEmitter } from '@angular/core';
import { NameGeneratorService } from '../services/name-generator.service';

@Component({
  selector: 'kng-generate-control',
  templateUrl: './generate-control.component.html',
  styleUrls: ['./generate-control.component.css']
})
export class GenerateControlComponent {

  constructor(
    private _nameGenerator: NameGeneratorService
  ) {
    this.namesGenerate = new EventEmitter<string[]>();
  }

  onGenerateButtonClicked(): void {
    const names = this._nameGenerator.generateNames(
      this.numberOfSyllables,
      this.numberOfNames
    );

    this.namesGenerate.emit(names);
  }

  @Input() numberOfSyllables: number;
  @Input() numberOfNames: number;

  @Output() namesGenerate: EventEmitter<string[]>;
}
