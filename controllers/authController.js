import { getAllUsersFromDb,getUserByEmail,updateUser,deleteUser} from '../models/userModel.js';
import bcrypt from 'bcrypt';


export const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
      console.log("User login attempt...");
        
      // Check if user exists
      const user = await getUserByEmail(email);
      console.log(user);
      if (!user) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
  
      // Compare provided password with stored hashed password
      const isMatch = await bcrypt.compare(password, user.password);
      console.log(isMatch);
      if (!isMatch) {
        return res.status(400).json({ message: "Invalid email or password" });
      }
      // Generate JWT Token
      // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      res.json({
        message: "Login successful",
        //token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
          mobile: user.mobile,
        },
      });
    } catch (err) {
      res.status(500).json({ error: "Server error", details: err });
    }
  };
