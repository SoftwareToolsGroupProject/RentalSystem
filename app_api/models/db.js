const mongoose = require('mongoose');
require('dotenv').config()
const dbURI = process.env.dbURI;


try {
   
    mongoose.connect(
        dbURI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected" + " " + dbURI)
        );
    }
     catch (e) {
      console.log("could not connect");
    }
    require('./members');
    require('./movies');
