import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsNotEmpty } from "class-validator";

export class CreateProdutoDto {

  @IsNotEmpty()
  @ApiProperty()
  nome: string;

  @IsNotEmpty()
  @ApiProperty()
  quantidade: number;

  @IsNotEmpty()
  @ApiProperty()
  venda: true;

  @IsNotEmpty()
  @ApiProperty()
  descricao: string;

  @IsNotEmpty()
  @ApiProperty()
  preco: number;

  @IsNotEmpty()
  @ApiProperty()
  flsituacao: boolean;

}
