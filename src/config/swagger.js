import swaggerJsDoc from "swagger-jsdoc";

const swaggerOptions = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Hospital Management API",
            version: "1.0.0",
            description:
                "API for managing users and patients in a hospital system",
        },
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: "http",
                    scheme: "bearer",
                    bearerFormat: "JWT",
                },
            },
        },
        servers: [
            {
                url: "http://localhost:8000/api",
                description: "Development Server",
            },
        ],
    },
    apis: ["./src/routes/*.js"], // Path to route files
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

export default swaggerDocs;
