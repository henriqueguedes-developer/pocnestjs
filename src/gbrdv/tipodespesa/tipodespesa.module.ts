import { Module } from '@nestjs/common';
import { TipodespesaService } from './tipodespesa.service';
import { TipodespesaController } from './tipodespesa.controller';

@Module({
  controllers: [TipodespesaController],
  providers: [TipodespesaService]
})
export class TipodespesaModule {}
