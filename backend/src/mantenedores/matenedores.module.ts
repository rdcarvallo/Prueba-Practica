import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RegionService } from './region/region.service';
import { RegionesController } from './region/region.controller';
import { entitiesList } from './entities/entities.list';


@Module({
  imports: [TypeOrmModule.forFeature(entitiesList)],
  controllers: [RegionesController],
  providers: [RegionService],
  //exports: [RegionesController]
})
export class MantenedoresModule {}
