import { IsNotEmpty, MaxLength } from "class-validator";
import { Tema } from "src/Tema/entities/tema.entity";
import { Usuario } from "src/Usuario/entities/usuario.entity";
import{Entity, PrimaryGeneratedColumn, Column, UpdateDateColumn, ManyToOne, JoinColumn} from "typeorm";

@Entity({name: "tb_postagem"})
export class Postagem{

    @PrimaryGeneratedColumn()
    id: number

    @IsNotEmpty()
    @MaxLength(100)
    @Column({length:100,nullable:false})
    titulo:string

    @MaxLength(1800)
    @IsNotEmpty()
    @Column({length: 1800, nullable: false})
    texto: string

    @MaxLength(4000)
    @Column({length: 4000, nullable: true})
    foto: string

    @MaxLength(4000)
    @Column({length: 4000, nullable: true})
    linkOrg: string

    @IsNotEmpty()
    @UpdateDateColumn()
    data: Date
    
    @ManyToOne (() => Tema, (tema) => tema.postagem, {
        onDelete: "CASCADE"
    })
    tema: Tema

    @ManyToOne (() => Usuario, (usuario) => usuario.postagem, {
        onDelete: "CASCADE"
    })
    usuario: Usuario

}