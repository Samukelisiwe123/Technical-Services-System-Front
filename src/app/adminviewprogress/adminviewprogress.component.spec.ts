import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminviewprogressComponent } from './adminviewprogress.component';

describe('AdminviewprogressComponent', () => {
  let component: AdminviewprogressComponent;
  let fixture: ComponentFixture<AdminviewprogressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminviewprogressComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminviewprogressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
