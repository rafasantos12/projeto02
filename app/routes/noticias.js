module.exports = application => {
  application.get('/noticias', (req, res) => {
    application.app.controllers.noticias.noticias(application, req ,res)
  })

  application.get('/noticia', (req, res) => {
    application.app.controllers.noticias.noticia(application, req, res)
  })

  application.get('/sobre', (req, res) => {
    res.render('noticias/sobre')
  })

  application.get('/contato', (req, res) => {
    res.render('noticias/contato')
  })

  application.get('/quemsomos', (req, res) => {
    res.render('noticias/quemsomos')
  })
}