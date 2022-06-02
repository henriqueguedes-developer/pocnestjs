import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TipodespesaService } from './tipodespesa.service';
import { CreateTipodespesaDto } from './dto/create-tipodespesa.dto';
import { UpdateTipodespesaDto } from './dto/update-tipodespesa.dto';

@Controller('tipodespesa')
export class TipodespesaController {
  constructor(private readonly tipodespesaService: TipodespesaService) {}

  @Post()
  create(@Body() createTipodespesaDto: CreateTipodespesaDto) {
    return this.tipodespesaService.create(createTipodespesaDto);
  }

  @Get()
  findAll() {
    return this.tipodespesaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.tipodespesaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTipodespesaDto: UpdateTipodespesaDto) {
    return this.tipodespesaService.update(+id, updateTipodespesaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.tipodespesaService.remove(+id);
  }
}
