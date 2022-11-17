const mongoose = require('mongoose');
const dotenv = require('dotenv'); 
dotenv.config({ path: '../.env' })
const dbURI = process.env.DBURI;


try {
   
    mongoose.connect(
        dbURI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected" + dbURI)
        );
    }
     catch (e) {
      console.log("could not connect");
    }
    require('./members');