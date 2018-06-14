import { Injectable } from '@angular/core';
import syllables from '../data/syllables';

@Injectable()
export class NameGeneratorService {

  constructor() { }

  generateNames(
    numberOfSyllables: number,
    numberOfNames: number    
  ) : string[] {
    const names = new Array<string>();

    for (let i = 0; i < numberOfNames; i++) {
      let name = '';

      for (let j = 0; j < numberOfSyllables; j++) {
        name = name + this.getRandomSyllable();
      }

      names.push(this.capitalizeFirstLetter(name));
    }

    return names;
  }

  private getRandomSyllable(): string {
    const syllableIndex = Math.floor(Math.random() * syllables.length);

    return syllables[syllableIndex];
  }

  private capitalizeFirstLetter(name: string): string {
    return name[0].toUpperCase() + name.substring(1);
  }
}
