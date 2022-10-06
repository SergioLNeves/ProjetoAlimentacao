create database db_projetoFinal;
use db_projetoFinal;
create table tb_tema(
	id bigint auto_increment,
    temaPrincipal varchar(50) default 'Fome',
    assunto varchar(100),
    
    primary key(id)
    );
    
create table tb_usuario(
	id bigint auto_increment,
    nome varchar(30),
	email varchar(255),
    senha varchar(20) not null,
    foto varchar(7000),
    
    primary key(id)
	);
    
    
create table tb_postagem(
	id bigint auto_increment,
    texto varchar(600),
    foto varchar(7000),
    link_ong varchar(7000),
    data1 datetime,
    tema_id bigint,
    usuario_id bigint,
    
    primary key(id),
    foreign key(tema_id) references tb_tema(id),
    foreign key(usuario_id) references tb_usuario(id)
    );
    
    