let users = require("../models/users.model");

const signUp =async (req, res) => {
    
///////////--------------ATTENDANCE TIME IN-----------------\\\\\\\\\\\\\\\\\\\\\

    const email = req.body.email;
    const fullname = req.body.fullname;
    const work = req.body.work;


    //CHECKING IF USER ALREADY TIME IN
    users.find({

        email: { $eq: email }
    
  
    })
  
      /// VALIDATING IF USER EXIST
      .then(findUsers => {
  
        if (findUsers.length > 0) {
          console.log(findUsers)
          
          res.status(400).json({ message: "Email Already Exist!" })
  
        } else {
          ///CREATE DATA ON DATABASE
          const newUser = new users({
  
            email,
            fullname,
            work
        
           
  
          }); // Instantiate the User in user.model
  
  
          newUser.save()
            .then((findUsers) => res.status(200).json({ message: "Successfully Sign Up!" })) // IF TRUE CHECK
        }
  
      })
  
      .catch((err) => res.status(400).json("Errorsss: " + err)); // CATCH THE ERROR
  


  }




module.exports = signUp;

   