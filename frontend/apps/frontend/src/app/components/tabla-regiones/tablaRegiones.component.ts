import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, signal } from '@angular/core';
import { Region } from '../../model/region.type';
import { RegionesService } from '../../services/regiones.service';
import { Router } from '@angular/router';

@Component({
  selector: 'tabla-regiones',
  standalone: true,
  imports: [],
  templateUrl: './tablaRegiones.component.html',
  styleUrl: './tablaRegiones.component.scss',
  
})
export class TablaRegionesComponent implements OnInit{
    
    private _regiones: WritableSignal<Region[]> = signal([]);

    public regiones = this._regiones.asReadonly();

    constructor(
      private service: RegionesService,
      private router: Router
    ){
      
    }

    ngOnInit(){
      this.service.getRegiones();
      this.regiones = this.service.regiones;
    }

    add(){
      this.router.navigate(['/formulario-region']);
    }
    edit(idRegion: number){
      this.router.navigate(['/formulario-editar-region', idRegion]);

    }
    delete(idRegion: number){
      this.service.deleteRegion(idRegion).then((result)=>{
        if(result){
          this.service.getRegiones();          
        }
      });

    }
}
