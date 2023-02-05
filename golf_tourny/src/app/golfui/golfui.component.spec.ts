import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GolfuiComponent } from './golfui.component';

describe('GolfuiComponent', () => {
  let component: GolfuiComponent;
  let fixture: ComponentFixture<GolfuiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GolfuiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GolfuiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
