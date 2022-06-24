module.exports = application => {
	application.get('/cadastro', (req, res) => {
		application.app.controllers.admin.noticias(application, req, res);
	});

	application.post('/noticias/salvar', (req, res) => {
		application.app.controllers.admin.addNoticia(application, req, res)
	});
}