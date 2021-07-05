const express = require("express");

// recordRoutes is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const authRoutes = express.Router();

//This will help us connect to the database
const dbo = require("../db/conn");

// ADMIN LOGIN
authRoutes.route("/auth/admin").post(function (req, res) {
    let db_connect = dbo.getDb("employees");
      try{
        db_connect.collection("DataAdmin")
                .find({admin_email: req.body.admin_email})
                .toArray(function (err, result) {
                    if (err) throw err;
                    if(result[0].admin_password == req.body.admin_password ){
                        res.status(201).json({
                            message: "Succesfully login",
                            result
                        });
                    }else{
                        res.status(400).json({
                            message: "Login unsuccessful"
                        });
                    }
                });
       
      }catch(err){
        console.log(err);
      }
  });

// CUST LOGIN
authRoutes.route("/auth/cust").post(function (req, res) {
    let db_connect = dbo.getDb("employees");
      try{
        db_connect.collection("DataCustomer")
                .find({customer_email: req.body.customer_email})
                .toArray(function (err, result) {
                    if (err) throw err;
                    if(result[0].customer_password == req.body.customer_password ){
                        res.status(201).json({
                            message: "Succesfully login",
                            result
                        });
                    }else{
                        res.status(400).json({
                            message: "Login unsuccessful"
                        });
                    }
                });
       
      }catch(err){
        console.log(err);
      }
  });

// DRIVER LOGIN
authRoutes.route("/auth/driver").post(function (req, res) {
    let db_connect = dbo.getDb("employees");
      try{
        db_connect.collection("DataDriver")
                .find({driver_email: req.body.driver_email})
                .toArray(function (err, result) {
                    if (err) throw err;
                    if(result[0].driver_password == req.body.driver_password ){
                        res.status(201).json({
                            message: "Succesfully login",
                            result
                        });
                    }else{
                        res.status(400).json({
                            message: "Login unsuccessful"
                        });
                    }
                });
       
      }catch(err){
        console.log(err);
      }
  });

// LOGOUT


module.exports = authRoutes;