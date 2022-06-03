import { Module } from '@nestjs/common';
import { TipodespesaService } from './tipodespesa.service';

import { TipodespesaController } from './tipodespesa.controller';
import { EmpresasModule } from 'src/Admin/empresas/empresas.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipodespesaEntity } from './entities/tipodespesa.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TipodespesaEntity]),
    EmpresasModule
  ],
  controllers: [TipodespesaController],
  providers: [TipodespesaService]

})
export class TipodespesaModule { }
