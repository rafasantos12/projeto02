# projeto02
Projeto apresentado ao professor Willian Hubner como requisito de Nota final.



No Node.js, é necessário reiniciar o processo para fazer com que as alterações sejam ativadas. 
Isso adiciona um passo extra ao seu fluxo de trabalho para que as alterações sejam realizadas. 
É possível eliminar esse passo extra usando o nodemon para reiniciar o processo automaticamente.

(npm install nodemon -g) - Instalar Nodemon 

com os modulos completos, no terminal o usuário poderá executar os seguintes comandos :


nodemon app - abrir o projeto

localhost:3000 - acessar site

Rotas: 
/ - home - pagina inicial do site

/cadastro - administador da agina

/notica 

/noticias

mysql -u root -p



Estrutura para criação do Banco de dados 


![Uml](https://user-images.githubusercontent.com/102121949/175663873-f9250196-78bb-4ef6-91a0-832f7bfe8c6c.png)

create database portal_noticias

create table noticias(

id_noticia int auto_increment,

titulo varchar(100),

noticia varchar(10000),

data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,

resumo varchar(100),

autor varchar(50),

data_noticia date,

primary key(id_noticia)
);
