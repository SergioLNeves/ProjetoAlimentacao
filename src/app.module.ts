import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Postagem } from './Postagem/entities/postagem.entity';
import { PostagemModule } from './Postagem/postagem.modulle';
import { Tema } from './Tema/entities/tema.entity';
import { TemaModule } from './Tema/tema.module';
import { Usuario } from './Usuario/entities/usuario.entity';
import { UsuarioModule } from './Usuario/usuario.modulle';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port:3306,
      username:'root',
      password:'root',
      database:'db_alimentacao',
      entities: [Tema,Usuario,Postagem],
      synchronize: true
    }),
    TemaModule,
    UsuarioModule,
    PostagemModule
  ],

  controllers: [],
  providers: [],
})
export class AppModule {}
