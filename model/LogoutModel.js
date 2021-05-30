const mongoose = require('../config/db_conect');
const loginScheema = mongoose.Schema;

const login = new loginScheema({
    email: {type: String, required: true},
});

module.exports = mongoose.model('login', login)