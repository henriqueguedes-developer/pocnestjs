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


@Entity({ name: 'TIPO_DESPESA' })

export class TipodespesaEntity extends IBaseTypeormTable {

  @PrimaryGeneratedColumn('uuid', { name: 'ID_TIPODESPESA' })
  id: string;

  @Column({ name: 'ID_EMPRESA' })
  idEmpresa: string;

  @Column({ name: 'CD_TIPODESPESA' })
  @Generated('increment')
  cdTipodespesa?: number;

  @Column({ name: 'DS_TIPODESPESA' })
  dsTipodespesa: string;

  @Column({ name: 'FL_PADRAO' })
  flPadrao: number;

  @Column({ name: 'FL_INFORMA_KM' })
  flInformaKM: number;

  @Column({ name: 'FL_INFORMA_COMBUSTIVEL' })
  flInformaCombustivel: number;

  @Column({ name: 'FL_DESPESA_MARKETING' })
  flDespesaMarketing: number;

  @Column({ name: 'FL_VINCULA_VEICULO' })
  flVinculaVeiculo: number;

  @Column({ name: 'FL_CALCULA_KM_RODADO ' })
  flCalculaKMRodado: number;

  @ManyToOne(() => EmpresaEntity, empresa => empresa.id)
  @JoinColumn({ name: 'CD_EMPRESA' })
  empresa: EmpresaEntity;
}


