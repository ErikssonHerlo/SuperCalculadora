const express = require('express');
const app = express();

const operation = require('./routes/operation');

app.set('port',process.env.PORT || 3001);

app.use(express.json());

app.use('/api/operation',operation);

app.listen(app.get('port'), () =>{      //Arrow Function
    console.log(`listen on http://localhost:${app.get('port')}`);
});