const api = require('../api_kuncie/base-api.js');
const expect = require('chai').expect;
const {it} = require('mocha');
const data = require('../data/data-user.js');

describe('Testing API Create User', async() => {

    
    //get the payload
    let payloadCreateUser = data.dataCreateUser();

    let idUser = "";

    it('Positive Case | Ensure the Create User API running successfully', async() => {
        
        //get the payload
        let payloadCreateUser = data.dataCreateUser();

        //store the response body into variable
        const responseCreateUser = await api.createUser(payloadCreateUser);
        idUser = responseCreateUser.body.id;

        /**
         * assertions
         * - response status
         * - id is match
        */
        expect(responseCreateUser.statusCode).to.equal(200, "Status Code is not match");
        expect(responseCreateUser.body.id).to.equal(idUser, "Id is not match");
    });

    it('Positive Case | Ensure the Create User API running successfully without input Phone Number', async() => {

        //empty phone number field
        payloadCreateUser.phone_number = "";

        //store the response body into variable
        const responseCreateUser = await api.createUser(payloadCreateUser);
        idUser = responseCreateUser.body.id;

        /**
         * assertions
         * - response status
         * - id is match
         * - no have property phone_number
        */
        expect(responseCreateUser.statusCode).to.equal(200, "Status Code is not match");
        expect(responseCreateUser.body.id).to.equal(idUser, "Id is not match");
        expect(responseCreateUser.body).to.not.have.property("phone_number");
    });

    it('Positive Case | Ensure the Create User API running successfully without input Address', async() => {
        
        //empty the address field
        payloadCreateUser.address = "";

        //store the response body into variable
        const responseCreateUser = await api.createUser(payloadCreateUser);
        idUser = responseCreateUser.body.id

        /**
         * assertions
         * - response status
         * - id is match
         * - no have property address
        */
        expect(responseCreateUser.statusCode).to.equal(200, "Status Code is not match");
        expect(responseCreateUser.body.id).to.equal(idUser, "Id is not match");
        expect(responseCreateUser.body).to.not.have.property("address");
    });

    it('Negative Case | Ensure the Create User API is Fail, Name value can only be input by string', async() => {

        payloadCreateUser.name = 123;

        //store the response body into variable
        const responseCreateUser = await api.createUser(payloadCreateUser);
        let errorMessage = responseCreateUser.body.message;

        /**
         * assertions
         * - response status
         * - error code is match
         * - error message is exist
        */
        expect(responseCreateUser.statusCode).to.equal(400, "Status Code is not match");
        expect(responseCreateUser.body.code).to.equal(3, "Code is not match");
        expect(errorMessage).to.exist;
    });

});