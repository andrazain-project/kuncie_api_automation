const httpLib = require('supertest');
const baseUrl = httpLib('https://api.kunciebootcampqa.com/api/bootcamp/');

function createUser(payload) {
    return baseUrl
        .post('users')
        .send(payload);
};

function deleteUser(userId) {
    return baseUrl
        .delete('users/' + userId);
};

function getDetailUser(userId) {
    return baseUrl
        .get('detail/users?id=' + userId);
};

module.exports = {
    createUser,
    deleteUser,
    getDetailUser
};