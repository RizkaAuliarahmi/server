const express = require("express");
var mongodb = require('mongodb');

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const driverRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// DRIVER DAFTAR (email pass) (FD1)
driverRoutes.route("/driver/signup").post(function (req, res) {
    let db_connect = dbo.getDb("employees");
    if(req.body.driver_password == req.body.password_verification){
        console.log("verif pass berhasil");
        let newObj = {
          profile:{
              name: req.body.driver_name
          },
          driver_email: req.body.driver_email,
          driver_password: req.body.driver_password,
          created_at: new Date()
        };
        try{
          //console.log(req.data);
          db_connect.collection("DataDriver").insertOne(newObj);
          res.status(201).json({
          message: "Succesfully inserted",
          newObj
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
// READ NEW ORDER // (FR4)
driverRoutes.route("/driver/read/activity/:id").get((req, res) => {
    let db_connect = dbo.getDb("employees");
    var myquery = { id_driver: req.params.id };
    db_connect
      .collection("ActivityHistory")
      .find(myquery)
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });


// READ REVIEW AFTER ORDER FINISHED (Read 1 feedback)// (FR9)
driverRoutes.route("/driver/read/feedback/:id").get((req, res) => {
    let db_connect = dbo.getDb("employees");
    var myquery = { _id: new mongodb.ObjectID(req.params.id) };
    db_connect
      .collection("Feedback")
      .find(myquery)
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });



// DRIVER GET ALL ORDER HISTORY // (FR7)
driverRoutes.route("/driver/get/history/:id").get(function (req, res) {
    let db_connect = dbo.getDb("employees");
    let myquery = { id_driver: req.params.id };
    db_connect
      .collection("ActivityHistory")
      .find(myquery)
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });




// DRIVER READ PROFILE // (FD9)
driverRoutes.route("/driver/read/profile/:id").get((req, res) => {
    let db_connect = dbo.getDb("employees");
    var myquery = { _id: new mongodb.ObjectID(req.params.id) };
    db_connect
      .collection("DataDriver")
      .find(myquery)
      .toArray(function (err, result) {
        if (err) throw err;
        res.json(result);
      });
  });




// DRIVER UPDATE PROFILE DLL // (FD5)
driverRoutes.route("/driver/update/driver/:id").post(function (req, res) {
    let db_connect = dbo.getDb("employees");
    var myquery = { _id: new mongodb.ObjectID(req.params.id) };
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




// DRIVER UPDATE ACTIVE STATUS // (FD10)
driverRoutes.route("/driver/update/active/:id").post(function (req, res) {
    let db_connect = dbo.getDb("employees");
    var myquery = { _id: new mongodb.ObjectID(req.params.id) };
    let _active_status = req.body.active_status;
    let newvalues = {
      $set: {
        active_status: _active_status
      },
    };
    db_connect
      .collection("DataDriver")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
      });
  });

module.exports = driverRoutes;