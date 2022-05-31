import { CreateEmpresaDto } from 'src/Admin/empresas/dto';
import { EmpresaEntity } from 'src/Admin/empresas/entities/empresa.entity';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ValidaEmpresaExistePipe implements PipeTransform<CreateEmpresaDto> {
  constructor(
    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository: Repository<EmpresaEntity>,
  ) { }


  async transform(value: CreateEmpresaDto, metadata: ArgumentMetadata) {
    console.log(value);
    const empresa = await this.empresaRepository.findOne({
      where: {
        id: value.idEmpresa,
      },
    });
    if (!empresa) {
      throw new Error('Empresa não encontrada');
    }
    return value;
  }
}
