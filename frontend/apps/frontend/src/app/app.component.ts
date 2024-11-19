import { Component, signal } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TablaRegionesComponent } from './components/tabla-regiones/tablaRegiones.component';

@Component({
  selector: 'fe-root',
  standalone: true,
  imports: [RouterOutlet, TablaRegionesComponent, CommonModule, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  titulo = signal<string>('Examen de código');
}
