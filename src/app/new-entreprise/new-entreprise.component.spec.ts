import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEntrepriseComponent } from './new-entreprise.component';

describe('NewEntrepriseComponent', () => {
  let component: NewEntrepriseComponent;
  let fixture: ComponentFixture<NewEntrepriseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEntrepriseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEntrepriseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
