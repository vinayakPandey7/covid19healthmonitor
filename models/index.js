const dbConfig = require("../config/db.config.js");
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})
const DB = process.env.DATABASE;


const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;
// db.url = process.env.MONGODB_URI || DB.url;
// db.url = dbConfig.url;
db.healthcare = require("./healthcare.js")(mongoose);

module.exports = db;