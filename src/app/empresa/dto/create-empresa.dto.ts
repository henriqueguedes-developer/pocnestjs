import { Optional } from "@nestjs/common";
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
  @Optional()
  excluido: boolean;

  @IsNotEmpty()
  @ApiProperty()
  @Optional()
  flAdm: boolean;


  @ApiProperty()
  dataCadastro: Date;



  @ApiProperty()
  dataAlteracao: Date;



}
