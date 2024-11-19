import {
    IsInt,
    IsNotEmpty,
    IsString,
    MinLength
  } from 'class-validator';
  
  export class UpdateRegionDto {
    @IsString()
    @MinLength(5, { message: 'La region debe terner un largo de nombre mayor a 5' })
    @IsNotEmpty()
    nombre: string;

    @IsInt()
    @IsNotEmpty()
    id: number;

    @IsString()
    @MinLength(1, { message: 'El codigo de la region no puede ser mas corto que 1' })
    @IsNotEmpty()
    codigo: string;
}