import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EntrepriseUniteComponent } from './entreprise-unite.component';

describe('EntrepriseUniteComponent', () => {
  let component: EntrepriseUniteComponent;
  let fixture: ComponentFixture<EntrepriseUniteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseUniteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EntrepriseUniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
