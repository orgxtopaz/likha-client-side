import React from 'react';
import './css/style.css';


import { useState,useEffect  } from "react"; //HERE we import useState Hook so we can add state to our functional components.

import Axios from "axios"; //allows us to make GET and POST requests from the browser.


const Demo=()=>
{


  const [signUp, setSignUp] = useState(false);
  const [preloader, setPreloader] = useState(true);
  const [submit, setSubmit] = useState(true);
  const [fullname, setFullname] = useState(true);
  const [email, setEmail] = useState(true);
  const [work, setWork] = useState(true);


  const getData = async () => {
    const res = await Axios.get('https://geolocation-db.com/json/')
    console.log(res.data);

    const DateandTimeSplit = new Date().toLocaleString().split(",");
    // const DateandTimeIn = new Date().toLocaleString();

    const date = DateandTimeSplit[0]

 
    Axios.post("https://likha-server.herokuapp.com/visit",
      
    {
    
      IPAddress: res.data.IPv4,
      date:  new Date().toLocaleString()
      ,

   
     
    })
      .then((res) => {  

        if(res.data.message){
          console.log("someone visited the site!")
          


        }

     
     

      }) 
      .catch ((err) => {
        console.log("Server Error : Visiting")
       

 
     
      })
  }


  const isLoaded = [true];
  useEffect(() => {

    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });

    getData()

  

   
  }, isLoaded);




  function register(e){

      setSignUp(true)
      setPreloader(false)

      e.preventDefault()


   





       Axios.post("https://likha-server.herokuapp.com/signUp",
      
      {
      
        fullname: fullname,
        email: email,
        work: work,
     
       
      })
        .then((res) => {  

          if(res.data.message){
            alert("Signed up successfully")
            setPreloader(true)

            setSignUp(true)
            setSubmit(false)


          }

       
       

        }) 
        .catch ((err) => {
          setPreloader(true)
          alert(err.response.data.message)
          setSignUp(false)
          setSubmit(true)
         

   
       
        })
  }

    
    return (
<div>



<h1 style={{opacity:"0.8",color:"black"}}>Filipino creators deserve to be appreciated and supported.<br></br>
We are on a mission to lift up the creative community together.</h1>


<div className="page-content">

<div className="form-v4-content">

  <div className="form-left">
      
  <div class="row">
  <div class="col">
  
        <div class="typed-out card-title" style={{textShadow: "1px 1px rgb(0, 0, 0)",fontSize:"3em"}}>Introducing Likha</div>

        <div className='blur'>


<br></br>
<span style={{backgroundColor:"black",  fontSize:"15px",color:"white", width:"120%"	}}>    <i >  A platform for Filipino creators where you can: </i> </span><br></br>
    <br></br>

<div className="list">






<span style={{backgroundColor:"black",  fontSize:"17px",color:"#ffdd35" ,	}}>  <span style={{color:"white"}}>✓ </span> Accept tips from supporters</span><br></br><br></br>
<span style={{backgroundColor:"black",  fontSize:"17px",color:"#ffdd35" ,	}}> <span style={{color:"white"}}>✓ </span> Get funding for projects</span><br></br><br></br>
<span style={{backgroundColor:"black",  fontSize:"16px",color:"#ffdd35" ,	}}> <span style={{color:"white"}}>✓ </span>  Sell your works on your own Shop</span><br></br><br></br>
<span style={{backgroundColor:"black",  fontSize:"16px",color:"#ffdd35" ,	}}> <span style={{color:"white"}}>✓ </span>   Tips and sales go directly to you! </span><br></br><br></br>

</div>


  </div>
   
  </div>

  
  <center>
        <br></br>
        <br></br>
        <br></br>
    <p className="text-2 be">  <i>    Be appreciated. Create more. </i> </p>
    </center>
 
</div>

  
    {/* <div className="form-left-last">
      <input type="submit" name="account" className="account" defaultValue="Have An Account" />
    </div> */}
  </div>
  <form className="form-detail"  id="myform" onSubmit={register}>
    <br></br>
    <br></br>
   
      <ul className="loader" hidden={preloader}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <p>Signing up in process.</p>
    </ul>

    <div hidden={signUp}>
    <h2 style={{color:"blue"}}>Sign Up Now</h2>
  
    <div className="form-row">
      <label htmlFor="your_email">Email</label>
      <input type="email" name="your_email" id="your_email" className="input-text" placeholder='Your Email' required   onChange={(event) => {
                                  setEmail(event.target.value);
                                }}/>
    </div>
  
    <div className="form-row">
    {/* pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" */}
      <label htmlFor="your_email">Name</label>
      <input type="text" name="your_name" id="your_email" className="input-text"  placeholder='Your Name'required   onChange={(event) => {
                                  setFullname(event.target.value);
                                }} />
    </div>

    <div className="form-row">
    {/* pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" */}
      <label htmlFor="your_email">Work / Industry</label>
      <input type="text" name="your_work" id="your_email" className="input-text" placeholder='Your Work or Industry' required  onChange={(event) => {
                                  setWork(event.target.value);
                                }} />
    </div>
 
   
    <div className="form-row-last">
      <input type="submit" name="register" className="register"  defaultValue="Register" />
    </div>

    </div>


    <div className='submitNow' hidden={submit}>
        <center>
           <br></br>
           <br></br>
    <div className="row">
        <div className="col-sm-9">
          <div className="card">
            <div className="card-body">

              <h2 className="card-title" style={{color:"blue"}}>📧 🚀 <br></br>Thank you for signing up.
                Watch out for our email about the launch.
               <br></br > <br></br> Let’s lift up the Filipino creative community
                together.
</h2>

            </div>
          </div>
        </div>
      
      </div>
      </center>

    </div>

    
  </form>



</div>
</div>



</div>
       
      );










}

export default Demo;
