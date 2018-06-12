import { DebugElement } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSliderChange, MatSliderModule } from '@angular/material/slider';
import { By } from '@angular/platform-browser';
import { NamesControlComponent } from './names-control.component';

describe('NamesControlComponent', () => {
  let component: NamesControlComponent;
  let fixture: ComponentFixture<NamesControlComponent>;

  let numberOfNamesSlider: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MatSliderModule
      ],
      declarations: [
        NamesControlComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesControlComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    numberOfNamesSlider = fixture.debugElement.query(By.css('#number-of-names'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the correct event handler when the slider changes', () => {
    spyOn(component, 'onNumberOfNamesChanged');

    const mockEvent: MatSliderChange = {
      source: numberOfNamesSlider.nativeElement,
      value: 5
    };

    numberOfNamesSlider.triggerEventHandler('change', mockEvent);

    expect(component.onNumberOfNamesChanged).toHaveBeenCalledWith(mockEvent);
  });

  it('should emit the value of the slider when it changes', () => {
    spyOn(component.numberOfNamesChange, 'emit');

    const mockEvent: MatSliderChange = {
      source: numberOfNamesSlider.nativeElement,
      value: 50
    };

    numberOfNamesSlider.triggerEventHandler('change', mockEvent);

    expect(component.numberOfNamesChange.emit).toHaveBeenCalledWith(mockEvent.value);
  });

  it('should emit the default slider value if the event is null', () => {
    spyOn(component.numberOfNamesChange, 'emit');

    const mockEvent: MatSliderChange = null;

    numberOfNamesSlider.triggerEventHandler('change', mockEvent);

    expect(component.numberOfNamesChange.emit).toHaveBeenCalledWith(component['DEFAULT_SLIDER_VALUE']);
  });

  it('should emit the default slider value if the event value is null', () => {
    spyOn(component.numberOfNamesChange, 'emit');

    const mockEvent: MatSliderChange = {
      source: numberOfNamesSlider.nativeElement,
      value: null
    };

    numberOfNamesSlider.triggerEventHandler('change', mockEvent);

    expect(component.numberOfNamesChange.emit).toHaveBeenCalledWith(component['DEFAULT_SLIDER_VALUE']);
  });
});
