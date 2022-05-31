import { ApiProperty } from "@nestjs/swagger";
import { IsIn } from "class-validator";

export class FlSituacaoEmpresaDto {

  @IsIn([1, 2], {
    message: 'O campo flSituacao deve ser um numero, entre 1 e 2',
  })
  @ApiProperty({
    description: 'Ativo ou inativo',
    example: 1,
  })
  flSituacao: number;


}
