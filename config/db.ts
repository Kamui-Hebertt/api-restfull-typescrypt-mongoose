import mongoose from "mongoose";
import config from "config";



const connect = async () => {
  const dbUri = config.get<string>("dbUri");

  try {
     await mongoose.connect(dbUri);
     console.log("database connected");


  }
  catch(e){
    console.log("connetion failed");
    console.log(`Error: ${e}`);
  };

};

export default connect;