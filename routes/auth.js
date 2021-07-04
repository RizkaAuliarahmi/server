const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const authRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// ADMIN LOGIN

// CUST LOGIN

// DRIVER LOGIN

// LOGOUT


module.exports = authRoutes;