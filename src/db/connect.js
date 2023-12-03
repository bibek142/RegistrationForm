const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://cdharybibek:Z2WkBBZ7DC8xCYsc@bookstore.ejhy1ye.mongodb.net/bookstore?retryWrites=true&w=majority',{
    // useNewUrlParser:true,
    // useUnifiedTopology:true
    // useCreateIndex:true
}).then(()=>{
    console.log("MongoDB Connected Successfully");
}).catch((e)=>{
    console.log("MongoDB Connection Failed");
})