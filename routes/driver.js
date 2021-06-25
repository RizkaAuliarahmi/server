const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const driverRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// READ NEW ORDER //

// READ REVIEW AFTER ORDER FINISHED //

// DRIVER GET ALL ORDER HISTORY //

// DRIVER GET ORDER HISTORY  BY TIME //

// DRIVER READ PROFILE //

// DRIVER UPDATE PROFILE //

module.exports = driverRoutes;