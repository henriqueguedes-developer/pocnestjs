import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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
    try {
      const cargo = await this.cargoRepository.findOneByOrFail({ id });
      return
    }
    catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cargo nao Encontrado',
      }, HttpStatus.FORBIDDEN);
    }
  }

  async findEmpresa(idEmpresa: string) {

    try {
      return await this.cargoRepository.find({
        where: {
          idEmpresa,
        },
      });
    }
    catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Empresa nao Encontrada',
      }, HttpStatus.FORBIDDEN);
    }

  }

  async update(id: string, updateCargoDto: UpdateCargoDto) {
    return this.cargoRepository.update({ id }, updateCargoDto);
  }

  remove(id: string) {
    return this.cargoRepository.delete(id);
  }

  async flsituacaoUpdate(id: string, flsituacaoCargoDto: FlSituacaoCargoDto) {
    try {
      await this.cargoRepository.update({ id }, flsituacaoCargoDto);
      return {
        message: 'Flsituação atualizado com sucesso',
      }
    }
    catch (error) {
      throw new HttpException({
        status: HttpStatus.FORBIDDEN,
        error: 'Cargo nao Encontrado',
      }, HttpStatus.FORBIDDEN);
    }
  }
}


