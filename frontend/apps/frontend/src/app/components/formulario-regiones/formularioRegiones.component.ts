import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, input, signal } from '@angular/core';
import { Region } from '../../model/region.type';
import { RegionesService } from '../../services/regiones.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'form-regiones',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './formularioRegiones.component.html',
  styleUrl: './formularioRegiones.component.scss',
  
})
export class FormularioRegionesComponent implements OnInit{
    
    editar = false;

    formularioRegion: FormGroup;

    constructor(
      private service: RegionesService,
      private activatedRoute: ActivatedRoute,
      private router: Router
    ){
        this.formularioRegion = new FormGroup({
          id: new FormControl(null, Validators.required),
          nombre: new FormControl('', Validators.required),
          codigo: new FormControl('', Validators.required),
        });
    }

    ngOnInit(){
      if(this.activatedRoute.snapshot.data && this.activatedRoute.snapshot.data['editar']){
        this.editar = true;
      }

      if(this.editar){
        const idRegion = this.activatedRoute.snapshot.params['idRegion'];
        this.service.getRegion(idRegion).then((dataRegion)=>{
          console.log('dataRegion: ',dataRegion);
          const value = {
            id: dataRegion.id,
            nombre: dataRegion.nombre,
            codigo: dataRegion.codigo,
          }
          console.log('value: ',dataRegion);
          this.formularioRegion.setValue(value);
        });
      }
    }
    save(){
      if(this.formularioRegion.valid){
        const value = this.formularioRegion.value;
        const region = {
          id: value.id,
          nombre: value.nombre,
          codigo: value.codigo,
          vigente: true
        }
        this.service.addRegion(region).then((val)=>{
          if(val){
            this.router.navigate(['/lista-regiones']);
          }
        });
      }
    }
    update(){
      if(this.formularioRegion.valid){
        const value = this.formularioRegion.value;
        const region = {
          id: value.id,
          nombre: value.nombre,
          codigo: value.codigo,
          vigente: true
        }
        this.service.updateRegion(region).then((val)=>{
          if(val){
            this.router.navigate(['/lista-regiones']);
          }
        });
      }
    }    
    cancel(){
      this.router.navigate(['/lista-regiones']);
    }
}
