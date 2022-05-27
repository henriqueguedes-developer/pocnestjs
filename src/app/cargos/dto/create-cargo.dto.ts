import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCargoDto {
  @IsNotEmpty()
  @ApiProperty()
  idEmpresa: string;

  @IsNotEmpty()
  @ApiProperty()
  cdCargo: number;

  @IsNotEmpty()
  @ApiProperty()
  dsCargo: string;

  @IsNotEmpty()
  @ApiProperty()
  flSituacao: number;

  @ApiProperty()
  dtCadastro: Date;

  @ApiProperty()
  idUsuarioCadastro: string;

  @ApiProperty()
  dataAlteracao: Date;

  @ApiProperty()
  idUsuarioAlteracao: string;


}
