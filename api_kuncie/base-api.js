const httpLib = require('supertest');
const baseUrl = httpLib('https://api.kunciebootcampqa.com/api/bootcamp/');

function createUser(payload) {
    return baseUrl
        .post('users')
        .send(payload);
}



module.exports = {
    createUser
}