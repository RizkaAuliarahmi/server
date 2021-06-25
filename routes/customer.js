const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const customerRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// CUSTOMER CRAETE ACCOUNT //

// CUSTOMER UPDATE ACCOUNT //

// CUSTOMER CREATE ORDER //

// CUSTOMER READ ORDER //

// CUSTOMER GET DRIVER PROFILE //

// CUSTOMER CREATE REVIEW //

// CUSTOMER GET ALL ORDER HISTORY //

// CUSTOMER GET ORDER HISTORY (motorcycle) //

// CUSTOMER GET ORDER HISTORY (car) //

// CUSTOMER GET ORDER HISTORY (barang) //

module.exports = customerRoutes;