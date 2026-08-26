import swaggerJsdoc from "swagger-jsdoc";

const options: swaggerJsdoc.Options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "MHC Demo API",
            version: "1.0.0",
            description: "API documentation for the MHC Demo application"
        },
        servers: [
            {
                url: "http://localhost:3000"
            }
        ]
    },

    apis: ["./src/routes/*.ts"]
};

export const swaggerSpec = swaggerJsdoc(options);