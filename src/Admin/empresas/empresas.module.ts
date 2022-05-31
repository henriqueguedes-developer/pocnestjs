import { Module } from '@nestjs/common';
import { EmpresasService } from './empresas.service';
import { EmpresasController } from './empresas.controller';
import { EmpresaEntity } from './entities/empresa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmpresaEntity])],
  controllers: [EmpresasController],
  providers: [EmpresasService]

})
export class EmpresasModule { }
