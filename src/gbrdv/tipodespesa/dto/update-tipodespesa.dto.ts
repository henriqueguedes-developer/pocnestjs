import { PartialType } from '@nestjs/swagger';
import { CreateTipodespesaDto } from './create-tipodespesa.dto';

export class UpdateTipodespesaDto extends PartialType(CreateTipodespesaDto) {}
