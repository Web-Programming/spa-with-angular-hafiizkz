let mongoose = require("mongoose");
let dbURI = "mongodb://localhost:27017/angularSI5C";

mongoose.connect(dbURI,{
    //useNewURLParser: true
});

mongoose.connection.on("connected", () => {
    console.log("Connected To MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("Connection Error: " + error);
});

mongoose.connection.on("disconected", () => {
    console.log("Disconnected From MongoDB");
});

