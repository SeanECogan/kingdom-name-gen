import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { MatSliderModule } from '@angular/material/slider';
import { AppComponent } from './app.component';
import { SyllablesControlComponent } from './syllables-control/syllables-control.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;

  let syllablesControl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSliderModule
      ],
      declarations: [
        AppComponent,
        SyllablesControlComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    syllablesControl = fixture.debugElement.query(By.css('#syllables-control'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should intialize properties with default values', () => {
    expect(component['_numberOfSyllables']).toEqual(component['DEFAULT_NUMBER_OF_SYLLABLES']);
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
});
