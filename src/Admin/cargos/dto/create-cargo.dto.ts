import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsNotEmpty, IsUUID, IsString, IsUppercase } from "class-validator";

export class CreateCargoDto {

  @IsNotEmpty({
    message: 'O campo id empresa  é obrigatório'
  })
  @ApiProperty({
    description: 'ID da empresa',
    example: '5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8',
  })
  @IsUUID('4', {
    message: 'O campo idEmpresa deve ser  deve ser  um uuid v4 válida'
  })
  idEmpresa: string;

  cdCargo: number;

  @IsNotEmpty({
    message: 'O campo dsCargo é obrigatório',
  })
  @IsString({
    message: 'O campo dsCargo deve ser uma string',
  })
  @IsUppercase(
    {
      message: 'O campo dsCargo deve ser uma string com letras maiúsculas',
    }
  )
  @ApiProperty({
    description: 'Descrição do dsCargo',
    example: 'ANALISTA FUNCIONAL',
  })
  dsCargo: string;


  @IsNotEmpty({
    message: 'O Flsituação é obrigatório',
  })
  @IsIn([0, 1, 2], {
    message: 'O campo flSituacao deve ser um numero, entre 0 e 2',
  })
  @ApiProperty({
    description: 'Situação do FlSituação',
    example: '0 - Inativo | 1 - Ativo | 2 - Inativo'
  })
  flSituacao?: number;

  dtCadastro: Date;

  @IsNotEmpty(
    {
      message: 'O idUsuarioCadastro é obrigatório',
    }
  )
  @IsUUID('4', {
    message: 'O idUsuarioCadastro deve  deve ser  um uuid v4  válida'
  })
  @ApiProperty({
    description: 'ID do usuário que cadastrou o cargo',
    example: '5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8',
  })
  idUsuarioCadastro: string;

  dtAlteracao: Date;

  idUsuarioAlteracao: string;
}
