const express = require("express");
var mongodb = require('mongodb');

// adminRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const adminRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

/* ADMIN CRUD DATA DRIVER */

// ADMIN READ DRIVER BELUM DI VERIFIKASI (FD7)
adminRoutes.route("/admin/get/driver/unverificated").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { verification_status: false };
  db_connect
    .collection("DataDriver")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
});


// ADMIN VERIFIKASI DRIVER (FD8)
adminRoutes.route("/admin/update/verif/:id").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
      verification_status: true
    },
  };
  db_connect
    .collection("DataDriver")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});


// ADMIN READ 1 DRIVER (FD9)
adminRoutes.route("/admin/read/driver/:id").get((req, res) => {
  let db_connect = dbo.getDb("employees");
  var myquery = { id: req.body.id };
  db_connect
    .collection("DataDriver")
    .findOne(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
});

// ADMIN READ ALL DRIVER (SUDAH DI VERIFIKASI) (FD2)
adminRoutes.route("/admin/read/alldriver").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let mySort = {name: 1};
  db_connect
    .collection("DataDriver")
    .find({})
    .sort(mySort)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
});

// ADMIN UPDATE DRIVER (FD5)
adminRoutes.route("/admin/update/driver/:id").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: req.body
  };
  db_connect
    .collection("DataDriver")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});

// ADMIN DELETE DRIVER (FD4)
adminRoutes.route("/admin/delete/driver/:id").delete((req, res) => {
  let db_connect = dbo.getDb("employees");
  var myquery = { id: req.body.id };
  db_connect.collection("DataDriver").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
  });
});

// ADMIN SEARCH DRIVER BY NIK (FD3)
adminRoutes.route("/admin/search/driver/:nik").get((req, res) => {
  let db_connect = dbo.getDb("employees");
  var myquery = { nik: req.body.nik };
  db_connect
    .collection("DataDriver")
    .findOne(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
});



/* ADMIN READ UPDATE SEARCH DATA CUSTOMER */

// ADMIN READ CUSTOMER (FC3)
adminRoutes.route("/admin/read/allcust").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let mySort = {name: 1};
  db_connect
    .collection("DataCustomer")
    .find({})
    .sort(mySort)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
});

// AdMIN READ 1 CUSTOMER (FC6)
adminRoutes.route("/admin/read/cust/:id").get((req, res) => {
  let db_connect = dbo.getDb("employees");
  var myquery = { id: req.body.id };
  db_connect
    .collection("DataCustomer")
    .findOne(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
});

// ADMIN UPDATE CUSTOMER STATUS BLOKIR (FC7)  
adminRoutes.route("/admin/update/blokir/:id").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { id: req.body.id };
  let newvalues = {
    $set: {
      blocked: req.body.blocked
    },
  };
  db_connect
    .collection("DataCustomer")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
    });
});


// ADMIN SEARCH CUSTOMER (FC4)
adminRoutes.route("/admin/search/cust").get((req, res) => {
  let db_connect = dbo.getDb("employees");
  var myquery = { name: req.body.name };
  db_connect
    .collection("DataCustomer")
    .findOne(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
});


/* ADMIN CRUD DATA ADMIN */

// ADMIN CREATE ADMIN ACCOUNT (FA1)
adminRoutes.route("/admin/add/newadmin").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  console.log(req)
  if(req.body.admin_password == req.body.password_verification){
    console.log("verif pass berhasil");
    let newAdm = {
      admin_name: req.body.admin_name,
      admin_email: req.body.admin_email,
      admin_password: req.body.admin_password,
      created_at: new Date()
    };
    try{
      //console.log(req.data);
      db_connect.collection("DataAdmin").insertOne(newAdm);
      res.status(201).json({
      message: "Succesfully inserted",
      newAdm
    });
    }catch(err){
      console.log(err);
    }
  }else{
    res.status(401).json({
      message: "Unsuccesful",
    });
  }

});

// ADMIN READ ALL ADMIN ACCOUNT (FA2)
adminRoutes.route("/admin/read/alladmin").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let mySort = {name: 1};
  db_connect
    .collection("DataAdmin")
    .find({})
    .sort(mySort)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// ADMIN READ AKUN ADMIN TERENTU (FA3)
adminRoutes.route("/admin/read/admin/:id").get((req, res) => {
  let db_connect = dbo.getDb("employees");
  var myquery = { _id: new mongodb.ObjectID(req.params.id) };
  db_connect
    .collection("DataAdmin")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

// ADMIN UPDATE ADMIN ACCOUNT (FA4)
adminRoutes.route("/admin/update/admin/:id").post(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { _id: new mongodb.ObjectID(req.params.id), admin_password: req.body.admin_curr_password};

  let newvalues = {
    $set: {
      admin_name: req.body.admin_name,
      admin_email: req.body.admin_email,
      admin_password: req.body.admin_new_password
    }
  };

  db_connect
    .collection("DataAdmin")
    .updateOne(myquery, newvalues, function (err, result) {
      if (err) throw err;
      res.status(201).json({
        message: "Succesfully updated",
        result
      });
    });
  
});

// ADMIN DELETE ADMIN ACCOUNT (FA5)
adminRoutes.route("/admin/delete/admin/:id").delete((req, res) => {
  let db_connect = dbo.getDb("employees");
  var myquery = { _id: new mongodb.ObjectID(req.params.id) };
  db_connect.collection("DataAdmin").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    res.status(201).json({obj, message : "Deleted Succesfully"});
  });
});

/* ADMIN READ ACTIVITY HISTORY (ALL AND PER DAY/ MONTH/ YEAR) */

// ADMIN READ ALL ACTIVITY (FR5)
adminRoutes.route("/admin/read/allactivity").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("ActivityHistory")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
});

// ADMIN READ ACTIVITY PER DAY (FR6)
adminRoutes.route("/admin/get/history/perday").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  let myquery = { date: req.body.date };
  db_connect
    .collection("ActivityHistory")
    .find(myquery)
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
      console.log(result);
    });
});

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