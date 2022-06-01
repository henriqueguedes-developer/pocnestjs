import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateEmpresaDto {

  @IsNotEmpty({
    message: 'O campo nomeEmpresa é obrigatório'
  })
  nomeEmpresa: string;
  idEmpresa: string;
  @IsNotEmpty({
    message: 'O campo url é obrigatório'
  })
  @IsUrl(undefined, { message: 'O campo url deve ser uma url válida.' })
  url: string;
  logoEmpresa?: string;
  dataCadastro: Date;
  dataAlteracao?: Date;
}
