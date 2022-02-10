import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxStereoCardComponent } from './ngx-stereo-card.component';

describe('NgxStereoCardComponent', () => {
  let component: NgxStereoCardComponent;
  let fixture: ComponentFixture<NgxStereoCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgxStereoCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxStereoCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
