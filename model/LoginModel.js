const mongoose = require("mongoose");
const loginScheema = mongoose.Schema;

const login = new loginScheema({
    email: {type: String, required: true},
    token: {type: String, required: true},
});

module.exports = mongoose.model('login', login)