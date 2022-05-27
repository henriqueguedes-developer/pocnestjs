import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  id: string;

  @Column({ name: 'NM_EMPRESA' })
  @ApiProperty()
  nomeEmpresa: string;

  @Column({ name: 'DS_URL' })
  @ApiProperty()
  url: string;

  @Column({ name: 'DS_LOGO' })
  @ApiProperty()
  logoEmpresa: string;

  @Column({ name: 'FL_EXCLUIDO' })
  excluido: boolean;

  @Column({ name: 'FL_ADM' })
  @ApiProperty()
  flAdm: boolean;

  @CreateDateColumn({ name: 'DT_CADASTRO' })
  @ApiProperty()
  dataCadastro: Date;

  @UpdateDateColumn({ name: 'DT_ALTERACAO' })
  @ApiProperty()
  dataAlteracao: Date;


  constructor(empresa?: Partial<EmpresaEntity>) {
    Object.assign(this, empresa);
  }


}
