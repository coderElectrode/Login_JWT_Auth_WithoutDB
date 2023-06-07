import React, { useState } from 'react'
import user from '../Img/user.png'
import axios from 'axios'
import { createSearchParams, useNavigate } from "react-router-dom";
import showUser from './showUser';
import Axios from 'axios';


function Login() {
    const navigate = useNavigate();
    var [useflag, setflag] = useState(true);
    var [name, setName]=useState('');
    var [username,setuName]=useState('');
    var [password,setPass]=useState('');
    var [token,getToken]= useState('');

    const signup_page=()=>{
        setflag(false);
    }
    const cancel_reg=()=>{
        setflag(true);
        setName('');
        setuName();
        setPass();
    }

    const signin= async ()=>{
        
        var data={name,username,password};
       const res= await fetch("http://localhost:9080/auth/signin",{ 
            method: 'POST',
            headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
            
     body: JSON.stringify(data)})

       
        const data2=await res.json();
        console.log("navigating",data2)
     
        if(data2.status=='Success'){ 
            console.log("Data 2",data2.token)
            getToken(data2.token);
            showUser(data2);
            
    }

    }

    const showUser=(data2)=>{
        navigate('/user', { state: { id:data2.token } });

    };

   const signUp=async()=>{
    var data={name,username,password};
    await fetch("http://localhost:9080/auth/signup",{
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json'},
    }).then((res)=>{
        console.log(res.json());
        setName('');
        setuName();
        setPass();

    }).then(()=>{
        setflag(true);
    })              
   }
    

    return (

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ display: 'flex', height: '500px', width: '300px', justifyContent: 'center', alignItems: 'center', }}>
                <img src={user} alt="" style={{ display: 'inline-block', height: '20rem', width: '20rem' }} />

            </div>

            {
                useflag && useflag ? (

                //------------------------------------------------SignIN---------------------------------------------
                    <div style={{ float: 'right', height: '500px', width: '400px', lineHeight: '1rem', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1>login</h1>
                        <input type="text" name="_username" value={username} id="_username"  onChange={(e)=>setuName(e.target.value)} placeholder='Username ' />
                        <br />

                        <input type="password" name="_password" value={password} id="_password"  onChange={(e)=>setPass(e.target.value)} placeholder='Password'  />
                        <br />
                        <button onClick={signin}>Login</button>
                        <br />

                        <button onClick={signup_page}> Register new user</button>
                    </div>
                ) : (
                    //-----------------------------------------New USer Creation-------------------------------
                    <div style={{ float: 'right', height: '500px', width: '400px', lineHeight: '1rem', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center' }}>
                        <h1>Create User</h1>
                        <br />
                        <br />
                        <input type="text" name="" value={name}  onChange={(e)=>setName(e.target.value)} id="" placeholder='Name'/>
                        <br />
                        <input type="text" name="" value={username}  onChange={(e)=>setuName(e.target.value)} id="" placeholder='User Name'/><br />
                        <input type="password" value={password}  onChange={(e)=>setPass(e.target.value)}  name="" id="" placeholder='Password'/>
                        <br />
                        <div>
                        <button onClick={signUp} > Sign Up</button>
                        <button onClick={cancel_reg}> Cancle</button>
                        </div>
                    </div>
                    
                )

            }



        </div>
    )
}

export default Login
