import { PartialType } from '@nestjs/swagger';
import { IsIn, IsUUID } from "class-validator";

export class FlsituacaoUpdateCargoDto {

  @IsIn([1, 2], {
    message: 'O campo flSituacao deve ser um numero, entre 1 e 2',
  })

  flSituacao: number;

  @IsUUID('4', {
    message: 'O idUsuarioAlteração deve  deve ser  um uuid v4  válida'
  })
  idUsuarioAlteracao: string;
}
