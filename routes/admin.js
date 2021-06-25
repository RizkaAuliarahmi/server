const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const adminRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

/* ADMIN CRUD + SEARCH DATA DRIVER */

// ADMIN CREATE DRIVER (MOTOR) 
adminRoutes.route("/admin/driver/motor/add").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let new_profile = {
    name: req.body.name,
    profpict: req.body.prof_pict,
    phone_number: req.body.phone_number,
    address_id: null,
    gender:req.body.gender,
    birth_of_date: req.body.birth_of_date
  };

  let new_vehicle_details = {
    trasportation_type: "Motorcycle",
    plat_number: req.body.plat_number,
    capacity: req.body.capacity,
    merk_and_type: req.body.merk_and_type,
    stnk_no_registrasion: req.body.stnk_no_registrasion

  };

  let newDriver = {
    driver_email: req.body.driver_email,
    driver_password: req.body.driver_password,
    profile: new_profile,
    vehicle_details: new_vehicle_details,
    sim_no: req.body.sim_no,
    rating: null,
    active_status: false,
    blocked: false
  };

  try{
    db_connect.collection("DataDriver").insertOne(newDriver);
    res.status(201).json({
    message: "Succesfully inserted",
    newDriver
  });
  }catch(err){
    console.log(err);
  }

});

// ADMIN CREATE DRIVER (CAR) 

// ADMIN READ DRIVER BELUM DI VERIFIKASI

// ADMIN VERIFIKASI DRIVER

// ADMIN READ ACTIVE DRIVER 

// ADMIN READ ALL DRIVER 

// ADMIN UPDATE DRIVER 

// ADMIN DELETE DRIVER

// ADMIN SEARCH DRIVER

/* ADMIN READ UPDATE SEARCH DATA CUSTOMER */

// ADMIN READ CUSTOMER

// ADMIN UPDATE CUSTOMER STATUS

// ADMIN SEARCH CUSTOMER

/* ADMIN CRUD DATA ADMIN */

// ADMIN CREATE ADMIN ACCOUNT

// ADMIN READ ADMIN ACCOUNT

// ADMIN UPDATE ADMIN ACCOUNT

// ADMIN DELETE ADMIN ACCOUNT

/* ADMIN READ ACTIVITY HISTORY (ALL AND PER DAY/ MONTH/ YEAR) */

// ADMIN READ ALL ACTIVITY

// ADMIN READ ACTIVITY PER DAY

/* ADMIN READ ABOUT REPORTS */

// REPORTS PER DAY //
// Jumlah Order setiap Layanan & Income 

// REPORTS PER MONTH //
// Jumlah Order setiap Layanan & Income 

// REPORTS PER YEAR //
// Jumlah Order setiap Layanan & Income 

module.exports = adminRoutes;