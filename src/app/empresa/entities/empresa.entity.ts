import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({ name: 'empresas' })
export class EmpresaEntity {

  @PrimaryGeneratedColumn('uuid', { name: 'CD_EMPRESA' })
  id: string;

  @Column({ name: 'NM_EMPRESA' })
  nomeEmpresa: string;

  @Column({ name: 'DS_URL' })
  url: string;

  @Column({ name: 'DS_LOGO' })
  logoEmpresa: string;

  @Column({ name: 'FL_EXCLUIDO' })
  excluido: boolean;

  @Column({ name: 'FL_ADM' })
  flAdm: boolean;

  @CreateDateColumn({ name: 'DT_CADASTRO' })
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'DT_ALTERACAO' })
  dataAlteracao: Date;


  constructor(empresa?: Partial<EmpresaEntity>) {
    Object.assign(this, empresa);
  }


}
