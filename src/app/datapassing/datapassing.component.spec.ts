import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatapassingComponent } from './datapassing.component';

describe('DatapassingComponent', () => {
  let component: DatapassingComponent;
  let fixture: ComponentFixture<DatapassingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatapassingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatapassingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
