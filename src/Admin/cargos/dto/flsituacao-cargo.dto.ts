import { ApiProperty } from "@nestjs/swagger";
import { IsIn, IsUUID } from "class-validator";

export class FlSituacaoCargoDto {

  @IsIn([1, 2], {
    message: 'O campo flSituacao deve ser um numero, entre 1 e 2',
  })
  @ApiProperty({
    description: 'ID da empresa',
    example: '5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8',
  })
  flSituacao: number;

  @IsUUID('4', {
    message: 'O idUsuarioAlteração deve  deve ser  um uuid v4  válida'
  })
  @ApiProperty({
    description: 'ID do usuário alteração',
    example: '5e9f8f8f-f8f8-f8f8-f8f8-f8f8f8f8f8f8',
  })
  idUsuarioAlteracao: string;
}
