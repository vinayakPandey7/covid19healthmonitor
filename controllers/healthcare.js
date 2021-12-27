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
           transactions: ['delivery'],
           menueDetail: [
             {
                 title: "Dum aloo (potatoes in a thick nut gravy)",
                 description: "This particular recipe with new potatoes comes from Asma Khan, chef-patron of Darjeeling Express. Serve with fried bread such as puris.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Aloo tikki chaat",
                 description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Maharashtrian amti dahl",
                 description: "Olive’s Indian cooking expert, Maunika Gowardhan, shares her recipe for a classic sweet and sour plant-based dahl from Maharashtra in Western India.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Shahi paneer",
                 description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Saag Aloo",
                 description: "Combining potatoes with vibrant spices, this dish always goes down a treat thanks to its dose of comfort.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Vegetarian brinjal pickle",
                 description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice. A slight sweet hit makes it a great addition to any curry.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Chana masala",
                 description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Mutter paneer",
                 description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Spring onion bhajis with mint and coriander chutney",
                 description: "Homemade mint and coriander chutney is the perfect condiment to eat with these crispy spring onion bhajis.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Sweet potato tikki",
                 description: "Traditionally cooked in Indian households as a snack, these potato cakes are packed with warming spice and served with a fresh, crunchy kachumber salad. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
             },{
                 title: "Bombay samosas",
                 description: "Lighter version of the classic samosa, ideal for healthy dinner party snacks.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Indian sweetcorn and spinach shorba",
                 description: "A Mughlai addition to Indian cuisine, this healthy but hearty soup is a classic in most homes and restaurants across the country.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
             }
         ];
       },
       {
           name:"Sagar Ratna",
           image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
           catagories: ["Cafe"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery'],
           menueDetail: [
             {
                 title: "Dum aloo (potatoes in a thick nut gravy)",
                 description: "This particular recipe with new potatoes comes from Asma Khan, chef-patron of Darjeeling Express. Serve with fried bread such as puris.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Aloo tikki chaat",
                 description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Maharashtrian amti dahl",
                 description: "Olive’s Indian cooking expert, Maunika Gowardhan, shares her recipe for a classic sweet and sour plant-based dahl from Maharashtra in Western India.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Shahi paneer",
                 description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Saag Aloo",
                 description: "Combining potatoes with vibrant spices, this dish always goes down a treat thanks to its dose of comfort.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Vegetarian brinjal pickle",
                 description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice. A slight sweet hit makes it a great addition to any curry.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Chana masala",
                 description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Mutter paneer",
                 description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Spring onion bhajis with mint and coriander chutney",
                 description: "Homemade mint and coriander chutney is the perfect condiment to eat with these crispy spring onion bhajis.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Sweet potato tikki",
                 description: "Traditionally cooked in Indian households as a snack, these potato cakes are packed with warming spice and served with a fresh, crunchy kachumber salad. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
             },{
                 title: "Bombay samosas",
                 description: "Lighter version of the classic samosa, ideal for healthy dinner party snacks.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Indian sweetcorn and spinach shorba",
                 description: "A Mughlai addition to Indian cuisine, this healthy but hearty soup is a classic in most homes and restaurants across the country.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
             }
         ];
       },
       {
           name:"El Chico Restaurant",
           image_url: "https://lh3.googleusercontent.com/uo6AQPFQcMWrNV7WlQaXk94CMbTXrHCv7PYFt-bvJx7xJo1ybTdKGAq_rCdOhw4dbs9G9nR5kZxg4CU6dmXTilxrbkM=w512",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery'],
           menueDetail: [
             {
                 title: "Dum aloo (potatoes in a thick nut gravy)",
                 description: "This particular recipe with new potatoes comes from Asma Khan, chef-patron of Darjeeling Express. Serve with fried bread such as puris.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Aloo tikki chaat",
                 description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Maharashtrian amti dahl",
                 description: "Olive’s Indian cooking expert, Maunika Gowardhan, shares her recipe for a classic sweet and sour plant-based dahl from Maharashtra in Western India.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Shahi paneer",
                 description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Saag Aloo",
                 description: "Combining potatoes with vibrant spices, this dish always goes down a treat thanks to its dose of comfort.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Vegetarian brinjal pickle",
                 description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice. A slight sweet hit makes it a great addition to any curry.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Chana masala",
                 description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Mutter paneer",
                 description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Spring onion bhajis with mint and coriander chutney",
                 description: "Homemade mint and coriander chutney is the perfect condiment to eat with these crispy spring onion bhajis.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Sweet potato tikki",
                 description: "Traditionally cooked in Indian households as a snack, these potato cakes are packed with warming spice and served with a fresh, crunchy kachumber salad. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
             },{
                 title: "Bombay samosas",
                 description: "Lighter version of the classic samosa, ideal for healthy dinner party snacks.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Indian sweetcorn and spinach shorba",
                 description: "A Mughlai addition to Indian cuisine, this healthy but hearty soup is a classic in most homes and restaurants across the country.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
             }
         ];
       },
       {
           name:"Beachside Bar",
           image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery'],
           menueDetail: [
             {
                 title: "Dum aloo (potatoes in a thick nut gravy)",
                 description: "This particular recipe with new potatoes comes from Asma Khan, chef-patron of Darjeeling Express. Serve with fried bread such as puris.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Aloo tikki chaat",
                 description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Maharashtrian amti dahl",
                 description: "Olive’s Indian cooking expert, Maunika Gowardhan, shares her recipe for a classic sweet and sour plant-based dahl from Maharashtra in Western India.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Shahi paneer",
                 description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Saag Aloo",
                 description: "Combining potatoes with vibrant spices, this dish always goes down a treat thanks to its dose of comfort.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Vegetarian brinjal pickle",
                 description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice. A slight sweet hit makes it a great addition to any curry.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Chana masala",
                 description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Mutter paneer",
                 description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Spring onion bhajis with mint and coriander chutney",
                 description: "Homemade mint and coriander chutney is the perfect condiment to eat with these crispy spring onion bhajis.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Sweet potato tikki",
                 description: "Traditionally cooked in Indian households as a snack, these potato cakes are packed with warming spice and served with a fresh, crunchy kachumber salad. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
             },{
                 title: "Bombay samosas",
                 description: "Lighter version of the classic samosa, ideal for healthy dinner party snacks.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Indian sweetcorn and spinach shorba",
                 description: "A Mughlai addition to Indian cuisine, this healthy but hearty soup is a classic in most homes and restaurants across the country.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
             }
         ];
       },
       {
           name:"Sagar Ratna",
           image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
           catagories: ["Cafe"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery'],
           menueDetail: [
             {
                 title: "Dum aloo (potatoes in a thick nut gravy)",
                 description: "This particular recipe with new potatoes comes from Asma Khan, chef-patron of Darjeeling Express. Serve with fried bread such as puris.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Aloo tikki chaat",
                 description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Maharashtrian amti dahl",
                 description: "Olive’s Indian cooking expert, Maunika Gowardhan, shares her recipe for a classic sweet and sour plant-based dahl from Maharashtra in Western India.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Shahi paneer",
                 description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Saag Aloo",
                 description: "Combining potatoes with vibrant spices, this dish always goes down a treat thanks to its dose of comfort.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Vegetarian brinjal pickle",
                 description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice. A slight sweet hit makes it a great addition to any curry.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Chana masala",
                 description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Mutter paneer",
                 description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Spring onion bhajis with mint and coriander chutney",
                 description: "Homemade mint and coriander chutney is the perfect condiment to eat with these crispy spring onion bhajis.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Sweet potato tikki",
                 description: "Traditionally cooked in Indian households as a snack, these potato cakes are packed with warming spice and served with a fresh, crunchy kachumber salad. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
             },{
                 title: "Bombay samosas",
                 description: "Lighter version of the classic samosa, ideal for healthy dinner party snacks.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Indian sweetcorn and spinach shorba",
                 description: "A Mughlai addition to Indian cuisine, this healthy but hearty soup is a classic in most homes and restaurants across the country.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
             }
         ];
       },
       {
           name:"Beachside Bar",
           image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['delivery'],
           menueDetail: [
             {
                 title: "Dum aloo (potatoes in a thick nut gravy)",
                 description: "This particular recipe with new potatoes comes from Asma Khan, chef-patron of Darjeeling Express. Serve with fried bread such as puris.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Aloo tikki chaat",
                 description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Maharashtrian amti dahl",
                 description: "Olive’s Indian cooking expert, Maunika Gowardhan, shares her recipe for a classic sweet and sour plant-based dahl from Maharashtra in Western India.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Shahi paneer",
                 description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Saag Aloo",
                 description: "Combining potatoes with vibrant spices, this dish always goes down a treat thanks to its dose of comfort.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Vegetarian brinjal pickle",
                 description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice. A slight sweet hit makes it a great addition to any curry.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Chana masala",
                 description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Mutter paneer",
                 description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Spring onion bhajis with mint and coriander chutney",
                 description: "Homemade mint and coriander chutney is the perfect condiment to eat with these crispy spring onion bhajis.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Sweet potato tikki",
                 description: "Traditionally cooked in Indian households as a snack, these potato cakes are packed with warming spice and served with a fresh, crunchy kachumber salad. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
             },{
                 title: "Bombay samosas",
                 description: "Lighter version of the classic samosa, ideal for healthy dinner party snacks.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Indian sweetcorn and spinach shorba",
                 description: "A Mughlai addition to Indian cuisine, this healthy but hearty soup is a classic in most homes and restaurants across the country.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
             }
         ];
       },
       {
           name:"Sagar Ratna_p",
           image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
           catagories: ["Cafe"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['pickup'],
           menueDetail: [
             {
                 title: "Dum aloo (potatoes in a thick nut gravy)",
                 description: "This particular recipe with new potatoes comes from Asma Khan, chef-patron of Darjeeling Express. Serve with fried bread such as puris.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Aloo tikki chaat",
                 description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Maharashtrian amti dahl",
                 description: "Olive’s Indian cooking expert, Maunika Gowardhan, shares her recipe for a classic sweet and sour plant-based dahl from Maharashtra in Western India.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Shahi paneer",
                 description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Saag Aloo",
                 description: "Combining potatoes with vibrant spices, this dish always goes down a treat thanks to its dose of comfort.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Vegetarian brinjal pickle",
                 description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice. A slight sweet hit makes it a great addition to any curry.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Chana masala",
                 description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Mutter paneer",
                 description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Spring onion bhajis with mint and coriander chutney",
                 description: "Homemade mint and coriander chutney is the perfect condiment to eat with these crispy spring onion bhajis.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Sweet potato tikki",
                 description: "Traditionally cooked in Indian households as a snack, these potato cakes are packed with warming spice and served with a fresh, crunchy kachumber salad. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
             },{
                 title: "Bombay samosas",
                 description: "Lighter version of the classic samosa, ideal for healthy dinner party snacks.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Indian sweetcorn and spinach shorba",
                 description: "A Mughlai addition to Indian cuisine, this healthy but hearty soup is a classic in most homes and restaurants across the country.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
             }
         ];
       },
       {
           name:"El Chico Restaurant_p",
           image_url: "https://lh3.googleusercontent.com/uo6AQPFQcMWrNV7WlQaXk94CMbTXrHCv7PYFt-bvJx7xJo1ybTdKGAq_rCdOhw4dbs9G9nR5kZxg4CU6dmXTilxrbkM=w512",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['pickup'],
           menueDetail: [
             {
                 title: "Dum aloo (potatoes in a thick nut gravy)",
                 description: "This particular recipe with new potatoes comes from Asma Khan, chef-patron of Darjeeling Express. Serve with fried bread such as puris.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Aloo tikki chaat",
                 description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Maharashtrian amti dahl",
                 description: "Olive’s Indian cooking expert, Maunika Gowardhan, shares her recipe for a classic sweet and sour plant-based dahl from Maharashtra in Western India.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Shahi paneer",
                 description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Saag Aloo",
                 description: "Combining potatoes with vibrant spices, this dish always goes down a treat thanks to its dose of comfort.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Vegetarian brinjal pickle",
                 description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice. A slight sweet hit makes it a great addition to any curry.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Chana masala",
                 description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Mutter paneer",
                 description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Spring onion bhajis with mint and coriander chutney",
                 description: "Homemade mint and coriander chutney is the perfect condiment to eat with these crispy spring onion bhajis.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Sweet potato tikki",
                 description: "Traditionally cooked in Indian households as a snack, these potato cakes are packed with warming spice and served with a fresh, crunchy kachumber salad. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
             },{
                 title: "Bombay samosas",
                 description: "Lighter version of the classic samosa, ideal for healthy dinner party snacks.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Indian sweetcorn and spinach shorba",
                 description: "A Mughlai addition to Indian cuisine, this healthy but hearty soup is a classic in most homes and restaurants across the country.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
             }
         ];
       },
       {
           name:"Beachside Bar_p",
           image_url: "https://static.toiimg.com/thumb/51076300.cms?resizemode=75&width=1200&height=900",
           catagories: ["Cafe","Bar"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['pickup'],
           menueDetail: [
             {
                 title: "Dum aloo (potatoes in a thick nut gravy)",
                 description: "This particular recipe with new potatoes comes from Asma Khan, chef-patron of Darjeeling Express. Serve with fried bread such as puris.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Aloo tikki chaat",
                 description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Maharashtrian amti dahl",
                 description: "Olive’s Indian cooking expert, Maunika Gowardhan, shares her recipe for a classic sweet and sour plant-based dahl from Maharashtra in Western India.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Shahi paneer",
                 description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Saag Aloo",
                 description: "Combining potatoes with vibrant spices, this dish always goes down a treat thanks to its dose of comfort.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Vegetarian brinjal pickle",
                 description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice. A slight sweet hit makes it a great addition to any curry.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Chana masala",
                 description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Mutter paneer",
                 description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Spring onion bhajis with mint and coriander chutney",
                 description: "Homemade mint and coriander chutney is the perfect condiment to eat with these crispy spring onion bhajis.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Sweet potato tikki",
                 description: "Traditionally cooked in Indian households as a snack, these potato cakes are packed with warming spice and served with a fresh, crunchy kachumber salad. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
             },{
                 title: "Bombay samosas",
                 description: "Lighter version of the classic samosa, ideal for healthy dinner party snacks.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Indian sweetcorn and spinach shorba",
                 description: "A Mughlai addition to Indian cuisine, this healthy but hearty soup is a classic in most homes and restaurants across the country.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
             }
         ];
       },
       {
           name:"Sagar Ratna_p",
           image_url: "https://b.zmtcdn.com/data/pictures/9/2400009/33d6b7973c6645f001a1e35390f5ea26.jpg",
           catagories: ["Cafe"],
           price:"$50",
           reviews: 1244,
           rating:4.5,
           transactions: ['pickup'],
           menueDetail: [
             {
                 title: "Dum aloo (potatoes in a thick nut gravy)",
                 description: "This particular recipe with new potatoes comes from Asma Khan, chef-patron of Darjeeling Express. Serve with fried bread such as puris.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Aloo tikki chaat",
                 description: "Dishoom-inspired dish made of spiced potato patties and crispy chickpeas.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/Dum-Aloo-e163632.jpg?quality=90&resize=768%2C574"
             },{
                 title: "Maharashtrian amti dahl",
                 description: "Olive’s Indian cooking expert, Maunika Gowardhan, shares her recipe for a classic sweet and sour plant-based dahl from Maharashtra in Western India.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2020/09/2020-09-04-OLI_10201699r_preview-7234345.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Shahi paneer",
                 description: "This vibrant Indian-style dish is an easy veggie curry recipe that’s also gluten-free. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/04/paneer_charlie-richards-c2db26b.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Saag Aloo",
                 description: "Combining potatoes with vibrant spices, this dish always goes down a treat thanks to its dose of comfort.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2021/02/Olive_March_Seasonal_22.1.21_SaagAloo-062-6274cdb.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Vegetarian brinjal pickle",
                 description: "Try this classic Indian condiment made with aubergine and packed with plenty of spice. A slight sweet hit makes it a great addition to any curry.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/09/Goan-Brinjal-pickle-eb54de3.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Chana masala",
                 description: "Packed with plenty of spice, this plant-based chickpea curry has less than 200 calories.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/04/OLI-EasterIssue2019-Everyday_ChannaMasala_31526-bc1e5ad.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Mutter paneer",
                 description: "The texture of fresh peas stands up well against the paneer, but frozen is fine too.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2015/05/8744.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Spring onion bhajis with mint and coriander chutney",
                 description: "Homemade mint and coriander chutney is the perfect condiment to eat with these crispy spring onion bhajis.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2018/05/Spring_Onion_Bahjis-ff1f246.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Sweet potato tikki",
                 description: "Traditionally cooked in Indian households as a snack, these potato cakes are packed with warming spice and served with a fresh, crunchy kachumber salad. ",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/02/sweet-potato-cakes.jpg?webp=true&quality=90&crop=20px%2C1777px%2C5380px%2C3584px&resize=620%2C413"
             },{
                 title: "Bombay samosas",
                 description: "Lighter version of the classic samosa, ideal for healthy dinner party snacks.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2019/01/2011-05-03-olive_031-a4455f6.jpg?webp=true&quality=90&resize=620%2C413"
             },{
                 title: "Indian sweetcorn and spinach shorba",
                 description: "A Mughlai addition to Indian cuisine, this healthy but hearty soup is a classic in most homes and restaurants across the country.",
                 price: "",
                 image: "https://images.immediate.co.uk/production/volatile/sites/2/2017/03/sweetcorn-spinach-shorba.jpg?webp=true&quality=90&crop=16px%2C1443px%2C5382px%2C3585px&resize=620%2C413"
             }
         ];
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


