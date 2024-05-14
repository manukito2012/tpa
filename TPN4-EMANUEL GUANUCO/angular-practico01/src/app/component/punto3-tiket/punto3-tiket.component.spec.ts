import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Punto3TiketComponent } from './punto3-tiket.component';

describe('Punto3TiketComponent', () => {
  let component: Punto3TiketComponent;
  let fixture: ComponentFixture<Punto3TiketComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Punto3TiketComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Punto3TiketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
