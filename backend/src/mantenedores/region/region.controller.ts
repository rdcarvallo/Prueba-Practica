import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { RegionService } from "./region.service";
import { Region } from "../entities/region.entity";
import { CreateRegionDto } from "../dto/createRegion.dto";
import { UpdateRegionDto } from "../dto/updateRegion.dto";


@Controller('regiones')
//@UseGuards(AuthGuard)
export class RegionesController {
  
    constructor(private regionService: RegionService) {

  }

  @Get()
  getRegiones(): Promise<Region[]> {
    return this.regionService.getRegiones();
  }

  @Get(':id')
  getRegion(@Param('id') id: string): Promise<Region | null> {
    console.log('id: ',id);
    return this.regionService.getRegion(parseInt(id));
  }

  @Post()
  addRegion(@Body() region: CreateRegionDto): Promise<Region>{
    return this.regionService.addRegion(region);
  }

  @Put(':id')
  updateRegion(@Param('id') id: string, @Body() region: UpdateRegionDto): Promise<Region | null> {
    return this.regionService.updateRegion(parseInt(id), region);
  }

  @Delete(':id')
  deleteRegion(@Param('id') id: string): Promise<boolean> {
    return this.regionService.deleteRegion(parseInt(id));
  }

}
