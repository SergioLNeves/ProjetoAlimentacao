import { IsNotEmpty, MaxLength } from "class-validator";
import { Postagem } from "src/Postagem/entities/postagem.entity";
import {Entity, PrimaryGeneratedColumn,Column,OneToMany} from "typeorm";

@Entity({name: "tb_tema"})
    export class Tema{

//PrimaryKey
        @PrimaryGeneratedColumn()
        id:number

//
        @IsNotEmpty()
        @MaxLength(50)
        @Column({length:50, nullable:false})
        temaPrincipal:string

        @IsNotEmpty()
        @MaxLength(100)
        @Column({length:100, nullable:false})
        descricao:string

        @OneToMany(() => Postagem, (Postagem) => Postagem.tema)
        postagem: Postagem[]
    }