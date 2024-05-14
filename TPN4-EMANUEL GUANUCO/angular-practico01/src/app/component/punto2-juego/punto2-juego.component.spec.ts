import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto2JuegoComponent } from './punto2-juego.component';

describe('Punto2JuegoComponent', () => {
  let component: Punto2JuegoComponent;
  let fixture: ComponentFixture<Punto2JuegoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punto2JuegoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Punto2JuegoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
