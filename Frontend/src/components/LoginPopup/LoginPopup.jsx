import React, { useContext, useState } from 'react';
import './LoginPopup.css';
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'
import axios from "axios"

const LoginPopup = ({setshowLogin}) => {

  const {url,setToken} = useContext(StoreContext);

    const [currentState,setcurrentState] = useState("Login")     
    const [data, setData] = useState({
         name: "",
         email: "",
         password: ""
    })

    const onchangeHandler = (Event) =>{
       const name = Event.target.name;
       const value = Event.target.value;
       setData(data=>({...data,[name]:value}))
    }

    const onLogin = async(Event)=>{
        Event.preventDefault()
        let newUrl = url;
        if (currentState==="Login") {
           newUrl += "/api/user/login"
        }
        else{
             newUrl += "/api/user/register"
        }

        const response = await axios.post(newUrl,data);
        if (response.data.success) {
           setToken(response.data.token);
           localStorage.setItem("token", response.data.token);
           setshowLogin(false);
        }
        else{
          alert(response.data.message);
        }
    }



  return (
    <div className='login-popup'>
          <form onSubmit={onLogin} className="login-popup-container">
          <div className="login-popup-tittle">
               <h2>{currentState}</h2>
               <img onClick={()=>setshowLogin(false)} src={assets.cross_icon} alt="" />
           </div>
           <div className="login-popup-input">
            {currentState==="Login"?<></>:<input name='name' onChange={onchangeHandler} value={data.name} type="text" placeholder="your Name" required />}                 
                  <input name='email' onChange={onchangeHandler} value={data.email} type="email" placeholder="your email" required />
                  <input name='password' onChange={onchangeHandler} value={data.password} type="password" placeholder="your Password" required />
           </div>
           <button type='submit'>{currentState==="Sign Up"?"create account":"Login"}</button> 
           <div className="login-popup-condition">
                <input type="checkbox" required/>
                <p>By continuing I agree to the terms of use & Privacy Policy</p>
           </div>
           {currentState==="Login"
             ?<p>Create a new account? <span onClick={()=>setcurrentState("Sign Up")}>Click here</span></p>
             :<p>Already have a account? <span onClick={()=>setcurrentState("Login")}>Login here</span></p>
           }          
          
          </form>          
    </div>
  )
}

export default LoginPopup;