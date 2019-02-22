import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectProcesoComponent } from './select-proceso.component';

describe('SelectProcesoComponent', () => {
  let component: SelectProcesoComponent;
  let fixture: ComponentFixture<SelectProcesoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectProcesoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectProcesoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
