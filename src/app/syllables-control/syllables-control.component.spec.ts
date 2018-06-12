import { ComponentFixture, TestBed, async } from '@angular/core/testing';
import { SyllablesControlComponent } from './syllables-control.component';
import { MatSliderModule, MatSliderChange, MatSlider } from '@angular/material/slider';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('SyllablesControlComponent', () => {
  let component: SyllablesControlComponent;
  let fixture: ComponentFixture<SyllablesControlComponent>;

  let numberOfSyllablesSlider: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSliderModule
      ],
      declarations: [
        SyllablesControlComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SyllablesControlComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    numberOfSyllablesSlider = fixture.debugElement.query(By.css('#number-of-syllables'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the correct event handler when the slider changes', () => {
    spyOn(component, 'onNumberOfSyllablesChanged');

    const mockEvent: MatSliderChange = {
      source: numberOfSyllablesSlider.nativeElement,
      value: 5
    };

    numberOfSyllablesSlider.triggerEventHandler('change', mockEvent);

    expect(component.onNumberOfSyllablesChanged).toHaveBeenCalledWith(mockEvent);
  });

  it('should emit the value of the slider when it changes', () => {
    spyOn(component.numberOfSyllablesChange, 'emit');

    const mockEvent: MatSliderChange = {
      source: numberOfSyllablesSlider.nativeElement,
      value: 5
    };

    numberOfSyllablesSlider.triggerEventHandler('change', mockEvent);

    expect(component.numberOfSyllablesChange.emit).toHaveBeenCalledWith(mockEvent.value);
  });

  it('should emit the default slider value if the event is null', () => {
    spyOn(component.numberOfSyllablesChange, 'emit');

    const mockEvent: MatSliderChange = null;

    numberOfSyllablesSlider.triggerEventHandler('change', mockEvent);

    expect(component.numberOfSyllablesChange.emit).toHaveBeenCalledWith(component['DEFAULT_SLIDER_VALUE']);
  });

  it('should emit the default slider value if the event value is null', () => {
    spyOn(component.numberOfSyllablesChange, 'emit');

    const mockEvent: MatSliderChange = {
      source: numberOfSyllablesSlider.nativeElement,
      value: null
    };

    numberOfSyllablesSlider.triggerEventHandler('change', mockEvent);

    expect(component.numberOfSyllablesChange.emit).toHaveBeenCalledWith(component['DEFAULT_SLIDER_VALUE']);
  });
});
