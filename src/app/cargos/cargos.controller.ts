import { Controller, Get, Post, Body, Patch, Param, Delete, ParseUUIDPipe, HttpCode, HttpStatus } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { CargosService } from './cargos.service';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { FlsituacaoUpdateCargoDto } from './dto/update-flsituacao.dto';
import { CreateCargoSwagger, ShowCargoSwagger, UpdateCargoSwagger } from './swagger/index';

@Controller('cargos')
@ApiTags('cargos')
export class CargosController {
  constructor(private readonly cargosService: CargosService) { }

  @Post()
  @ApiOperation({ summary: 'Adicionar um novo cargo' })
  @ApiResponse({
    status: 201,
    description: 'Cargo retornado com sucesso',
    type: CreateCargoSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })
  create(@Body() createCargoDto: CreateCargoDto) {
    return this.cargosService.create(createCargoDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os cargos' })
  @ApiResponse({
    status: 200,
    description: 'Cargos retornados com sucesso',
    type: ShowCargoSwagger,
    isArray: true,
  })
  findAll() {
    return this.cargosService.findAll();
  }


  @ApiOperation({ summary: 'Listar cargos por id' })
  @ApiResponse({
    status: 200,
    description: 'Cargo retornado com sucesso',
    type: ShowCargoSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Cargo não foi encontrado',
    type: BadRequestSwagger,
  })
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cargosService.findOne(id);
  }

  @Get('empresa/:id')
  findEmpresa(@Param('id') id: string) {
    return this.cargosService.findEmpresa(id);
  }


  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar cargo' })
  @ApiResponse({
    status: 200,
    description: 'Cargo retornado com sucesso',
    type: UpdateCargoSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Cargo não foi encontrado',
    type: BadRequestSwagger,
  })
  update(@Param('id', new ParseUUIDPipe()) id: string, @Body() updateCargoDto: UpdateCargoDto) {
    return this.cargosService.update(id, updateCargoDto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  @ApiOperation({ summary: 'Remover cargo' })
  @ApiResponse({
    status: 200,
    description: 'Cargo removido com sucesso',
  })
  remove(@Param('id', new ParseUUIDPipe()) id: string) {
    return this.cargosService.remove(id);
  }

  @Patch('flsituacao/:id')
  flsituacaoUpdate(@Param('id', new ParseUUIDPipe()) id: string, @Body() flSituacaoCargoDto: FlsituacaoUpdateCargoDto) {
    return this.cargosService.flsituacaoUpdate(id, flSituacaoCargoDto);
  }
}

