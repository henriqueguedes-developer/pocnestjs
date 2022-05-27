import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateEmpresaDto {

  @IsNotEmpty()
  @ApiProperty()
  nomeEmpresa: string;

  @IsNotEmpty()
  @ApiProperty()
  url: string;

  @IsNotEmpty()
  @ApiProperty()
  logoEmpresa: string;

  @IsNotEmpty()
  @ApiProperty()
  excluido: boolean;

  @IsNotEmpty()
  @ApiProperty()
  flAdm: boolean;

  @IsNotEmpty()
  @ApiProperty()
  dataCadastro: Date;

  @IsNotEmpty()
  @ApiProperty()
  dataAlteracao: Date;



}
