import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Region } from '../entities/region.entity';
import { CreateRegionDto } from '../dto/createRegion.dto';
import { Repository } from 'typeorm';
import { UpdateRegionDto } from '../dto/updateRegion.dto';

@Injectable()
export class RegionService {
    constructor(
        @InjectRepository(Region) private regionRepository: Repository<Region>
    ){

    }
    getRegiones(): Promise<Region[]> {
        return this.regionRepository.find({});
      }
    async getRegion(id: number): Promise<Region | null> {
        return (await this.regionRepository.find({where: {id}}))[0];
    }
    addRegion(regionDto: CreateRegionDto): Promise<Region>{
        const nuevaRegion  = this.regionRepository.create(regionDto);
        nuevaRegion.vigente = 'S';
        return this.regionRepository.save(nuevaRegion);
    }
    updateRegion(id: number, regionDto: UpdateRegionDto): Promise<Region>{
        const nuevaRegion  = this.regionRepository.create(regionDto);
        nuevaRegion.vigente = 'S';
        nuevaRegion.id = id;
        return this.regionRepository.save(nuevaRegion);
    }
    async deleteRegion(id: number): Promise<boolean>{
        const result = await this.regionRepository.delete({id});
        if(result.affected == 0){
            return false;
        }
        return true;
    }
}
