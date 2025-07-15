import express from 'express'
import {registerUser,loginUser, userCredits} from '../controllers/userController.js'
import userAuth from '../middlewares/auth.js'

const useRouter = express.Router()

useRouter.post('/register',registerUser)
useRouter.post('/login',loginUser)
useRouter.get('/credits',userAuth,userCredits)


export default useRouter

//http:localhost:4000/api/user/register
//http:localhost:4000/api/user/login