import { ChangeDetectionStrategy, Component, OnInit, WritableSignal, input, signal } from '@angular/core';
import { Region } from '../../model/region.type';
import { RegionesService } from '../../services/regiones.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'not-found',
  standalone: true,
  imports: [],
  templateUrl: './notFound.component.html',
  styleUrl: './notFound.component.scss',
  
})
export class NotFoundComponent implements OnInit{
    
    path: string = '';

    constructor(private activatedRoute: ActivatedRoute){
    }

    ngOnInit(){
      this.path = this.activatedRoute.snapshot.url[0].path;
    }
}
