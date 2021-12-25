
const expressJWT = require('express-jwt');

function authJWT() {

    const secret = process.env.secret;
    const api = process.env.API_URL;

    return expressJWT({
        secret,
        algorithms: ['HS256'],
        // isRevoked: isRevoked()       *Not Required in our case*
    }).unless({
        path: [
            {url: /\/api\/v1\/candidates(.*)/ , methods: ['GET', 'OPTIONS'] },
            `${api}/users/login`,
            `${api}/users/register`,
        ]
    })
};

module.exports = authJWT;
