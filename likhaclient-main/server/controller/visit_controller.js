let usersVisited = require("../models/users.visit.model");

const Visit =async (req, res) => {
    
///////////--------------ATTENDANCE TIME IN-----------------\\\\\\\\\\\\\\\\\\\\\

const IPAddress = req.body.IPAddress;
const dateLanded = req.body.date
  
       
          ///CREATE DATA ON DATABASE
          const newVisit = new usersVisited({
  
            dateLanded,
            IPAddress
        
           
  
          }); // Instantiate the User in user.model
  
  
          newVisit.save()
            .then(() => res.status(200).json({ message: "someone visited the site!" })) // IF TRUE CHECK
      

             .catch((err) => res.status(400).json("Errorsss: " + err)); // CATCH THE ERROR
  


  }




module.exports = Visit;

   