import bcrypt from 'bcryptjs';

const hashPassword=async(password)=>{
      let salt=await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
      let hash=await bcrypt.hash(password,salt)
      return hash
}

const hashCompare =async(password,hash)=>{
      return await bcrypt.compare(password,hash)
}


export default {
      hashPassword,
      hashCompare
}



// import bcrypt from 'bcryptjs';

// const hashPassword = async (password) => {
//   if (typeof password === 'string' && password.trim().length > 0) {
//     try {
//       let salt = await bcrypt.genSalt(Number(process.env.SALT_ROUNDS))
//       let hash = await bcrypt.hash(password, salt)
//       return hash;
//     } catch (error) {
//       throw error;
//     }
//   } else {
//     throw new Error('Invalid password');
//   }
// }

// const hashCompare = async (password, hash) => {
//   if (typeof password === 'string' && password.trim().length > 0) {
//     return await bcrypt.compare(password, hash);
//   } else {
//     return false; // Password is invalid, return false to indicate the comparison failed
//   }
// }

// export default {
//   hashPassword,
//   hashCompare
// }
