import React, { useState } from "react";
import './login.css';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";


const ipcRenderer = window.require("electron").ipcRenderer;

const Login = ({navigateTo}) => {
  
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [Error,setError] = useState(false);
    const [user,setUser] = useState(null)
  


  const RequestLogin = async (e) =>{
    
    // toast("Default Notification !");




    e.preventDefault();
    try{
        const response = await axios.post('http://localhost:4000/login',
        JSON.stringify({email,password}),
        {
          headers:{ 'Content-Type':'application/json'}
        }
        );
        
        toast.success("Sucesso ao realizar o login !", {
          position: toast.POSITION.BOTTOM_RIGHT
        });
  
        navigateTo('Home') 
        console.log(response.data);
        setUser(response.data);
        
      }catch(error){
        if(!error?.response){
          setError('Erro Ao acaessar o Servidor');
        }else if(error.response.status == 401 ){
          toast.error("Usuário ou senha errados !", {
            position: toast.POSITION.BOTTOM_RIGHT
          });
        }
      }
  

};

    return (
        <div className="TelaLogin">

            <div className="LogoLogin form-group">
                <img src="./imagens/logo.png" alt="Login"></img>
            </div>
            <div className="Formularios">
                <form className="form-group">
                    <label for="exampleInputEmail1">User</label>
                    <input type='email' 
                        name='email'  
                        class="form-control" 
                        required 
                        id="exampleInputEmail1"  
                        aria-describedby="emailHelp" 
                        placeholder="Enter user"
                        onChange={(e) => setEmail(e.target.value)}
                        />

                    <label for="exampleInputPassword1">Password</label>
                    <input type="password" 
                        class="form-control" 
                        id="exampleInputPassword1" 
                        placeholder="Password"
                        onChange={(e) => setPassword(e.target.value)}
                        />
                    
                    <button type="submit" onClick={(e) => RequestLogin(e)} className="Botao-login btn btn-dark">Login</button>
              
                </form>
                <p id="ErrorLogin">{Error}</p>
                <ToastContainer style={{ width:"400px"}} />
            </div>
        </div>
    );
};

export default Login;