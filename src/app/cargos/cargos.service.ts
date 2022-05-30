import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
import { FlsituacaoUpdateCargoDto } from './dto/update-flsituacao.dto';
import { CargoEntity } from './entities/cargos.entity';

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

  async update(id: string, updateCargoDto: UpdateCargoDto) {
    return this.cargoRepository.update({ id }, updateCargoDto);
  }

  remove(id: string) {
    return this.cargoRepository.delete(id);
  }

  async flsituacaoUpdate(id: string, flsituacaoUpdateCargoDto: FlsituacaoUpdateCargoDto) {
    const verifcaCargo = await this.cargoRepository.findOne(
      {
        where:
          { id }
      }
    );
    if (verifcaCargo) {
      await this.cargoRepository.update({ id }, flsituacaoUpdateCargoDto);
    }
    return {
      message: 'Flsituação atualizado com sucesso',
    }

  }


}


