const api = require('../api_kuncie/base-api.js');
const expect = require('chai').expect;
const {it} = require('mocha');
const data = require('../data/data-user.js');

describe('Testing API Delete User', async() => {

    let idUser = "";

    before('Create User', async() => {
        //get payload
        let payloadCreateUser = data.dataCreateUser();

        //hit API and store response body into variable
        const responseCreateUser = await api.createUser(payloadCreateUser);
        idUser = responseCreateUser.body.id;

        //assert the exist id
        expect(idUser).to.exist;
    })

   it('Positive Case | Delete User successfully', async() => {
        //hit API delete user
        const responseDeleteUser = await api.deleteUser(idUser);
        
        /**
         * assertions
         * - status code
         * - error message
         */
        expect(responseDeleteUser.statusCode).to.equal(200);
        expect(responseDeleteUser.body.id).to.equal(idUser);
        expect(responseDeleteUser.body.meta.success).to.equal(true);
   });

   it('Negative Case | Delete User with wrong user id', async() => {
        //hit API delete user
        const responseDeleteUser = await api.deleteUser("123456-abcd");

        /**
         * assertions
         * - status code
         * - error code
         * - error message
         */
        expect(responseDeleteUser.statusCode).to.equal(500);
        expect(responseDeleteUser.body.code).to.equal(2);
        expect(responseDeleteUser.body.message).to.exist;
   });

   it('Negative Case | Delete User without User Id', async() => {
    //hit API delete user
        const responseDeleteUser = await api.deleteUser("");

        /**
         * assertions
         * - status code
         * - error code
         * - error message
         */
        expect(responseDeleteUser.statusCode).to.equal(500);
        expect(responseDeleteUser.body.code).to.equal(2);
        expect(responseDeleteUser.body.message).to.exist;
    });

    it('Verify Deleted User Id', async() => {
        //hit the API
        const responseGetDetailUser = await api.getDetailUser(idUser);

        /**
         * assertions
         * - status code
         * - error code
         * - message
         */
        expect(responseGetDetailUser.statusCode).to.equal(404);
        expect(responseGetDetailUser.body.code).to.equal(5);
        expect(responseGetDetailUser.body.message).to.equal("no rows in result set");
    })

});