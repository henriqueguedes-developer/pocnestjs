import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpCode, HttpStatus, UsePipes } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

import { EmpresasService } from './empresas.service';
import {
  CreateEmpresaDto, UpdateEmpresaDto, FlSituacaoEmpresaDto
} from './dto/index';

//import { ValidaEmpresaExistePipe } from 'src/pipe/valida-empresa-existe.pipe';

@Controller('empresas')
@ApiTags('empresas')
export class EmpresasController {
  constructor(private readonly empresaService: EmpresasService) { }

  @Post()

  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @Get()

  findAll() {
    return this.empresaService.findAll();
  }

  @Get(':id')
  //@Param(ValidaEmpresaExistePipe) param: { id: string }
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(id);
  }

  @Patch(':id')

  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(id, updateEmpresaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.empresaService.remove(id);
  }

  @Patch('flsituacao/:id')
  flsituacaoUpdate(@Param('id', new ParseUUIDPipe()) id: string, @Body() flsituacaoEmpresaDto: FlSituacaoEmpresaDto) {

    return this.empresaService.flsituacaoUpdate(id, flsituacaoEmpresaDto);
  }
}

