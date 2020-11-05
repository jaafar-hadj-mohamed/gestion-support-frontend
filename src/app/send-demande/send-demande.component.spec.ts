import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendDemandeComponent } from './send-demande.component';

describe('SendDemandeComponent', () => {
  let component: SendDemandeComponent;
  let fixture: ComponentFixture<SendDemandeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendDemandeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendDemandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
