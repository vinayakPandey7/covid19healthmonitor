const User = require('../models/user');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const {createJWT,} = require("../utils/auth");

const emailRegexp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

exports.signup = (req, res, next) => {
    console.log('inside signup controller')
    let { firstname,lastname, dob, sex, address,pcontact,gcontact,state,zip,email,password } = req.body;
    let errors = [];
    // if (!name) {
    //   errors.push({ name: "required" });
    // }
    // if (!email) {
    //   errors.push({ email: "required" });
    // }
    // if (!emailRegexp.test(email)) {
    //   errors.push({ email: "invalid" });
    // }
    // if (!password) {
    //   errors.push({ password: "required" });
    // }
    // if (!password_confirmation) {
    //   errors.push({
    //    password_confirmation: "required",
    //   });
    // }
    // if (password != password_confirmation) {
    //   errors.push({ password: "mismatch" });
    // }
    // if (errors.length > 0) {
    //   return res.status(422).json({ errors: errors });
    // }
   User.findOne({email: email})
      .then(user=>{
         if(user){
            return res.status(422).json({ errors: [{ user: "email already exists" }] });
         }else {
           const user = new User({
             firstname,lastname,dob, sex, address,pcontact,gcontact,state,zip,email,password 
           });

           console.log(firstname,lastname,dob, sex, address,pcontact,gcontact,state,zip,email,password)

   bcrypt.genSalt(10, function(err, salt) { bcrypt.hash(password, salt, function(err, hash) {
           if (err) throw err;
           user.password = hash;
           user.save()
               .then(response => {
                  res.status(200).json({
                    success: true,
                    result: response
                  })
               })
               .catch(err => {
                 res.status(500).json({
                    errors: [{ error: err }]
                 });
              });
           });
        });
       }
    }).catch(err =>{
        res.status(500).json({
          errors: [{ error: 'Something went wrong' }]
        });
    })
  }



  exports.signin = (req, res) => {
      console.log('inside sign in')
       let { email, pass, isloggedIn } = req.body.data;
       console.log(req.body.data)
       let errors = [];
       if (!email) {
         errors.push({ email: "required" });
       }
       if (!emailRegexp.test(email)) {
         errors.push({ email: "invalid email" });
       }
       if (!pass) {
         errors.push({ passowrd: "required" });
       }
       if (errors.length > 0) {
        return res.status(422).json({ errors: errors });
       }
       User.findOne({ email: email }).then(user => {
          if (!user) {
            return res.status(404).json({
              errors: [{ user: "not found" }],
            });
          } else {
             bcrypt.compare(pass, user.password).then(isMatch => {
                if (!isMatch) {
                    console.log('pass not matched')
                 return res.status(400).json({ errors: [{ password:
  "incorrect" }] 
                 });
                }
         let access_token = createJWT(
            user.email,
            user._id,
            3600
         );
         jwt.verify(access_token, 'vinayak', (err,
  decoded) => {
           if (err) {
            console.log('jwt verify eror')
              res.status(500).json({ erros: err });
           }
           if (decoded) {
               return res.status(200).json({
                  success: true,
                  access_token: access_token,
                  message: user
               });
             }
           });
          }).catch(err => {
            res.status(500).json({ erros: err });
          });
        }
     }).catch(err => {
        res.status(500).json({ erros: err });
     });
  }