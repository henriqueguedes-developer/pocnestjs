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

@Entity({ schema: 'GB', name: 'EMPRESAS' })

export class EmpresaEntity {

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

  @Column({ name: 'FL_SITUACAO', default: 1 })
  flSituacao: number;

  @Column({ name: 'FL_ADM', default: true })
  flAdm: boolean;

  @CreateDateColumn({ name: 'DT_CADASTRO' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'DT_ALTERCAO' })
  dataAlteracao?: Date;

  @BeforeInsert()
  beforeInsert() {
    this.idEmpresa = uuid();
  }
}
