import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesDisplayComponent } from './names-display.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NamesDisplayComponent', () => {
  let component: NamesDisplayComponent;
  let fixture: ComponentFixture<NamesDisplayComponent>;

  let nameSpans: DebugElement[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NamesDisplayComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesDisplayComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    nameSpans = fixture.debugElement.queryAll(By.css('.name'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should not display any name spans if there are no names', () => {
    component.names = [];

    fixture.detectChanges();

    nameSpans = fixture.debugElement.queryAll(By.css('.name'));

    expect(nameSpans.length).toBe(component.names.length);
  });

  it('should display one name span for each name', () => {
    component.names = [
      'Test1',
      'Test2',
      'Test3'
    ];

    fixture.detectChanges();

    nameSpans = fixture.debugElement.queryAll(By.css('.name'));

    expect(nameSpans.length).toBe(component.names.length);
  });
});
