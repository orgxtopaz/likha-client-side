const mongoose =require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({


    dateLanded:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },

    IPAddress:{
        type:String,
        required:true,
        trim:true  // removing the first space in value input 

    },

    
   



},{timestamps:true})// date  and time of the data being passed

      
   


const userVisit= mongoose.model('userVisit',userSchema);

module.exports = userVisit;