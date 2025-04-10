import db from '../config/db.js';

export const getAllUsersFromDb = () => {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
};

export const createUser = (userData) => {
    console.log("after log");
    console.log(userData);
    return new Promise((resolve, reject) => {
        const query = 'INSERT INTO users (name, email_id,mobile,password,gender) VALUES (?, ?, ?, ?, ?)';
         // Print the actual query with data
         const formattedQuery = db.format(query, [userData.name, userData.email, userData.mobile,userData.password,userData.gender]);
         console.log("Executing Query: ", formattedQuery);
        db.query(query, [userData.name, userData.email,userData.mobile,userData.password,userData.gender], (err, results) => {
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
        });
    });
}

export const updateUser = (userData) => {
    return new Promise((resolve, reject) => {
        const query = 'UPDATE users SET name = ?, email_id = ? WHERE id = ?';
        db.query(query, [userData.name, userData.email, userData.id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                if (results.affectedRows === 0) {
                    // No rows were updated, likely because the user ID doesn't exist.
                    reject(new Error('No user found with the specified ID.'));
                } else {
                    resolve(results);
                }
            }
        });
    });
};

export const deleteUser = (userData) => {
    return new Promise((resolve, reject) => {
        const query = 'DELETE FROM users WHERE id = ?';
        db.query(query, [userData.id], (err, results) => {
            if (err) {
                reject(err);
            } else {
                if (results.affectedRows === 0) {
                    // No rows were updated, likely because the user ID doesn't exist.
                    reject(new Error('No user found with the specified ID.'));
                } else {
                    resolve(results);
                }
            }
        });
    });
};

export const getUserByEmail = async (email) => {
    return new Promise((resolve, reject) => {
      const sqlQuery = 'SELECT * FROM users WHERE email_id = ?';
      
      console.log('Executing SQL:', sqlQuery.replace('?', `'${email}'`)); // Print SQL query

      db.query(sqlQuery, [email], (err, result) => {
        if (err) {
          console.error('SQL Error:', err.sqlMessage || err); // Log the exact SQL error message
          reject({ message: 'Database query failed', error: err });
        } else {
          if (result.length === 0) {
            console.warn(`No user found with email: ${email}`);
            resolve(null); // Return null if no user found
          } else {
            resolve(result[0]); // Return user details
          }
        }
      });
    });
  };