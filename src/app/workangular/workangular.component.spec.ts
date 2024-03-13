import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkangularComponent } from './workangular.component';

describe('WorkangularComponent', () => {
  let component: WorkangularComponent;
  let fixture: ComponentFixture<WorkangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WorkangularComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WorkangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
