
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  sex: { type: String, required: true },
  dob: { type: String, required: true },
  email:{
    type: String,
    required: [true, 'Please enter your email address'],
    // unique: true
},
  password :{
    type: String,
    required: [true, 'Please enter password for your account'],
    // minlength: [6, 'Your password must be atleast 6 characters long']
},
  pcontact:{ type: String },
  gcontact: { type: String },
  state: { type: String},
  city: { type: String},
  zip: { type: String },
  bloodgroup : { type: String },
  address: { type: String,},
  isAdmin : { type: String, default: false },
  role: {
    type: String,
    enum:{
        values: ['user', 'employer'],
        message : 'Please select your role'
    },
    //required: [true, 'Please select role that is required'],
    default: 'user'
    },
  remark: { type: String, default: '' },
  createdAt: {
    type: Date,
    default: Date.now
},
    resetPasswordToken: String,
    resetPasswordExpire: Date
 
}, {timestamps: true })


// role : 1-> superadmin, 2-> zonal-admin, 3-> voters
module.exports = mongoose.model('Users',userSchema);





// //   ----User Model
// const mongoose = require('mongoose');
// const validator = require('validator');
// const bcrypt = require('bcryptjs');
// const jwt = require('jsonwebtoken');

// const userSchema = new mongoose.Schema({
//     name:{
//         type: String,
//         required: [true, 'Pleae enter your name']
//     },
//     email:{
//         type: String,
//         required: [true, 'Please enter your email address'],
//         unique: true,
//         validate: [validator.isEmail, 'Please enter a valid email address']
//     },
//     role: {
//         type: String,
//         enum:{
//             values: ['user', 'employer'],
//             message : 'Please select your role'
//         },
//         //required: [true, 'Please select role that is required'],
//         default: 'user'
//     },
//     password :{
//         type: String,
//         required: [true, 'Please enter password for your account'],
//         minlength: [8, 'Your password must be a t leeast 8 characters long'],
//         select: false
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     },
//     resetPasswordToken: String,
//     resetPasswordExpire: Date
// });

// //Encryting Passwords before Saving
// userSchema.pre('save', async function(next){
//     this.password = await bcrypt.hash(this.password, 10);
// });

// //Return JSON web token
// userSchema.methods.getJwtToken = function(){
//     return jwt.sign({id: this._id}, process.env.JWT_SECRET, {
//         expiresIn: process.env.JWT_EXPIRES_TIME
//     });
// }

// //Compare password in database
// userSchema.methods.comparePassword = async function(enterPassword){
//     return await bcrypt.compare(enterPassword, this.password);
// }


// module.exports = mongoose.model('User', userSchema);












