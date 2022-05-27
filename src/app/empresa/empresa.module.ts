import { Module } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { EmpresaController } from './empresa.controller';
import { EmpresaEntity } from './entities/empresa.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([EmpresaEntity])],
  controllers: [EmpresaController],
  providers: [EmpresaService]
})
export class EmpresaModule { }
