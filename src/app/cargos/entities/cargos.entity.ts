import { EmpresaEntity } from "src/app/empresa/entities/empresa.entity";
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

@Entity({ name: 'cargos' })

export class CargoEntity {

  @PrimaryGeneratedColumn('uuid', { name: 'ID_CARGO' })
  id: string;

  @Column({ name: 'ID_EMPRESA' })
  idEmpresa: string;

  @Column({ name: 'CD_CARGO' })
  @Generated('increment')
  cdCargo?: number;

  @Column({ name: 'DS_CARGO' })
  dsCargo: string;

  @Column({ name: 'FL_SITUACAO' })
  flSituacao: number;

  @CreateDateColumn({ name: 'DT_CADASTRO' })
  dtCadastro: Date;

  @Column({ name: 'ID_USUARIO_CADASTRO' })
  idUsuarioCadastro: string;

  @UpdateDateColumn({ name: 'DT_ALTERACAO' })
  dtAlteracao?: Date;

  @Column({ nullable: true, name: 'ID_USUARIO_ALTERACAO' })
  idUsuarioAlteracao?: string;

  @ManyToOne(() => EmpresaEntity, empresa => empresa.id)
  @JoinColumn({ name: 'CD_EMPRESA' })
  empresa: EmpresaEntity;
}
