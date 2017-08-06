import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneratorFunctionComponent } from './generator-function.component';

describe('GeneratorFunctionComponent', () => {
  let component: GeneratorFunctionComponent;
  let fixture: ComponentFixture<GeneratorFunctionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GeneratorFunctionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GeneratorFunctionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
