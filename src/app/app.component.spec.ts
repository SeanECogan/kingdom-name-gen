import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSliderModule } from '@angular/material/slider';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GenerateControlComponent } from './generate-control/generate-control.component';
import { NamesControlComponent } from './names-control/names-control.component';
import { NameGeneratorService } from './services/name-generator.service';
import { SyllablesControlComponent } from './syllables-control/syllables-control.component';
import { NamesDisplayComponent } from './names-display/names-display.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let syllablesControl: DebugElement;
  let namesControl: DebugElement;
  let generateControl: DebugElement;
  let namesDisplay: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSliderModule
      ],
      providers: [
        NameGeneratorService
      ],
      declarations: [
        AppComponent,
        SyllablesControlComponent,
        NamesControlComponent,
        GenerateControlComponent,
        NamesDisplayComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    syllablesControl = fixture.debugElement.query(By.css('#syllables-control'));
    namesControl = fixture.debugElement.query(By.css('#names-control'));
    generateControl = fixture.debugElement.query(By.css('#generate-control'));
    namesDisplay = fixture.debugElement.query(By.css('#names-display'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should intialize properties with default values', () => {
    expect(component['_numberOfSyllables']).toEqual(component['DEFAULT_NUMBER_OF_SYLLABLES']);
    expect(component['_numberOfNames']).toEqual(component['DEFAULT_NUMBER_OF_NAMES']);
    expect(component['_names']).toEqual(component['DEFAULT_NAMES']);
  });

  it('should call the correct event handler when the syllables control changes', () => {
    spyOn(component, 'onNumberOfSyllablesChanged');

    const mockNumberOfSyllables = 5;

    syllablesControl.triggerEventHandler('numberOfSyllablesChange', mockNumberOfSyllables);

    expect(component.onNumberOfSyllablesChanged).toHaveBeenCalledWith(mockNumberOfSyllables);
  });

  it('should store the number of syllables when the control changes', () => {
    const mockNumberOfSyllables = 5;

    syllablesControl.triggerEventHandler('numberOfSyllablesChange', mockNumberOfSyllables);

    expect(component['_numberOfSyllables']).toEqual(mockNumberOfSyllables);
  });

  it('should call the correct event handler when the names control changes', () => {
    spyOn(component, 'onNumberOfNamesChanged');

    const mockNumberOfNames = 50;

    namesControl.triggerEventHandler('numberOfNamesChange', mockNumberOfNames);

    expect(component.onNumberOfNamesChanged).toHaveBeenCalledWith(mockNumberOfNames);
  });

  it('should store the number of syllables when the control changes', () => {
    const mockNumberOfNames = 50;

    namesControl.triggerEventHandler('numberOfNamesChange', mockNumberOfNames);

    expect(component['_numberOfNames']).toEqual(mockNumberOfNames);
  });

  it('should call the correct event handler when the generate control generates names', () => {
    spyOn(component, 'onNamesGenerated');

    const mockNames = [
      'Test1',
      'Test2',
      'Test3'
    ];

    generateControl.triggerEventHandler('namesGenerate', mockNames);

    expect(component.onNamesGenerated).toHaveBeenCalledWith(mockNames);
  });

  it('should store the names when they have been generated', () => {
    const mockNames = [
      'Test1',
      'Test2',
      'Test3'
    ];

    generateControl.triggerEventHandler('namesGenerate', mockNames);

    expect(component['_names']).toEqual(mockNames);
  });

  it('should not have a names display if there are no names', () => {
    component['_names'] = [];

    fixture.detectChanges();

    namesDisplay = fixture.debugElement.query(By.css('#names-display'));

    expect(namesDisplay).toBeFalsy();
  });

  it('should have a names display if there are some names', () => {
    component['_names'] = [
      'Test1',
      'Test2',
      'Test3'
    ];

    fixture.detectChanges();

    namesDisplay = fixture.debugElement.query(By.css('#names-display'));

    expect(namesDisplay).toBeTruthy();
  });
});
