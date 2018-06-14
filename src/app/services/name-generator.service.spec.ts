import { getTestBed, TestBed } from '@angular/core/testing';
import { NameGeneratorService } from './name-generator.service';

describe('NameGeneratorService', () => {
  let injector;
  let service: NameGeneratorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        NameGeneratorService
      ]
    });

    injector = getTestBed();
    service = injector.get(NameGeneratorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should generate the correct amount of names', () => {
    const numberOfNames = 5;
    const numberOfSyllables = 5;

    const names = service.generateNames(
      numberOfNames,
      numberOfSyllables      
    );

    expect(names.length).toEqual(numberOfNames);
  });

  it('should capitalize the first letter of each name', () => {
    const numberOfNames = 5;
    const numberOfSyllables = 5;

    const names = service.generateNames(
      numberOfNames,
      numberOfSyllables      
    );

    for (let name of names) {
      expect(name[0]).toEqual(name[0].toUpperCase());
    }
  });

  it('should use the correct number of syllables for each name', () => {
    spyOn<any>(service, 'getRandomSyllable').and.returnValue('a');

    const numberOfNames = 5;
    const numberOfSyllables = 5;

    service.generateNames(
      numberOfNames,
      numberOfSyllables      
    );

    expect(service['getRandomSyllable'])
      .toHaveBeenCalledTimes(numberOfNames * numberOfSyllables);
  });
});
