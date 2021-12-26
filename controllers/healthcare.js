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
   console.log('Fetching prev history record of patient from server')
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
//     let dumTemp = Math.floor((Math.random() * 100) + 1);
//     let dumspo2 = Math.floor((Math.random() * 100) + 1);
//     let dumbp = Math.floor((Math.random() * 100) + 1);
//     let dumtitle = 'dummyTitle';
//     let dumremark = 'dummyRemark';

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
    console.log('Latest Patient data fetched successfuly')
    res.send({success:true,LatestData:healthData});
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
     console.group('error occurred while fetching real time data from patient')
     res.status(400).json({ success: false,error: e.message });
   }
   
}


exports.getRestro = async (req,res) => {
   console.log("inside restro api")
   try {
      const localRestaurants =  [
       {
           name:"Beachside Bar",
           image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery']
       },
       {
           name:"Sagar Ratna",
           image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
           catagories: ["Cafe"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery']
       },
       {
           name:"El Chico Restaurant",
           image_url: "https://lh3.googleusercontent.com/uo6AQPFQcMWrNV7WlQaXk94CMbTXrHCv7PYFt-bvJx7xJo1ybTdKGAq_rCdOhw4dbs9G9nR5kZxg4CU6dmXTilxrbkM=w512",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery']
       },
       {
           name:"Beachside Bar",
           image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery']
       },
       {
           name:"Sagar Ratna",
           image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
           catagories: ["Cafe"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery']
       },
       {
           name:"Beachside Bar",
           image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery']
       },
       {
           name:"Sagar Ratna_p",
           image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
           catagories: ["Cafe"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['pickup']
       },
       {
           name:"El Chico Restaurant_p",
           image_url: "https://lh3.googleusercontent.com/uo6AQPFQcMWrNV7WlQaXk94CMbTXrHCv7PYFt-bvJx7xJo1ybTdKGAq_rCdOhw4dbs9G9nR5kZxg4CU6dmXTilxrbkM=w512",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['pickup']
       },
       {
           name:"Beachside Bar_p",
           image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['pickup']
       },
       {
           name:"Sagar Ratna_p",
           image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
           catagories: ["Cafe"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['pickup']
       },
   ]
    console.log('Latest Patient data fetched successfuly')
    res.send({success:true,LatestData:localRestaurants});

   } catch (e) {
     console.group('error occurred while fetching real time data from patient')
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


// get api for restaurent react native project
// exports.getRestro = () =>{
//    try {
   
//       const localRestaurants =  [
//     {
//         name:"Beachside Bar",
//         image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
//         catagories: ["Cafe","Bar"],
//         price:"$50",
//         reviews: 1244,
//         rating:4.5
//     },
//     {
//         name:"Sagar Ratna",
//         image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
//         catagories: ["Cafe"],
//         price:"$50",
//         reviews: 1244,
//         rating:4.5
//     },
//     {
//         name:"El Chico Restaurant",
//         image_url: "https://lh3.googleusercontent.com/uo6AQPFQcMWrNV7WlQaXk94CMbTXrHCv7PYFt-bvJx7xJo1ybTdKGAq_rCdOhw4dbs9G9nR5kZxg4CU6dmXTilxrbkM=w512",
//         catagories: ["Cafe","Bar"],
//         price:"$50",
//         reviews: 1244,
//         rating:4.5
//     },
//     {
//         name:"Beachside Bar",
//         image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
//         catagories: ["Cafe","Bar"],
//         price:"$50",
//         reviews: 1244,
//         rating:4.5
//     },
//     {
//         name:"Sagar Ratna",
//         image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
//         catagories: ["Cafe"],
//         price:"$50",
//         reviews: 1244,
//         rating:4.5
//     },
// ]
   
//      res.status(200).json({
//        success: true,
//        localRestaurants:localRestaurants
//      });

//    } catch (e) {
//      console.group('errrr')
//      res.status(400).json({ success: false,error: e.message });
//    }
// }


// getRestro


