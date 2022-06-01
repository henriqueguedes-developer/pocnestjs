import { v4 as uuid } from 'uuid';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { IBaseTypeormTable } from 'src/helpers/typeorm/base';

@Entity({ name: 'EMPRESAS' })

export class EmpresaEntity extends IBaseTypeormTable {

  @PrimaryGeneratedColumn('uuid', { name: 'CD_EMPRESA' })
  id: string;

  @Column({ name: 'NM_EMPRESA' })
  nomeEmpresa: string;

  @Column({ name: 'ID_EMPRESA' })
  idEmpresa: string;

  @Column({ name: 'DS_URL' })
  url: string;

  @Column({ name: 'DS_LOGO', default: '' })
  logoEmpresa?: string;

  @Column({ name: 'FL_EXCLUIDO', default: false })
  excluido: boolean;

  @Column({ name: 'FL_ADM', default: true })
  flAdm: boolean;

  @BeforeInsert()
  beforeInsert() {
    this.idEmpresa = uuid();
  }
}
