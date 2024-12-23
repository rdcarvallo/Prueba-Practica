import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MantenedoresModule } from './mantenedores/matenedores.module';
import { entitiesList } from './mantenedores/entities/entities.list';


@Module({
  imports: [

    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'postgres',
      entities: entitiesList,
      synchronize: false,
    }),
    MantenedoresModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
