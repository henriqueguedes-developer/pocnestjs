import { Module } from '@nestjs/common';
import { CargosService } from './cargos.service';
import { CargosController } from './cargos.controller';
import { CargoEntity } from './entities/cargos.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([CargoEntity])],
  controllers: [CargosController],
  providers: [CargosService]
})
export class CargosModule { }
