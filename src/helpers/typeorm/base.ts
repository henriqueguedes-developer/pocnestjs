import { Column, CreateDateColumn, UpdateDateColumn } from "typeorm";

export abstract class IBaseTypeormTable {

  @Column({ name: 'FL_SITUACAO', default: 1 })
  flSituacao: number;

  @CreateDateColumn({ name: 'DT_CADASTRO' })
  dtCadastro: Date;

  @Column({ name: 'ID_USUARIO_CADASTRO' })
  idUsuarioCadastro: string;

  @UpdateDateColumn({ name: 'DT_ALTERACAO' })
  dtAlteracao?: Date;

  @Column({ nullable: true, name: 'ID_USUARIO_ALTERACAO' })
  idUsuarioAlteracao?: string;

}