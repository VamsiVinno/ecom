import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppRoutingModule } from 'src/app/approuting.module';

import { DeliverydateComponent } from './deliverydate.component';

describe('DeliverydateComponent', () => {
  let component: DeliverydateComponent;
  let fixture: ComponentFixture<DeliverydateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeliverydateComponent ],
      imports:[AppRoutingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeliverydateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
