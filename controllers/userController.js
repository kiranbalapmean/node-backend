import { getAllUsersFromDb,createUser,updateUser,deleteUser} from '../models/userModel.js';
import bcrypt from 'bcrypt';

export const getAllUsers = async (req, res) => {
  try {
    const users = await getAllUsersFromDb();
    res.status(200).json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ error: 'Failed to fetch users' });
  }
};

export const addUser = async (req, res) => {
  console.log(req.body);
    const { name, email ,mobile, password, gender } = req.body;
    const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log(hashedPassword);
    if (!name || !email ) {
      return res.status(400).json({ error: 'Name and email are required.' });
    }
  
    try {
      console.log("logging");
      // Hash the password before saving
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);
      console.log(hashedPassword);
      const result = await createUser({ name, email,mobile,password: hashedPassword,gender });
      res.status(201).json({
        message: 'User created successfully!',
        userId: result.insertId,
      });
    } catch (err) {
      res.status(500).json({ error: 'Failed to create user', details: err });
    }
  };


  export const updateUserData =  (req,res) => {

    const { id } = req.params;
    const { name,email } = req.body;
    if (!name || !email) {
        return res.status(400).json({ error: 'Name and email are required.' });
    }
    try {
        const result = updateUser({ id, name, email });
        res.status(201).json({
            message:"User updated successfully!",
            userId : id
        });
    } catch(err){
        res.status(500).json({ error: 'Failed to update user', details: err });
    }
  }

  export const deleteUserData =  (req,res) => {

    const { id } = req.params;
    try {
        const result = deleteUser({ id });
        res.status(201).json({
            message:"User deleted successfully!",
            userId : id
        });
    } catch(err){
        res.status(500).json({ error: 'Failed to delete user', details: err });
    }
  }