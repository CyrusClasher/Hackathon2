const mongoose = require("mongoose");

//creating a database
mongoose.connect("mongodb://127.0.0.1:27017/CyrusDB",{
    // useCreateIndex:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(() => {
    console.log("Connection Successful");
}).catch((error) => {
    console.log(error);
})
var db=mongoose.connection;