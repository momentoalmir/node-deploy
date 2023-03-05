# Server API for User Management

This server provides a REST API for managing users. It uses [Fastify](https://www.fastify.io/) as the web framework and [Prisma](https://www.prisma.io/) as the ORM.

## Requirements

- Node.js 18.x

## Installation

1. Clone the repository
2. Run `npm install` to install the dependencies

## Running the server

- `npm run dev` to start the server in development mode
- `npm run build` to build the server
- `npm start` to start the server in production mode

The server listens on port 3000 by default. You can set the `PORT` environment variable to change the port.

## API Endpoints

### GET /users

Returns a list of all users.

### POST /users

Creates a new user. Requires the following JSON payload:

```json
{
"name": "John Doe",
"email": "john.doe@example.com"
}
```


## Dependencies

- "@prisma/client": "^4.11.0"
- "fastify": "^4.14.0"
- "zod": "^3.21.0"

## DevDependencies

- "@types/node": "^18.14.6"
- "prisma": "^4.11.0"
- "tsup": "^6.6.3"
- "tsx": "^3.12.3"
- "typescript": "^4.9.5"
