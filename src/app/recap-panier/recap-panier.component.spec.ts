import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecapPanierComponent } from './recap-panier.component';

describe('RecapPanierComponent', () => {
  let component: RecapPanierComponent;
  let fixture: ComponentFixture<RecapPanierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecapPanierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecapPanierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
