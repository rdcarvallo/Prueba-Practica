import { Routes } from '@angular/router';
import { TablaRegionesComponent } from './components/tabla-regiones/tablaRegiones.component';
import { FormularioRegionesComponent } from './components/formulario-regiones/formularioRegiones.component';
import { NotFoundComponent } from './components/not-found/notFound.component';

export const routes: Routes = [
    {
        path: 'lista-regiones',
        component: TablaRegionesComponent
    },
    {
        path: 'formulario-region',
        component: FormularioRegionesComponent
    },
    {
        path: 'formulario-editar-region/:idRegion',
        component: FormularioRegionesComponent,
        data: {editar: true}
    },
    {
        path: '404-not-found',
        pathMatch: 'full', 
        component: NotFoundComponent
    },
    {
        path: '**', 
        component: NotFoundComponent
//        redirectTo: '404-not-found'
    }

];
