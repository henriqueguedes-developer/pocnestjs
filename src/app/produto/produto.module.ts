import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoEntity } from './entities/produto.entity';
import { ProdutoController } from './produto.controller';
import { ProdutoService } from './produto.service';

@Module({

  imports: [TypeOrmModule.forFeature([ProdutoEntity])],
  controllers: [ProdutoController],
  providers: [ProdutoService]
})
export class ProdutoModule { }
