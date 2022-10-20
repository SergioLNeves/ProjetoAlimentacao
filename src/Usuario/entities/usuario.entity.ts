import { IsNotEmpty, MaxLength, MinLength } from "class-validator";
import { Postagem } from "src/Postagem/entities/postagem.entity";
import{Entity, PrimaryGeneratedColumn, Column,OneToMany} from "typeorm";

@Entity({name: "tb_usuario"})
    export class Usuario{

        @PrimaryGeneratedColumn()
        id: number

        @IsNotEmpty()
        @MaxLength(50)
        @Column({length: 80, nullable:false})
        nome: string

        @IsNotEmpty()
        @MaxLength(40)
        @Column({length: 40, nullable:false,unique:true})
        email: string

        @IsNotEmpty()
        @MaxLength(20)
        @Column({length:20,nullable:false,unique:true})
        nick:string

        @IsNotEmpty()
        @MinLength(6)
        @MaxLength(20)
        @Column({length: 20, nullable:false})
        senha: string

        @MaxLength(8000)
        @Column({length: 8000,nullable:true})
        foto: string

        @OneToMany(() => Postagem, (Postagem) => Postagem.usuario)
        postagem: Postagem[]
    }