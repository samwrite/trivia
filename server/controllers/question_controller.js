const mongoose = require('mongoose');
const Question = mongoose.model('Question');
mongoose.Promise = global.Promise;


module.exports = {
    add: (req, res, next) => {
        let q = new Question(req.body);
        q.save()
        .then(() => {
            res.json(true);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
    index: (req, res, next) => {
        Question.find({})
        .then((questions) => {
            res.json(questions);
        })
        .catch((err) => {
            res.status(500).json(err);
        })
    },
}