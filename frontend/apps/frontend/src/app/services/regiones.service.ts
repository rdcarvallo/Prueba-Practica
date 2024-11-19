import { Injectable, WritableSignal, signal } from '@angular/core';
import { Region } from '../model/region.type';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegionesService {

    _regiones: WritableSignal<Region[]> = signal([]);
    regiones = this._regiones.asReadonly();

    constructor(private http: HttpClient){ 

    }

    getRegiones(){
        this.http.get('http://localhost:3002/regiones').subscribe((response)=>{
            this._regiones.set(response as Region[]);
        });
    } 

    getRegion(idRegion: number): Promise<Region>{
        return new Promise<Region>((resolve, reject) =>{
            this.http.get('http://localhost:3002/regiones/'+idRegion).subscribe((response)=>{
                resolve(response as Region);
            });    
        });
    }

    addRegion(region: Region): Promise<boolean>{
        return new Promise<boolean>((resolve, reject) =>{
            this.http.post('http://localhost:3002/regiones/', region).subscribe((response)=>{
                resolve(response as boolean);
            });    
        });
    }
    updateRegion(region: Region): Promise<boolean>{
        return new Promise<boolean>((resolve, reject) =>{
            this.http.put('http://localhost:3002/regiones/'+region.id, region).subscribe((response)=>{
                resolve(response as boolean);
            });    
        });
    }
    deleteRegion(idRegion: number): Promise<boolean>{
        return new Promise<boolean>((resolve, reject) =>{
            this.http.delete('http://localhost:3002/regiones/'+idRegion).subscribe((response)=>{
                resolve(response as boolean);
            });    
        });
    }
}