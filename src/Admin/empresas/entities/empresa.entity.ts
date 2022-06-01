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

  /**
   * O e-mail é necessário apra o login, mas não necessariamente precisa ser o mesmo e-mail da
   * rede social que estiver conectada. Login sem rede social precisa de uma senha.
   * @example email@email.com
   */

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
