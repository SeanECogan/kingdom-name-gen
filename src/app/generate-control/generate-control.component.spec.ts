import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GenerateControlComponent } from './generate-control.component';

describe('GenerateControlComponent', () => {
  let component: GenerateControlComponent;
  let fixture: ComponentFixture<GenerateControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GenerateControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GenerateControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
