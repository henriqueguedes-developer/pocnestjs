import { IsIn, IsNotEmpty, IsUUID, IsString, IsUppercase } from "class-validator";

export class CreateTipodespesaDto {
  id: string;

  @IsNotEmpty({ message: 'O campo id empresa  é obrigatório' })
  @IsUUID('4', { message: 'O campo idEmpresa deve ser  deve ser  um uuid v4 válida' })
  idEmpresa: string;

  cdTipodespesa: number;

  @IsNotEmpty({ message: 'O campo dsTipoDespesa é obrigatório' })
  @IsString({ message: 'O campo dsTipoDespesa deve ser uma string' })
  @IsUppercase({ message: 'O campo dsTipoDespesa deve ser uma string em maiúsculo' })
  dsTipodespesa: string;

  @IsNotEmpty({
    message: 'O Flsituação é obrigatório',
  })
  @IsIn([0, 1], {
    message: 'O campo flPadrao deve ser um numero, entre 0 e 1',
  })
  flPadrao: number;

  @IsNotEmpty({ message: 'O campo flInformaKM é obrigatório' })
  @IsIn([0, 1], {
    message: 'O campo flInformaKM deve ser um numero, entre 0 e 1',
  })
  flInformaKM: number;

  @IsNotEmpty({ message: 'O campo flInformaKM é obrigatório' })
  @IsIn([0, 1], {
    message: 'O campo flInformaCombustivel deve ser um numero, entre 0 e 1',
  })
  flInformaCombustivel: number;

  @IsNotEmpty({ message: 'O campo flDespesaMarketing é obrigatório' })
  @IsIn([0, 1], {
    message: 'O campo flDespesaMarketing deve ser um numero, entre 0 e 1',
  })
  flDespesaMarketing: number;

  @IsNotEmpty({ message: 'O campo flVinculaVeiculo é obrigatório' })
  @IsIn([0, 1], {
    message: 'O campo flVinculaVeiculo deve ser um numero, entre 0 e 1',
  })
  flVinculaVeiculo: number;

  @IsNotEmpty({ message: 'O campo flCalculaKMRodado é obrigatório' })
  @IsIn([0, 1], {
    message: 'O campo flCalculaKMRodado deve ser um numero, entre 0 e 1',
  })
  flCalculaKMRodado: number;

  flSituacao: number;
  dtCadastro: Date;

  @IsNotEmpty({ message: 'O campo idUsuarioCadastro  é obrigatório' })
  @IsUUID('4', { message: 'O campo idUsuarioCadastro deve ser  deve ser  um uuid v4 válida' })
  idUsuarioCadastro: string;

  dtAlteracao: Date;
  idUsuarioAlteracao?: string;

}
