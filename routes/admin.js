const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const adminRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

/* ADMIN CRUD + SEARCH DATA DRIVER */

// ADMIN CREATE DRIVER (MOTOR) (FD1)
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

// ADMIN CREATE DRIVER (CAR) (FD1)

// ADMIN READ DRIVER BELUM DI VERIFIKASI (FD7)

// ADMIN VERIFIKASI DRIVER (FD8)

// ADMIN READ 1 DRIVER (FD9)

// ADMIN READ ALL DRIVER (SUDAH DI VERIFIKASI) (FD2)

// ADMIN UPDATE DRIVER (FD5)

// ADMIN DELETE DRIVER (FD4)

// ADMIN SEARCH DRIVER (FD3)

/* ADMIN READ UPDATE SEARCH DATA CUSTOMER */

// ADMIN READ CUSTOMER (FC3)

// AdMIN READ 1 CUSTOMER (FC6)

// ADMIN UPDATE CUSTOMER STATUS BLOKIR (FC7)  

// ADMIN SEARCH CUSTOMER (FC4)

/* ADMIN CRUD DATA ADMIN */

// ADMIN CREATE ADMIN ACCOUNT (FA1)

// ADMIN READ ADMIN ACCOUNT (FA2)

// ADMIN READ AKUN ADMIN TERENTU (FA3)

// ADMIN UPDATE ADMIN ACCOUNT (FA4)

// ADMIN DELETE ADMIN ACCOUNT (FA5)

/* ADMIN READ ACTIVITY HISTORY (ALL AND PER DAY/ MONTH/ YEAR) */

// ADMIN READ ALL ACTIVITY (FR5)

// ADMIN READ ACTIVITY PER DAY (FR6)

/* ADMIN READ ABOUT REPORTS */

// REPORTS PER DAY // (FR8)
// Jumlah Order setiap Layanan 
// Jumlah Akun baru

// REPORTS PER MONTH // (FR8)
// Jumlah Order setiap Layanan 
// Jumlah Akun baru

// REPORTS PER YEAR // (FR8)
// Jumlah Order setiap Layanan 
// Jumlah Akun baru

module.exports = adminRoutes;