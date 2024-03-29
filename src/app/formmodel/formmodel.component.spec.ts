import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormmodelComponent } from './formmodel.component';

describe('FormmodelComponent', () => {
  let component: FormmodelComponent;
  let fixture: ComponentFixture<FormmodelComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormmodelComponent]
    });
    fixture = TestBed.createComponent(FormmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
