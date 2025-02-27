const mongoose = require("mongoose")

new userSchema = new mongooseSchema({
    UserName:{ type : String,
             required : true,
             unique : true
             },
    email: {type : String,
        require : true,
        unique : true
    },
    age : { type : number , 
          require : true ,
          unique : false 
     },
    password :{
           type : String ,
           require : true ,
           unique : false
    }
});
module.export = mongoose.model(user , userSchema);
