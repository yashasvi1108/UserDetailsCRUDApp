import mongoose from 'mongoose';


const Connection = async(username,password) =>{
    const URL=`mongodb+srv://${username}:${password}@PROJECT 0.wxktqoa.mongodb.net/?retryWrites=true&w=majority`;
    try{
 await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
 console.log('Database Connected successfully');
    }
    catch(error){
  console.log("Error while connecting the database",error);
    }
}
export default Connection;