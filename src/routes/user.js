import express from 'express';
import userController from '../controller/user.js'

  const router =express.Router();
  
  router.get('/getuser',userController.getuser)
  router.post('/create',userController.createUser)
  router.post('/forget-password',userController.forgetPassword)
  router.post('/reset-password/:randomString/:expirationTimestamp',userController.resetPassword)
  router.post('/login',userController.login)

export default router