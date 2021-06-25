const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const customerRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// CUSTOMER CRAETE ACCOUNT // (FC1)

// CUSTOMER READ DATA SENDIRI (FC6)

// CUSTOMER UPDATE ACCOUNT // (FC2)

// CUSTOMER CREATE ORDER // (FR1)

// CUSTOMER READ 1 ORDER // (FR4)

// CUSTOMER GET DRIVER PROFILE // (FD9)

// CUSTOMER CREATE REVIEW // (FR3)

// CUSTOMER GET ALL ORDER HISTORY // (FR4)

// CUSTOMER GET ORDER HISTORY (motorcycle) // (FR4)

// CUSTOMER GET ORDER HISTORY (car) // (FR4)

// CUSTOMER GET ORDER HISTORY (barang) // (FR4)

module.exports = customerRoutes;