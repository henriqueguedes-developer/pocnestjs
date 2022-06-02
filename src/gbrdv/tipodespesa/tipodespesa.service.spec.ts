import { Test, TestingModule } from '@nestjs/testing';
import { TipodespesaService } from './tipodespesa.service';

describe('TipodespesaService', () => {
  let service: TipodespesaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TipodespesaService],
    }).compile();

    service = module.get<TipodespesaService>(TipodespesaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
