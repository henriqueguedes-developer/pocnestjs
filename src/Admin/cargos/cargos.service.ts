import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {
  CreateCargoDto, UpdateCargoDto, FlSituacaoCargoDto
} from './dto/index';

import { CargoEntity } from './entities/cargo.entity';

@Injectable()
export class CargosService {
  constructor(
    @InjectRepository(CargoEntity)
    private readonly cargoRepository: Repository<CargoEntity>,
  ) { }

  async create(createCargoDto: CreateCargoDto) {
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

  async update(id: string, updateCargoDto: UpdateCargoDto) {
    return this.cargoRepository.update({ id }, updateCargoDto);
  }

  remove(id: string) {
    return this.cargoRepository.delete(id);
  }

  async flsituacaoUpdate(id: string, flSituacaoCargoDto: FlSituacaoCargoDto) {
    const verificaCargo = await this.cargoRepository.findOne(
      {
        where:
          { id }
      }
    );
    if (verificaCargo) {
      await this.cargoRepository.update({ id }, flSituacaoCargoDto);
      return {
        message: 'Flsituação atualizado com sucesso',
      }
    }
    return {
      message: 'Cargo não encontrado',
    }
  }
}


