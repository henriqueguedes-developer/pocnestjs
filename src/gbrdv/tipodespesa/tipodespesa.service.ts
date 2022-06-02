import { Injectable } from '@nestjs/common';
import { CreateTipodespesaDto } from './dto/create-tipodespesa.dto';
import { UpdateTipodespesaDto } from './dto/update-tipodespesa.dto';

@Injectable()
export class TipodespesaService {
  create(createTipodespesaDto: CreateTipodespesaDto) {
    return 'This action adds a new tipodespesa';
  }

  findAll() {
    return `This action returns all tipodespesa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} tipodespesa`;
  }

  update(id: number, updateTipodespesaDto: UpdateTipodespesaDto) {
    return `This action updates a #${id} tipodespesa`;
  }

  remove(id: number) {
    return `This action removes a #${id} tipodespesa`;
  }
}
