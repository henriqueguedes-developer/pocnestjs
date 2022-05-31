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
    private readonly cargoRepository: Repository<EmpresaEntity>,
  ) { }

  async create(createCargoDto: CreateEmpresaDto) {
    return await this.cargoRepository.save(this.cargoRepository.create(createCargoDto));
  }

  async findAll() {
    return await this.cargoRepository.find();
  }

  async findOne(id: string) {
    return await this.cargoRepository.findOne(
      {
        where:
          { id }
      }
    );
  }

  async findEmpresa(idEmpresa: string) {
    return await this.cargoRepository.find(
      {
        where:
          { idEmpresa }
      }
    );
  }

  async update(id: string, updateCargoDto: UpdateEmpresaDto) {
    return this.cargoRepository.update({ id }, updateCargoDto);
  }

  remove(id: string) {
    return this.cargoRepository.delete(id);
  }

  async flsituacaoUpdate(id: string, flSituacaoCargoDto: FlSituacaoEmpresaDto) {
    const verificaCargo = await this.cargoRepository.findOne(
      {
        where:
          { id }
      }
    );
    if (verificaCargo) {
      //   await this.cargoRepository.update({ id }, FlSituacaoEmpresaDto);
      return {
        message: 'Flsituação atualizado com sucesso',
      }
    }
    return {
      message: 'Cargo não encontrado',
    }
  }
}


