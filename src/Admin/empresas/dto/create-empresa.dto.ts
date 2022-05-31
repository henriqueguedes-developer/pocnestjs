import { IsIn, IsNotEmpty, IsUUID, IsString, IsUppercase, IsUrl } from "class-validator";

export class CreateEmpresaDto {

  @IsNotEmpty({
    message: 'O campo nomeEmpresa é obrigatório',
  })
  nomeEmpresa: string;

  idEmpresa: string;

  @IsUrl({
    message: 'O campo urlEmpresa deve ser uma url válida',
  })
  url: string;

  logoEmpresa?: string;
  dataCadastro: Date;
  dataAlteracao?: Date;


}
