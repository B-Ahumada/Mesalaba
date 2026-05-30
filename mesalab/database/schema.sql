create database mesalab_db;

use mesalab_db;

create table roles (
id_rol int auto_increment primary key,
nombre_rol varchar (50)
);

create table usuarios (
id_usuario int auto_increment primary key,
nombre varchar (50),
correo varchar (50),
clave varchar (50),
id_rol int,
estado varchar (50),
constraint fk_rol
foreign key (id_rol)
references roles(id_rol)
);

create table categorias (
id_categoria int auto_increment primary key, 
nombre_categoria varchar (50)
);

create table solicitudes (
id_solicitud int auto_increment primary key,
id_usuario int,
id_categoria int,
titulo varchar (50),
descripcion varchar(200),
prioridad varchar (20),
estado varchar (20),
fecha_creacion date, 
constraint fk_usuario
foreign key (id_usuario)
references usuarios(id_usuario),
constraint fk_categorias
foreign key (id_categoria)
references categorias(id_categoria)
);

insert into roles (id_rol, nombre_rol)
values (1, 'Administrador'),
(2, 'Usuario');

insert into categorias (nombre_categoria)
values ('Hardware'),
('Software'),
('Internet'),
('Cuenta Institucional');