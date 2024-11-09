const app = require('./app')

const port = app.get('port') 

app.listen(port, ()=> console.log('> Server is up and running on port : ' + app.get('port')))