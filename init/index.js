if(process.env.NODE_ENV != "production"){
    require("dotenv").config({ path: '../.env' });
}
const mongoose = require("mongoose");
const initData= require("./data");
const Listing= require("../models/listing");
const dbUrl= process.env.ATLASDB_URL;
main()
    .then(()=>{
        console.log("Connected to DB");
    })
    .catch((err)=>{
        console.log(err);
    })

async function main(){
    await mongoose.connect(dbUrl);
}

const initDB= async ()=>{
    await Listing.deleteMany({});
    initData.data= initData.data.map((obj)=>({
        ...obj, owner: "6902e9eaf2b6f3d46aeb42bd",
    }));
    await Listing.insertMany(initData.data);
    console.log("data was initialised");
    
}

initDB();