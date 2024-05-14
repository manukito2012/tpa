import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { HeaderComponent } from './component/header/header.component';
import { Punto1ProductosComponent } from './component/punto1-productos/punto1-productos.component';
import { Punto3TiketListadosComponent } from './component/punto3-tiket-listados/punto3-tiket-listados.component';
import { Punto3TiketComponent } from './component/punto3-tiket/punto3-tiket.component';
import { FooterComponent } from './component/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent,HeaderComponent,Punto1ProductosComponent,Punto3TiketComponent,Punto3TiketListadosComponent,
    FooterComponent,RouterModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-practico01';
}
