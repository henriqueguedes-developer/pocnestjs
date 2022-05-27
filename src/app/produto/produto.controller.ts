import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateProdutoSwagger } from './swagger/create-produto.swagger';
import { BadRequestSwagger } from 'src/helpers/swagger/bad-request.swagger';
import { ProdutoService } from './produto.service';
import { UpdateProdutoSwagger } from './swagger/update-produto.swagger';

@Controller('produto')
@ApiTags('produtos')
export class ProdutoController {
  constructor(private readonly produtoService: ProdutoService) { }


  @Post()
  @ApiOperation({ summary: 'Adicionar uma novo produto' })
  @ApiResponse({
    status: 201,
    description: 'Lista de produtos retornada com sucesso',
    type: CreateProdutoSwagger,
  })
  @ApiResponse({
    status: 400,
    description: 'Parâmetros inválidos',
    type: BadRequestSwagger,
  })



  create(@Body() createProdutoDto: CreateProdutoDto) {
    return this.produtoService.create(createProdutoDto);
  }


  @Get()
  @ApiOperation({ summary: 'Listar todos os produtos' })
  @ApiResponse({
    status: 200,
    description: 'Lista de produtos retornada com sucesso',
    isArray: true,
  })
  findAll() {
    return this.produtoService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Exibir os dados de um produto' })
  @ApiResponse({
    status: 200,
    description: 'Produto retornada com sucesso',
    type: UpdateProdutoDto,

  })
  findOne(@Param('id') id: string) {
    return this.produtoService.findOne(id);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um produto' })
  @ApiResponse({
    status: 200,
    description: 'Produto atualizado com sucesso',
    type: UpdateProdutoSwagger,
  })
  update(@Param('id') id: string, @Body() updateProdutoDto: UpdateProdutoDto) {
    return this.produtoService.update(id, updateProdutoDto);
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Deletar um produto' })
  @ApiResponse({
    status: 200,
    description: 'Produto deletado com sucesso',
  })
  remove(@Param('id') id: string) {
    return this.produtoService.remove(Number(id));
  }
}
