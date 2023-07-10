const express = require('express')
const port = 3000
var calculatorRoute = require('./routes/calculatorRoute');

//create an app using the express
// package
const app = express()

app.use('/', express.static('public'))

app.use('/calculator',calculatorRoute)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})


const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');
app.use(
'/api-docs',
swaggerUi.serve,
swaggerUi.setup(swaggerDocument)
);