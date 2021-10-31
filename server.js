const express = require("express");
//helps to parse the request and create the req.body object
const bodyParser = require("body-parser");
// provides Express middleware to enable CORS with various options
const cors = require("cors");
const path= require('path');
const dotenv = require('dotenv');

dotenv.config({path: './config.env'})
const DB = process.env.DATABASE;
const PORT =  process.env.PORT || 5000;

const healthcareRoute = require('./routes/healthcare')
// define Global Variable
const app = express();
// const PORT = process.env.PORT || 8080; 


var corsOptions = {origin: "http://http://192.168.29.143:8080"};

app.use(cors());

const db = require("./models");
db.mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true,
    // useFindAndModify: false
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch(err => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));


// const middleware = (req,res, next) => {
//   console.log('hit middleware');
//   next();
// }

// simple route
// app.get("/", (req, res) => {
//   res.json({ message: "sucess:true" });
// })



if (process.env.NODE_ENV === 'production') {
  app.use(express.static( 'client/build'));

  app.get('*',(req,res) => {
    res.sendFile(path.join(__dirname,'client','build','index.html'))
  })
}
app.use('/api/',healthcareRoute);
// app.post('/get-data', urlencodedParser, function (req, res) {  
//    // Prepare output in JSON format  
//    let temp = Math.floor((Math.random() * 100) + 1);
//    response = { 
//        succes:true, 
//        temp:temp,  
//        spo2: 99,
//        heatrate: 65
//    };  
//    console.log(response);  
//    res.send(response);  
// })  

// set port, listen for requests

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

// var server = app.listen(8000, function () {  
//     var host = server.address().address  
//     var port = server.address().port  
//     console.log("Example app listening at http://%s:%s", host, port)  
//   })  
  