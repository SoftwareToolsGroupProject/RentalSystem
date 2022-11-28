const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
    MemberID: { type: "String", required: true },
    Forename: { type: "String", required: true },
    Lastname: { type: "String", required: true },
    Password: { type: "String", required: true },
    Eircode: { type: "String", required: true },
    Phone: { type: "String", required: true },
    Email: { type: "String", required: true },
    DOB: { type: "String", required: true },
    CardDetails: { type: "String", required: true },
    ExpireDate: { type: "String", required: true },
    CCV: { type: "String", required: true }
});

mongoose.model('Member', memberSchema);
