import { Component, Input } from '@angular/core';

@Component({
  selector: 'kng-names-display',
  templateUrl: './names-display.component.html',
  styleUrls: ['./names-display.component.css']
})
export class NamesDisplayComponent {
  constructor() { }

  private _scrollToNamesList(): void {
    const namesList = document.getElementById('names-list');

    const scrollToNamesList = window.setInterval(() => {
      const namesListPosition = namesList.offsetTop - 20;
      const currentPosition = window.pageYOffset;

      if (currentPosition < namesListPosition) {
        window.scrollTo(0, currentPosition + 5);
      } else {
        window.clearInterval(scrollToNamesList);
      }
    });
  }

  @Input() set names(value: string[]) {
    this._names = value;

    this._scrollToNamesList();
  }

  get names(): string[] {
    return this._names;
  }

  private _names: string[];
}
