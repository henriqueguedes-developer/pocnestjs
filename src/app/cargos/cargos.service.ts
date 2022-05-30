import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCargoDto } from './dto/create-cargo.dto';
import { UpdateCargoDto } from './dto/update-cargo.dto';
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
}


