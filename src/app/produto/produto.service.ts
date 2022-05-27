import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindOneOptions, Repository } from 'typeorm';
import { CreateProdutoDto } from './dto/create-produto.dto';
import { UpdateProdutoDto } from './dto/update-produto.dto';
import { ProdutoEntity } from './entities/produto.entity';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoEntity)
    private readonly produtoRepository: Repository<ProdutoEntity>,
  ) { }


  async create(createProdutoDto: CreateProdutoDto) {
    return await this.produtoRepository.save(this.produtoRepository.create(createProdutoDto));
  }

  async findAll() {
    return await this.produtoRepository.find({ order: { createdAt: 'DESC' } });

  }

  async findOne(id: any) {
    return await this.produtoRepository.findOne(
      {
        where:
          { id }
      }
    );

  }

  update(id: any, updateProdutoDto: UpdateProdutoDto) {

    return this.produtoRepository.update({ id }, updateProdutoDto);
  }

  remove(id: any) {
    return this.produtoRepository.delete(id);
  }
}
