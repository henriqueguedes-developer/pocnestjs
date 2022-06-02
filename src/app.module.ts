import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CargosModule } from './Admin/cargos/cargos.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AppService } from './app.service';
import { EmpresasModule } from './Admin/empresas/empresas.module';
import config from './ormconfig';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot(config),
    CargosModule,
    AuthModule,
    EmpresasModule,
  ],
  controllers: [],
  providers: [
    /* AppService,
     {
       provide: APP_GUARD,
       useClass: JwtAuthGuard,
     },*/
  ],
})
export class AppModule { }
