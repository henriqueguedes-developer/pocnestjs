import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsUrl } from "class-validator";

export class CreateEmpresaDto {

  @IsNotEmpty({
    message: 'O campo nomeEmpresa é obrigatório'
  })
  @ApiProperty({
    description: 'Nome da empresa',
    example: 'Nome da empresa',
  })
  nomeEmpresa: string;
  idEmpresa: string;



  @IsNotEmpty({
    message: 'O campo url é obrigatório'
  })
  @IsUrl(undefined, { message: 'O campo url deve ser uma url válida.' })
  @ApiProperty({
    description: 'Url da empresa',
    example: 'http://www.empresa.com.br',
  })
  url: string;

  logoEmpresa?: string;
  dataCadastro: Date;
  dataAlteracao?: Date;
}
