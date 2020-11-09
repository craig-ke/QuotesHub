import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SayWorkComponent } from './say-work.component';

describe('SayWorkComponent', () => {
  let component: SayWorkComponent;
  let fixture: ComponentFixture<SayWorkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SayWorkComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SayWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
