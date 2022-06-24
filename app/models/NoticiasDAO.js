class NoticiasDAO {
 constructor(connection){
   this._connection = connection
 }

 getNoticias = (callback) => {
  this._connection.query('select * from noticias order by data_criacao desc', callback)
}

getNoticia = (id_noticia, callback) => {
  this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback)
}

addNoticia = (noticia, callback) => {
  this._connection.query('insert into noticias set ?', noticia, callback)
}

getFiveLastPosts = (callback) => {
  this._connection.query('select * from noticias order by data_criacao desc limit 7', callback)
}

}

module.exports = () => NoticiasDAO