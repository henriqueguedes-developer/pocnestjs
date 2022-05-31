import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { EmpresasService } from './empresas.service';
import {
  CreateEmpresaDto, UpdateEmpresaDto, FlSituacaoEmpresaDto
} from './dto/index';
import { CreateEmpresaSwagger, ShowEmpresaSwagger, UpdateEmpresaSwagger } from './swagger/index';

@Controller('empresas')
@ApiTags('empresas')
export class EmpresasController {
  constructor(private readonly empresaService: EmpresasService) { }

  @Post()
  @ApiOperation({ summary: 'Adicionar um nova Empresa' })
  @ApiResponse({
    status: 201,
    description: 'Empresa retornado com sucesso',
    type: CreateEmpresaSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as Emnpresas' })
  @ApiResponse({
    status: 200,
    description: 'Empresas retornados com sucesso',
    type: ShowEmpresaSwagger,
    isArray: true,
  })
  findAll() {
    return this.empresaService.findAll();
  }


  @ApiOperation({ summary: 'Listar empresa por id' })
  @ApiResponse({
    status: 200,
    description: 'Empresa retornado com sucesso',
    type: ShowEmpresaSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Empresa não foi encontrado',
    type: BadRequestSwagger,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar empresa' })
  @ApiResponse({
    status: 200,
    description: 'Empresa retornado com sucesso',
    type: UpdateEmpresaSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Empresa não foi encontrada',
    type: BadRequestSwagger,
  })
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(id, updateEmpresaDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover empresa' })
  @ApiResponse({
    status: 200,
    description: 'Empresa removida com sucesso',
  })
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.empresaService.remove(id);
  }

  @Patch('flsituacao/:id')
  flsituacaoUpdate(@Param('id', new ParseUUIDPipe()) id: string, @Body() flsituacaoEmpresaDto: FlSituacaoEmpresaDto) {

    return this.empresaService.flsituacaoUpdate(id, flsituacaoEmpresaDto);
  }
}

