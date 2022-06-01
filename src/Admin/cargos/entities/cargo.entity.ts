import { EmpresaEntity } from 'src/Admin/empresas/entities/empresa.entity';
import { IBaseTypeormTable } from 'src/helpers/typeorm/base';

import {
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'CARGOS' })

export class CargoEntity extends IBaseTypeormTable {

  @PrimaryGeneratedColumn('uuid', { name: 'ID_CARGO' })
  id: string;

  @Column({ name: 'ID_EMPRESA' })
  idEmpresa: string;

  @Column({ name: 'CD_CARGO' })
  @Generated('increment')
  cdCargo?: number;

  @Column({ name: 'DS_CARGO' })
  dsCargo: string;

  @ManyToOne(() => EmpresaEntity, empresa => empresa.id)
  @JoinColumn({ name: 'CD_EMPRESA' })
  empresa: EmpresaEntity;
}
