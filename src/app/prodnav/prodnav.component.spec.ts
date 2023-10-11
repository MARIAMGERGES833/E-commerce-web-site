import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdnavComponent } from './prodnav.component';

describe('ProdnavComponent', () => {
  let component: ProdnavComponent;
  let fixture: ComponentFixture<ProdnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProdnavComponent]
    });
    fixture = TestBed.createComponent(ProdnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
