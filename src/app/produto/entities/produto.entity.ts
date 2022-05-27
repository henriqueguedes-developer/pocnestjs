import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'produtos' })
export class ProdutoEntity {

  @PrimaryGeneratedColumn('uuid')
  id: string;



  @Column()
  @ApiProperty()
  nome: string;

  @Column()
  @ApiProperty()
  descricao: string;

  @Column()
  preco: number;

  @CreateDateColumn({ name: 'created_at' })
  @ApiProperty()

  createdAt: string;

  @UpdateDateColumn({ name: 'updated_at' })
  @ApiProperty()
  updatedAt: string;

  @DeleteDateColumn({ name: 'deleted_at' })
  @ApiProperty()
  deletedAt: string;

  constructor(produto?: Partial<ProdutoEntity>) {
    this.id = produto?.id;
    this.nome = produto?.nome;
    this.descricao = produto?.descricao;
    this.preco = produto?.preco;
    this.createdAt = produto?.createdAt;
    this.updatedAt = produto?.updatedAt;
    this.deletedAt = produto?.deletedAt;
  }
}
