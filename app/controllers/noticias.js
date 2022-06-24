module.exports.noticias = (application, req, res) =>{
	var connection = application.config.db_connect();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias((error, result) => {
		res.render("noticias/noticias", {noticias : result});
	});	
}

module.exports.noticia = (application, req, res) => {
	var connection = application.config.db_connect();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);
	var id_noticia = req.query


	noticiasModel.getNoticia(id_noticia ,(error, result) => {
		res.render("noticias/noticia", {noticia : result});
	});	
}