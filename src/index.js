// Includes
const path = require('path');
const express = require('express');

const app = express();

// Para respuestas JSON.
app.use(express.json());

// Settings
app.set("port",process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs')

// Middleware


// Routes
app.use(require('./routes/index'));

// Static files.
app.use(express.static(path.join(__dirname, 'public')));

// Listening the server.
app.listen(app.get('port'), () => {
    console.log('Server is running on port:',app.get('port'));
});