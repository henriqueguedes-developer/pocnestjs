import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateEmpresaDto } from './dto/create-empresa.dto';
import { UpdateEmpresaDto } from './dto/update-empresa.dto';
import { EmpresaEntity } from './entities/empresa.entity';

@Injectable()
export class EmpresaService {
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

  async findOne(id: any) {
    return await this.empresaRepository.findOne(
      {
        where:
          { id }
      }
    );

  }

  async update(id: any, updateEmpresaDto: UpdateEmpresaDto) {
    return this.empresaRepository.update({ id }, updateEmpresaDto);

  }

  remove(id: any) {
    return this.empresaRepository.delete(id);
  }
}
