const swaggerAutogen = require('swagger-autogen')()
const packagejson = require ('./package.json');

const doc = {
    info: {
        version: packagejson.version,
        title: packagejson.name,
        description: packagejson.description
    },
    basePath: "/",
    host: "localhost:3000",
    consumes: ['application/json'],
    produces: ['application/json'],
    schemes: ['http', 'https'],
    tags: [
        {
            "name": "holajb",
            "description": "Endpoints"
        }
    ],
}
const outputFile = './swagger-output.json';
const endpointsFiles = ['./src/index.ts'];
swaggerAutogen(outputFile, endpointsFiles, doc);
