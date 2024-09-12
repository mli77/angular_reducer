import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpStatusComponent } from './http-status.component';

describe('HttpStatusComponent', () => {
  let component: HttpStatusComponent;
  let fixture: ComponentFixture<HttpStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HttpStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
