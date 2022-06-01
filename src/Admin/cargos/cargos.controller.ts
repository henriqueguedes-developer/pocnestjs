import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CargosService } from './cargos.service';
import { CreateCargoDto, UpdateCargoDto, FlSituacaoCargoDto } from './dto/index';
import { CargoEntity } from './entities/cargo.entity';

@Controller('cargos')

export class CargosController {
  constructor(private readonly cargosService: CargosService) { }

  @Post()
  @ApiOkResponse({ status: 200, type: CargoEntity, isArray: true })
  create(@Body() createCargoDto: CreateCargoDto) {
    return this.cargosService.create(createCargoDto);
  }

  @Get()
  @ApiOkResponse({ status: 200, type: CargoEntity, isArray: true })
  findAll() {
    return this.cargosService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ status: 200, type: CargoEntity, isArray: true })
  findOne(@Param('id') id: string) {
    return this.cargosService.findOne(id);
  }

  @Get('empresa/:id')
  @ApiOkResponse({ status: 200, type: CargoEntity, isArray: true })
  findEmpresa(@Param('id') id: string) {
    return this.cargosService.findEmpresa(id);
  }


  @Patch(':id')
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateCargoDto: UpdateCargoDto) {
    return this.cargosService.update(id, updateCargoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.cargosService.remove(id);
  }

  @Patch('flsituacao/:id')
  @ApiOkResponse({ status: 200, type: CargoEntity, isArray: true })
  flsituacaoUpdate(@Param('id', new ParseUUIDPipe()) id: string, @Body() flsituacaoCargoDto: FlSituacaoCargoDto) {
    return this.cargosService.flsituacaoUpdate(id, flsituacaoCargoDto);
  }
}

