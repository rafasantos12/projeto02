module.exports.index = (application, req, res) => {

	var connection = application.config.db_connect();
	noticiasModel = new application.app.models.NoticiasDAO(connection)

	noticiasModel.getFiveLastPosts((error, result) => {
		res.render("home/index", {noticias : result});
	});



}