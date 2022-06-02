import { Test, TestingModule } from '@nestjs/testing';
import { TipodespesaController } from './tipodespesa.controller';
import { TipodespesaService } from './tipodespesa.service';

describe('TipodespesaController', () => {
  let controller: TipodespesaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TipodespesaController],
      providers: [TipodespesaService],
    }).compile();

    controller = module.get<TipodespesaController>(TipodespesaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
