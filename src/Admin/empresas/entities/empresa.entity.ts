
import {
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

  @Column({ name: 'DS_LOGO' })
  logoEmpresa: string;

  @Column({ name: 'FL_EXCLUIDO' })
  excluido: boolean;

  @Column({ name: 'FL_ADM' })
  flAdm: boolean;

  @Column({ name: 'DT_CADASTRO' })
  dataCadastro: Date;

  @Column({ name: 'DT_ALTERCAO' })
  dataAlteracao: Date;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  update_at: Date;

}
