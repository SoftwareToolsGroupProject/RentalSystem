const mongoose = require('mongoose');
const dbURI = process.env.DBURI;


try {
   
    mongoose.connect(
        dbURI,
        { useNewUrlParser: true, useUnifiedTopology: true },
        () => console.log(" Mongoose is connected")
        );
    }
     catch (e) {
      console.log("could not connect");
    }
    require('./members');