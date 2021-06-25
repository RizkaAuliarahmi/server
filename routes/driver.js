const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const driverRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// DRIVER DAFTAR (email pass) (FD1)

// READ NEW ORDER // (FR4)

// READ REVIEW AFTER ORDER FINISHED // (FR9)

// DRIVER GET ALL ORDER HISTORY // (FR7)

// DRIVER READ PROFILE // (FD9)

// DRIVER UPDATE PROFILE DLL // (FD5)

// DRIVER UPDATE ACTIVE STATUS // (FD10)

module.exports = driverRoutes;