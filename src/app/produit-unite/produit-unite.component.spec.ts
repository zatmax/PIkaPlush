import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduitUniteComponent } from './produit-unite.component';

describe('ProduitUniteComponent', () => {
  let component: ProduitUniteComponent;
  let fixture: ComponentFixture<ProduitUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduitUniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduitUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
