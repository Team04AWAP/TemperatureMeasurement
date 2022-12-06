import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup=(props)=>{

    let history = useNavigate(); // Use for Navigate on Pervious
    const [data, setData]=useState({
        //first_name:"",
        //last_name:"",
        email:"",
        Password:""
    })

    const handleChange=(e)=>{
        setData({...data, [e.target.name]: e.target.value });

        //console.log(data)


    }

const submitForm=(e)=> {
    e.preventDefault();
    const sendData = {
        //first_name:data.first_name,
       // last_name:data.last_name,
        email:data.email,
        Password:data.Password

    }

    //console.log(sendData);

    axios.post("http://localhost:3001/signUp", sendData)
    .then((result)=>{
        if (result.data.Status == 'Invalid') {
        alert('Invalid User');
        }
        else {
        history(`/dashboard`);
        }
    })  
}


    return(
        <div className="main-box">
            <form onSubmit={submitForm}>
        <div className= "row">
        <div className="col-md-12 text-center"><h1>Signup</h1>
        </div>
         <div className="row">
            <div className="col-md-6">First Name</div>
            <div className="col-md-6">
                <input type="text" name="first_name" className="form-control" 
                onChange={handleChange} value={data.first_name}
                />
                
            </div>
</div>

<div className="row">
            <div className="col-md-6">Last Name</div>
            <div className="col-md-6">
                <input type="text" name="last_name"  className="form-control"
                onChange={handleChange} value={data.last_name}/>
            </div>
           </div>

<div className="row">
            <div className="col-md-6">Email</div>
            <div className="col-md-6">
                <input type="text" name="email" className="form-control"
                onChange={handleChange} value={data.email}
                />
            </div>
           </div>
           
<div className="row">
            <div className="col-md-6">Password</div>
            <div className="col-md-6">
                <input type="Password" name="Password" className="form-control"
                onChange={handleChange} value={data.Password}
                />
            </div>
          </div>

<div className="row">
            <div className="col-md-12 text-cener">
          
                <input type="submit" name="submit" value="Signup" className="btn btn-success"/>
            </div>
            </div>
            </div>
           </form>

        </div>
        
    

    )
}
export default Signup;