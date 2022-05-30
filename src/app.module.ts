import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
//import { EmpresaModule } from './app/empresa_tmp/empresas.module';
import { CargosModule } from './app/cargos/cargos.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { JwtAuthGuard } from './auth/guards/jwt-auth.guard';
import { AppService } from './app.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService) => ({
        type: configService.get('TYPEORM_CONNECTION'),
        host: configService.get('TYPEORM_HOST'),
        database: configService.get('TYPEORM_DATABASE'),
        username: configService.get('TYPEORM_USERNAME'),
        password: configService.get('TYPEORM_PASSWORD'),
        port: Number(configService.get('TYPEORM_PORT', 3306)),
        entities: [__dirname + '/**/*.entity.js'],
        synchronize: true,
        logging: 'all',
      }),
    }),
    // EmpresaModule,
    CargosModule,
    AuthModule,

  ],
  controllers: [],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: JwtAuthGuard,
    },
  ],
})
export class AppModule { }
