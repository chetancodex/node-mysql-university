const { v4: uuidv4 } = require('uuid'); 
const db = require('../config/index');
const bcrypt = require('bcrypt');
const Dean = db.Dean;




exports.register = (req,res) => {
  const dean = {
      DeanId : req.body.DeanId,
      hash_password: bcrypt.hashSync(req.body.password, 10),
    };
    
    Dean.create(dean)
      .then((dean) => {
        res.status(200).send(dean);
      })
      .catch((error) => {
        console.error('Error:', error);
        res.status(500).send({
          message: 'An error occurred while creating the dean.'})
       });
};
exports.enter = async (req, res) => {
  try {
    const DeanId = req.body.DeanId;
    const password = req.body.password;

    if (!DeanId || !password) {
      res.status(401).json({ message: "Invalid Id or Password" });
      return; 
    }

    const token = uuidv4();
  
    res.header('auth-token', token).json({ message: 'Token generated and sent in headers' });
    console.log({ token });
  } catch (error) {
    console.error(error);
    res.status(500).send({ message: 'Server Error' });
  }
};
