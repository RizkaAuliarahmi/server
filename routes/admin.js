const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const adminRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

/* ADMIN CRUD + SEARCH DATA DRIVER */

/* ADMIN READ UPDATE SEARCH DATA CUSTOMER */

/* ADMIN CRUD DATA ADMIN */

/* ADMIN READ ACTIVITY HISTORY (ALL AND PER DAY/ MONTH/ YEAR) */

/* ADMIN READ ABOUT REPORTS */

module.exports = adminRoutes;