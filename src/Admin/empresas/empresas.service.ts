import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateEmpresaDto, UpdateEmpresaDto, FlSituacaoEmpresaDto
} from './dto/index';

import { EmpresaEntity } from './entities/empresa.entity';

@Injectable()
export class EmpresasService {
  constructor(
    @InjectRepository(EmpresaEntity)
    private readonly empresaRepository: Repository<EmpresaEntity>,
  ) { }

  async create(createEmpresaDto: CreateEmpresaDto) {

    return await this.empresaRepository.save(this.empresaRepository.create(createEmpresaDto));
  }

  async findAll() {
    return await this.empresaRepository.find();
  }

  async findOne(id: string) {
    return await this.empresaRepository.findOne(
      {
        where:
          { id }
      }
    );
  }

  async update(id: string, updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaRepository.update({ id }, updateEmpresaDto);
  }

  remove(id: string) {
    return this.empresaRepository.delete(id);
  }

  async flsituacaoUpdate(id: string, flsituacaoEmpresaDto: FlSituacaoEmpresaDto) {
    const verificaEmpresa = await this.empresaRepository.findOne(
      {
        where:
          { id }
      }
    );
    if (verificaEmpresa) {
      await this.empresaRepository.update({ id }, flsituacaoEmpresaDto);
      return {
        message: 'Flsituação atualizado com sucesso',
      }
    }

  }
}


