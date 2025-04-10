// tests/bcrypt-test.js

import bcrypt from 'bcrypt';

const password = '123456';
const saltRounds = 10;

(async () => {
  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    console.log('Hashed Password:', hashedPassword);
    
    // Verify the password
    const isMatch = await bcrypt.compare(password, hashedPassword);
    console.log('Password Match:', isMatch);
  } catch (err) {
    console.error('Bcrypt Error:', err);
  }
})();
