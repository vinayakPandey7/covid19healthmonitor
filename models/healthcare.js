
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
  temperature: { type: Number, default: 0 },
  spo2: { type: Number, default: 0 },
  bp: { type: Number, default: 0 },
  healthy: {type: Number, default: true},
  title: { type: String, default: '' },
  remark: { type: String, default: '' },
  date: {
    type: Date,
    // `Date.now()` returns the current unix timestamp as a number
    default: Date.now
  },
  needtopublish:{ type: Boolean, default: true },
  reqdoctor: { type: Boolean, default: false },
 
}, {timestamps: true })


// role : 1-> superadmin, 2-> zonal-admin, 3-> voters
module.exports = mongoose.model('Userhealths',mySchema);





//   ----User Model
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







// -----Auth Controller
// const User = require('../models/users');
// const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
// const ErrorHandler = require('../utils/errorHandler');

// //Register a new user ==> /api/v1/user/register

// exports.registerUser = catchAsyncErrors(async(req, res, next) => {
//     const { name, email, password, role} = req.body;
    
//     const user = await User.create({
//         name,
//         email,
//         password,
//         role
//     });

//     //Create JWT Token
//     const token = user.getJwtToken();

//     res.status(200).json({
//         succes: true,
//         message: 'User created succesfully',
//         data: user,
//         token: token
//     })
// });



// //Loguin user => /api/v1/login
// exports.loginUser = catchAsyncErrors( async(req, res, next) =>{
//     const { email, password } = req.body;

//     if(!email || !password){
//         return next (new ErrorHandler('Please enter email and password'), 400);
//     }

//     //Finding user in database
//     const user = await (await User.findOne({email})).isSelected('+password');

//     if(!user){
//         return next(new ErrorHandler('Invalid Email or Password', 401));
//     }

//     //Check if passwoerd is correct
//     const isPasswordMatched = await user.comparePassword(password);

//     if(!isPasswordMatched){
//         return next (new ErrorHandler('Invalid Email or Password', 401));
//     }

//     //Create JSOBN Web Token
//     const token = user.getJwtToken();

//     res.status(200).json({
//         succes: true,
//         token
//     })

// })