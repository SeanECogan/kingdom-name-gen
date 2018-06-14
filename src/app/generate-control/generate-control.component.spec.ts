import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateControlComponent } from './generate-control.component';
import { NameGeneratorService } from '../services/name-generator.service';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('GenerateControlComponent', () => {
  let component: GenerateControlComponent;
  let fixture: ComponentFixture<GenerateControlComponent>;

  const fakeNames = [
    'Test1',
    'Test2',
    'Test3'
  ];

  const fakeNameGeneratorService =
    jasmine.createSpyObj('NameGeneratorService', ['generateNames']);
  const generateNamesSpy =
    fakeNameGeneratorService.generateNames.and.returnValue(fakeNames);

  let generateNamesButton: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: NameGeneratorService, useValue: fakeNameGeneratorService }
      ],
      declarations: [
        GenerateControlComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateControlComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    generateNamesButton = fixture.debugElement.query(By.css('#generate-names-button'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the name generator service on button click', () => {
    const numberOfSyllables = 5;
    const numberOfNames = 10;

    component.numberOfSyllables = numberOfSyllables;
    component.numberOfNames = numberOfNames;

    generateNamesButton.triggerEventHandler('click', null);

    expect(generateNamesSpy)
      .toHaveBeenCalledWith(numberOfSyllables, numberOfNames);
  });

  it('should emit the values returned from the name generator service on button click', () => {
    spyOn(component.namesGenerate, 'emit');

    const numberOfSyllables = 5;
    const numberOfNames = 10;

    component.numberOfSyllables = numberOfSyllables;
    component.numberOfNames = numberOfNames;

    generateNamesButton.triggerEventHandler('click', null);

    expect(component.namesGenerate.emit).toHaveBeenCalledWith(fakeNames);
  });
});
