import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesDisplayComponent } from './names-display.component';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NamesDisplayComponent', () => {
  let component: NamesDisplayComponent;
  let fixture: ComponentFixture<NamesDisplayComponent>;

  let namesList: DebugElement;
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

    namesList = fixture.debugElement.query(By.css('#names-list'));
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

  it('should scroll to the names list each time the names are updated', () => {
    spyOn<any>(component, '_scrollToNamesList');

    component.names = [];

    component.names = [
      'Test',
      'Test2',
      'Test3'
    ];

    component.names = [];

    expect(component['_scrollToNamesList']).toHaveBeenCalledTimes(3);
  });

  it('should properly detect when the window is scrolled to the bottom', () => {
    window.scrollTo(0, 10000);

    expect(component['_scrolledToBottom']()).toBeTruthy();
  });
});
