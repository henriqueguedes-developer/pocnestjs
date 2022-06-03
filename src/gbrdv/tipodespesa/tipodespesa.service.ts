import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { EmpresasService } from 'src/Admin/empresas/empresas.service';
import { Repository } from 'typeorm';
import { CreateTipodespesaDto } from './dto/create-tipodespesa.dto';
import { UpdateTipodespesaDto } from './dto/update-tipodespesa.dto';
import { TipodespesaEntity } from './entities/tipodespesa.entity';

@Injectable()
export class TipodespesaService {
  constructor(
    @InjectRepository(TipodespesaEntity)
    private readonly tipodespesaRepository: Repository<TipodespesaEntity>,
    private readonly empresasService: EmpresasService,
  ) { }

  async create(createTipodespesaDto: CreateTipodespesaDto) {

    const idEmpresa = createTipodespesaDto.idEmpresa;
    const empresaExiste = await this.empresasService.findOne(idEmpresa);
    const flPadraoDto = createTipodespesaDto.flPadrao;

    if (!empresaExiste) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Empresa  não Encontrada',
      }, HttpStatus.NOT_FOUND);
    }
    const flPadraoExist = await this.tipodespesaRepository.findOneBy({
      idEmpresa,
      flPadrao: 1,
    });
    if (flPadraoExist) {
      if (flPadraoDto === 1) {
        throw new HttpException({
          status: HttpStatus.BAD_REQUEST,
          error: 'Já existe um tipo de despesa padrão',
        }, HttpStatus.BAD_REQUEST);
      }
    }
    return this.tipodespesaRepository.save(createTipodespesaDto);
  }

  findAll() {
    return this.tipodespesaRepository.find();
  }


  update(id: string, updateTipodespesaDto: UpdateTipodespesaDto) {
    try {
      return this.tipodespesaRepository.update(id, updateTipodespesaDto);
    }
    catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Tipo de Despesa não encontrado',
      }, HttpStatus.NOT_FOUND);
    }

  }

  remove(id: string) {
    try {
      return this.tipodespesaRepository.delete(id);
    }
    catch (error) {
      throw new HttpException({
        status: HttpStatus.NOT_FOUND,
        error: 'Tipo de Despesa não encontrado',
      }, HttpStatus.NOT_FOUND);
    }
  }
}
