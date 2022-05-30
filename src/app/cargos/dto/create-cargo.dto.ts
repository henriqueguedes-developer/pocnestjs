import { Optional } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsUUID, IsString } from "class-validator";

export class CreateCargoDto {
  @IsNotEmpty()
  @ApiProperty()
  @IsUUID()
  idEmpresa: string;

  @IsNotEmpty()
  @ApiProperty()
  cdCargo: number;

  @IsNotEmpty()
  @ApiProperty()
  dsCargo: string;

  @ApiProperty()
  @IsNotEmpty()
  @IsIn([1, 2])
  flSituacao?: number;

  @ApiProperty()
  @Optional()
  dtCadastro: Date;

  @ApiProperty()
  @IsNotEmpty()
  @IsUUID()
  idUsuarioCadastro: string;

  dataAlteracao: Date;
  idUsuarioAlteracao: string;
}
