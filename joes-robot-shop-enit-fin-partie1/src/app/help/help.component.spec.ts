import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HELPComponent } from './help.component';

describe('HELPComponent', () => {
  let component: HELPComponent;
  let fixture: ComponentFixture<HELPComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HELPComponent]
    });
    fixture = TestBed.createComponent(HELPComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
