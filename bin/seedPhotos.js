const photoModel = require("../models/Photo");
const mongoose = require("mongoose");
require("dotenv").config();
require("../config/mongo");

 const photos = [
    {
      src: "images/Photos/Brésil/Brésil1.jpg",
      width: 4,
      height: 3,
      country : "Brésil"
    },
    {
        src: "images/Photos/Brésil/Brésil2.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil3.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil4.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil5.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil6.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil7.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil8.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil9.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil10.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil11.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil12.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil13.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil14.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil15.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil16.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil17.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil18.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil19.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil20.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil21.jpg",
        width: 3,
        height: 4,
        country : "Brésil"
      },
      {
        src: "images/Photos/Brésil/Brésil22.jpg",
        width: 4,
        height: 3,
        country : "Brésil"
      },
      {
        src: "images/Photos/Copenhague/Copenhague1.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague2.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague3.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague4.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague5.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague6.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague7.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague8.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague9.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague10.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague11.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague12.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague13.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague14.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague15.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague16.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague17.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague18.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague19.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague20.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague21.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague22.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague23.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague24.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague25.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague26.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague27.jpg",
        width: 3,
        height: 4,
        country : "Danemark"
      },
      {
        src: "images/Photos/Copenhague/Copenhague28.jpg",
        width: 4,
        height: 3,
        country : "Danemark"
      },
      {
        src: "images/Photos/Niger/Niger1.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger2.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger3.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger4.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger5.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger6.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger7.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger8.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger9.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger10.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger11.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger12.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger13.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger14.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger15.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger16.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger17.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger18.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger19.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger20.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger21.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger22.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger23.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger24.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger25.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger26.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger27.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger28.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger29.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger30.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger31.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger32.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger33.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger34.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger35.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger36.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Niger/Niger37.jpg",
        width: 4,
        height: 3,
        country : "Niger"
      },
      {
        src: "images/Photos/Oman/Oman1.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman2.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman3.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman4.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman5.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman6.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman7.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman8.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman9.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman11.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman12.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman13.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman14.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman15.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman16.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman17.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman18.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman19.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman20.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman21.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman22.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      },
      {
        src: "images/Photos/Oman/Oman23.jpg",
        width: 4,
        height: 3,
        country : "Oman"
      }
     
  ];

  function seedDb(data) {
      console.log("ici")
    photoModel
      .insertMany(data)
      .then(photos => console.log(photos))
      .catch(err => console.log(err));
  }
  
  seedDb(photos);