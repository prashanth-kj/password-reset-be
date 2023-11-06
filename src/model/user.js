import mongoose from './index.js'

const validateEmail = (e)=>{
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(e); 
}

const userSchema=mongoose.Schema({
      name:{
         type:String,
         required:[true, "username is required"]
      },
      email:{
          type:String,
          required:[true, "email is required"],
          validate:validateEmail
      },
      password:{
          type:String,
          required:[true, "password is required"]
      },
      randomString:{
            type:String
      }
});

const userModel = mongoose.model('users',userSchema);

export default userModel
