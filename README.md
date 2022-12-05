
## Quick Build and Install
  * npm install
  * npm run start

## Basic Usage
The following code snippets show two example endpoints from an api that returns customers and documents

## Documentation
Returns a list of documents
  * Authentication - None
  * Rate Limit - 100 per hour
  * GET localhost:5000/api/docs

Returns a list of clients
  * Authentication - jwt
  * Rate Limit - 200 per hour
  * GET localhost:5000/api/clients
 
JWT key in .env

