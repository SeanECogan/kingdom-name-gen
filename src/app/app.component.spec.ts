import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSliderModule } from '@angular/material/slider';
import { By } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { GenerateControlComponent } from './generate-control/generate-control.component';
import { NamesControlComponent } from './names-control/names-control.component';
import { NameGeneratorService } from './services/name-generator.service';
import { SyllablesControlComponent } from './syllables-control/syllables-control.component';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let syllablesControl: DebugElement;
  let namesControl: DebugElement;

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
        GenerateControlComponent
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should intialize properties with default values', () => {
    expect(component['_numberOfSyllables']).toEqual(component['DEFAULT_NUMBER_OF_SYLLABLES']);
    expect(component['_numberOfNames']).toEqual(component['DEFAULT_NUMBER_OF_NAMES']);
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
});
