module.exports.noticias = (application, req, res) => {
	res.render("admin/form", {validacao : {}, noticia : {}})
}

module.exports.addNoticia = (application, req, res) => {
	var noticia = req.body;
	
	req.assert('titulo','Título é obrigatório').notEmpty();
	req.assert('resumo','Resumo é obrigatório').notEmpty();
	req.assert('resumo','Resumo deve conter entre 10 e 100 caracteres').len(10, 100);
	req.assert('autor','Autor é obrigatório').notEmpty();
	req.assert('data_noticia','Data é obrigatório').notEmpty().isDate({format: 'YYYY-MM-DD'});
	req.assert('noticia','Noticia é obrigatório').notEmpty();

	var erros = req.validationErrors();

	if(erros){
		console.log(erros);
		res.render("admin/form", {validacao : erros, noticia : noticia});
		return;
	}

	var connection = application.config.db_connect();
	var noticiasModel = new application.app.models.NoticiasDAO(connection);

	noticiasModel.addNoticia(noticia, (error, result) => {
		res.redirect('/noticias');
	});	
}