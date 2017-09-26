const mongoose = require('mongoose');

const QuestionSchema = new mongoose.Schema({
    q: {type: String},
    correct: {type: String},
    fake1: {type: String},
    fake2: {type: String},
});

mongoose.model('Question', QuestionSchema);