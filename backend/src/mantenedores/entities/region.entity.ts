import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('region')
export class Region extends BaseEntity {
    @PrimaryGeneratedColumn({name: 'id_region', type: 'integer', })
    id:number;

    @Column({name: 'nombre'})
    nombre: string;

    @Column({name: 'codigo'})
    codigo:string;

    @Column({name: 'vigente'})
    vigente:string;

    
}
