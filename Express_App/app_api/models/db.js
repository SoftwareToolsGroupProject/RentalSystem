const mongoose = require('mongoose');
const dbURI ='REMOVED FROM COMMIT FOR SECURITY';


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