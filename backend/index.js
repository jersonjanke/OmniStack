const express = require('express');

const app = express();

app.get('/', (request, response) => {
    return response.send({
        evento: 'Semana OmniStack 11.0',
        name: 'Jerson Janke'
    });
});

app.listen(3333);