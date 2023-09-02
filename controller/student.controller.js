const { v4: uuidv4 } = require('uuid'); 
const db = require('../config/index');
const bcrypt = require('bcrypt');
const Student = db.Student;


exports.register = (req,res) => {
  const student = {
      StudentId : req.body.StudentId,
      hash_password: bcrypt.hashSync(req.body.password, 10),
    };
    
    Student.create(student)
      .then((student) => {
        res.status(200).send(student);
      })
      .catch((error) => {
        console.error('Error:', error);
        res.status(500).send({
          message: 'An error occurred while creating the student.'})
       });
};
exports.enter = async (req, res) => {
  try {
    const Student = req.body.StudentId;
    const password = req.body.password;

    if (!Student || !password) {
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
