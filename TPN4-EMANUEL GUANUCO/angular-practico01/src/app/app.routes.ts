import { Routes } from '@angular/router';
import { Punto3TiketComponent } from './component/punto3-tiket/punto3-tiket.component';
import { Punto3TiketListadosComponent } from './component/punto3-tiket-listados/punto3-tiket-listados.component';
import { HomeComponent } from './component/home/home.component';
import { Punto1ProductosComponent } from './component/punto1-productos/punto1-productos.component';
import { Punto2JuegoComponent } from './component/punto2-juego/punto2-juego.component';

export const routes: Routes = [


        { path: 'home', component: HomeComponent },
        { path: '', pathMatch: 'full', redirectTo: 'home' },

        { path:'producto',
            component: Punto1ProductosComponent
        },
        { path:'juego',
        component: Punto2JuegoComponent
        },
        {
        path: 'ticket-lista',
        component : Punto3TiketListadosComponent
        },
        {
         path: 'ticket',
        component : Punto3TiketComponent
        },
        {
        path: 'ticket/:id',
        component : Punto3TiketComponent
        }
];
