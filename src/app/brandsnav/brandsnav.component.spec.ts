import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsnavComponent } from './brandsnav.component';

describe('BrandsnavComponent', () => {
  let component: BrandsnavComponent;
  let fixture: ComponentFixture<BrandsnavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsnavComponent]
    });
    fixture = TestBed.createComponent(BrandsnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
