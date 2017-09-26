const path = require('path');
const questions = require('../controllers/question_controller.js');
const users = require('../controllers/user_controller.js');

module.exports = (app) => {
    app.get('/logout', users.logout);
    app.get('/currentUser', users.current);
    app.post('/register', users.register);

    app.post('/question', questions.add);
    app.get('/questions', questions.index);
    
    app.all('*', (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/index.html'));
    })
}