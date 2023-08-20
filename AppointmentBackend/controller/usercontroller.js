const user = require('../models/user');

exports.postUserDetail = (req, res, next) => {
  const name = req.body.Name;
  const email = req.body.Email;
  user.create({
      name: name,
      email: email
    })
    .then(result => {
      console.log('User Create Successfully');
      res.status(201).json({ userData: result});
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ Error: 'An error occurred' })
    })
  };

  exports.getUserDetail = (req, res, next) => {
    user.findAll()
    .then(result => {
      console.log('Get All User Data Successfully')
        res.status(200).json({getAlluserData: result})
    })
    .catch(err => {
        console.log(err);
        res.status(500).json({ Error: 'An error occurred' });
    });
}

exports.deleteUserDetail = (req,res,next) => {

  const userid = req.params.id;
  console.log(userid);
  user.findByPk(userid)
  .then(result => {
    result.destroy()
    .then(() => {
      console.log('Delete Successfully')
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({Error: 'An error occurred'});
    })
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({Error: 'An error occurred'});
  })
}