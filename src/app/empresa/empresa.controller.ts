import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { EmpresaService } from './empresa.service';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateEmpresaSwagger } from './swagger/create-empresa.swagger';
import { ShowEmpresaSwagger } from './swagger/show-empresa.swagger';
import { UpdateEmpresaSwagger } from './swagger/update-empresa.swagger';

@Controller('empresa')
@ApiTags('empresas')
export class EmpresaController {
  constructor(private readonly empresaService: EmpresaService) { }

  @Post()
  @ApiOperation({ summary: 'Adicionar uma nova empresa' })
  @ApiResponse({
    status: 201,
    description: 'Lista de empresas retornada com sucesso',
    type: CreateEmpresaSwagger,
  })
  create(@Body() createEmpresaDto: CreateEmpresaDto) {
    return this.empresaService.create(createEmpresaDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todas as empresas' })
  @ApiResponse({
    status: 200,
    description: 'Lista de empresas retornada com sucesso',
    type: ShowEmpresaSwagger,

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
  update(@Param('id') id: string, @Body() updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaService.update(+id, updateEmpresaDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Excluir uma empresa' })
  @ApiResponse({
    status: 200,
    description: 'Empresa excluída com sucesso',
  })
  remove(@Param('id') id: string) {
    return this.empresaService.remove(+id);
  }
}
