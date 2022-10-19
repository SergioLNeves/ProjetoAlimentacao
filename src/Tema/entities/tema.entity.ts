import { IsNotEmpty, MaxLength } from "class-validator";
import {Entity, PrimaryGeneratedColumn,Column,ManyToOne} from "typeorm";

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

    }