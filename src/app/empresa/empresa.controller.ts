import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEmpresaSwagger } from './swagger/create-empresa.swagger';
import { ShowEmpresaSwagger } from './swagger/show-empresa.swagger';
import { UpdateEmpresaSwagger } from './swagger/update-empresa.swagger';
import { IndexEmpresaSwagger } from './swagger/index-empresa.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { NotFoundSwagger } from 'src/helpers/swagger/not-found.swagger';

@Controller('empresas')
@ApiTags('empresas')

export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) { }

  @Post()

  @ApiOperation({ summary: 'Adicionar uma nova empresa' })
  @ApiResponse({
    status: 201,
    description: 'Lista de empresas retornada com sucesso',
    type: CreateEmpresaSwagger
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
  @ApiOperation({ summary: 'Listar todas as empresas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de empresas retornada com sucesso',
    type: IndexEmpresaSwagger,
    isArray: true,
  })

  findAll() {
    return this.empresaService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Listar  empresas por id' })
  @ApiResponse({
    status: 200,
    description: 'Lista de empresas retornada com sucesso',
    type: ShowEmpresaSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Empresa não foi encontrada',
    type: NotFoundSwagger,
  })
  findOne(@Param('id') id: string) {
    return this.empresaService.findOne(+id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar uma empresa' })
  @ApiResponse({
    status: 200,
    description: 'Empresa atualizada com sucesso',
    type: UpdateEmpresaSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Dados inválidos',
    type: BadRequestSwagger,
  })
  @ApiResponse({
    status: 404,
    description: 'Empresa não foi encontrada',
    type: NotFoundSwagger,
  })
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(id, updateEmpresaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir uma empresa' })
  @ApiResponse({
    status: 200,
    description: 'Empresa excluída com sucesso',
  })
  remove(@Param('id') id: string) {
    return this.empresaService.remove(id);
  }
}
