const db = require("../models")
const Userhealths = require('../models/healthcare');
// Create and Save a new Tutorial
exports.addPost = async (req,res) => {
   

     const {temperature, bp, spo2, title, remark } = req.body;

     try {
        
       const newHealthcare = new Userhealths({temperature,bp, spo2, title, remark });
       const savedPost = await newHealthcare.save();
       if (!savedPost) throw Error('Something went wrong saving the user');
   
      
       res.status(200).json({
         success: true,
         savedPost:savedPost
       });
     } catch (e) {
       console.group('errrr')
       res.status(400).json({ success: false,error: e.message });
     }
     
 }

// Find a single Tutorial with an id
exports.findAll = async (req,res) => {
   console.log('m inside findall')
   try {
     const healthData = await Userhealths.find();

     if (!healthData) throw Error('Something went wrong saving the user');

     res.status(200).json({
       success: true,
       healthData:healthData
     });

   } catch (e) {
     console.group('errrr')
     res.status(400).json({ success: false,error: e.message });
   }
   
}


exports.findLatest = async (req,res) => {
   
   try {
    let dumTemp = Math.floor((Math.random() * 100) + 1);
    let dumspo2 = Math.floor((Math.random() * 100) + 1);
    let dumbp = Math.floor((Math.random() * 100) + 1);
    let dumtitle = 'dummyTitle';
    let dumremark = 'dummyRemark';

//      const createDummyData = new Userhealths({temperature:dumTemp,bp:dumbp, spo2:dumspo2, title:dumtitle, remark:dumremark });
//      const savedPost = await createDummyData.save();
//      if (!savedPost) throw Error('Something went wrong saving the user');


     const healthData = await Userhealths.findOne({}, {}, { sort: { 'createdAt' : -1 } });

    //  console.log(tempData);
    //  let healthData = {
    //   chart1:{name:'temperaure', xAxis:tempData.date ,data:tempData.date,healthy:tempData.healthy,title:tempData.title,remark:tempData.remark},
    //   chart2:{name:'spo2',xAxis:tempData.date ,data:tempData.date,healthy:tempData.healthy,title:tempData.title,remark:tempData.remark},
    //   chart3:{name:'bp',xAxis:tempData.date ,data:tempData.date,healthy:tempData.healthy,title:tempData.title,remark:tempData.remark}
    //  }
    console.log('inside find-latest, data inserted and feteched successfuly')
    res.send({hell:true,dataSaved:savedPost,LatestData:healthData});
    //  tempData.map((item,index) => {
    //   healthData['chart1'].data.push(item.temperature);
    //   healthData['chart1'].xAxis.push(item.date);
    //   healthData['chart1'].healthy.push(item.healthy);
    //   healthData['chart1'].title.push(item.title);
    //   healthData['chart1'].remark.push(item.remark);
      

    //   healthData['chart2'].data.push(item.spo2)
    //   healthData['chart2'].xAxis.push(item.date);
    //   healthData['chart2'].healthy.push(item.healthy);
    //   healthData['chart2'].title.push(item.title);
    //   healthData['chart2'].remark.push(item.remark);


    //   healthData['chart3'].data.push(item.bp)
    //   healthData['chart3'].xAxis.push(item.date);
    //   healthData['chart3'].healthy.push(item.healthy);
    //   healthData['chart3'].title.push(item.title);
    //   healthData['chart3'].remark.push(item.remark);
    //  })
    //  console.log(healthData)
     
  
  
    //  if (!healthData) throw Error('Something went wrong saving the user');
 
    // console.log(healthData)
    //  res.status(200).json({
    //    success: true,
    //    healthData:healthData
    //  });
   } catch (e) {
     console.group('errrr')
     res.status(400).json({ success: false,error: e.message });
   }
   
}


// Update a Tutorial by the id in the request
exports.update = (req, res) => {
  
};

// Delete a Tutorial with the specified id in the request
exports.delete = (req, res) => {
  
};

// Delete all Tutorials from the database.
exports.deleteAll = (req, res) => {
  
};

// Find all published Tutorials
exports.findAllPublished = (req, res) => {
  
};
