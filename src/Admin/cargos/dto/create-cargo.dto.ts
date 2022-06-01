import { IsIn, IsNotEmpty, IsUUID, IsString, IsUppercase } from "class-validator";

export class CreateCargoDto {

  @IsNotEmpty({ message: 'O campo id empresa  é obrigatório' })
  @IsUUID('4', { message: 'O campo idEmpresa deve ser  deve ser  um uuid v4 válida' })

  idEmpresa: string;


  cdCargo: number;

  @IsNotEmpty({ message: 'O campo dsCargo é obrigatório' })
  @IsString({ message: 'O campo dsCargo deve ser uma string' })
  @IsUppercase({
    message: 'O campo dsCargo deve ser uma string com letras maiúsculas',
  })

  dsCargo: string;

  @IsNotEmpty({
    message: 'O Flsituação é obrigatório',
  })
  @IsIn([0, 1, 2], {
    message: 'O campo flSituacao deve ser um numero, entre 0 e 2',
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

  idUsuarioCadastro: string;

  dtAlteracao: Date;

  idUsuarioAlteracao: string;
}
