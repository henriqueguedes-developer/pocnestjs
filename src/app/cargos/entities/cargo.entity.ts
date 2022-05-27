import { EmpresaEntity } from "src/app/empresa/entities/empresa.entity";
import { ApiProperty } from '@nestjs/swagger';
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

export class CargoEnity {

  @PrimaryGeneratedColumn('uuid', { name: 'ID_CARGO' })
  @ApiProperty()
  id: string;

  @Column({ name: 'ID_EMPRESA' })
  @ApiProperty()
  idEmpresa: string;

  @Column({ name: 'CD_CARGO' })
  @Generated('increment')
  @ApiProperty()
  cdCargo: string;

  @Column({ name: 'DS_CARGO' })
  @ApiProperty()
  dsCargo: string;

  @Column({ name: 'FL_SITUACAO' })
  @ApiProperty()
  flSituacao: number;

  @CreateDateColumn({ name: 'DT_CADASTRO' })
  @ApiProperty()
  dtCadastro: Date;

  @Column({ name: 'ID_USUARIO_CADASTRO' })
  @ApiProperty()
  idUsuarioCadastro: string;

  @UpdateDateColumn({ name: 'DT_ALTERACAO' })
  @ApiProperty()
  dataAlteracao: Date;

  @Column({ name: 'ID_USUARIO_ALTERACAO' })
  @ApiProperty()
  idUsuarioAlteracao: string;

  @ManyToOne(() => EmpresaEntity, empresa => empresa.id)
  @JoinColumn({ name: 'CD_EMPRESA' })
  empresa: EmpresaEntity;
}
