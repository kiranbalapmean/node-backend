import express from 'express';
import { getAllUsers,addUser,updateUserData,deleteUserData } from '../controllers/userController.js';

const router = express.Router();

// Define route for fetching all users
router.get('/users', getAllUsers);

router.post('/users',addUser);

router.put('/users/:id', updateUserData);

router.delete('/users/:id',deleteUserData);

export default router;
