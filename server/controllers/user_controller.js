const mongoose = require('mongoose');
const User = mongoose.model('User');
const session = require('express-session');

mongoose.Promise = global.Promise;

module.exports = {

    register: (req, res, next) => {
        User.findOne({first_name: req.body.first_name.toLowerCase()})
        .then((user) => { 
            if (!user) {
                let user = new User(req.body);
                u.save()
                .then((user) => { 
                    req.session.name = user.first_name;
                    req.session.user_id = user._id;
                    res.json(true); })
                .catch((err) => { res.status(409).json(err) });
            }

            else {
                req.session.name = user.first_name;
                req.session.user_id = user._id;
                res.json(true);
            }
        })
        .catch((err) => { res.status(409).json(err); });
    },
    logout: (req, res, next) => {
        req.session.destroy();
        res.json(true);
    },
    current: (req, res, next) => {
        if (req.session.user_id) {
            let curr = {};
            curr.id = req.session.user_id;
            curr.name = req.session.name;
            res.json(curr);
        }
        else {
            res.status(400).json({'error': 'Must be logged in to access this page'});
        }
    }
}