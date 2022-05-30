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

export class CargoEntity {

  @PrimaryGeneratedColumn('uuid', { name: 'ID_CARGO' })
  @ApiProperty()
  id: string;

  @Column({ name: 'ID_EMPRESA' })
  @ApiProperty()
  idEmpresa: string;

  @Column({ name: 'CD_CARGO' })
  @ApiProperty()
  cdCargo: number;

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

  dataAlteracao: Date;

  @Column({ nullable: true, name: 'ID_USUARIO_ALTERACAO' })

  idUsuarioAlteracao?: string;

  @ManyToOne(() => EmpresaEntity, empresa => empresa.id)
  @JoinColumn({ name: 'CD_EMPRESA' })
  empresa: EmpresaEntity;
}
