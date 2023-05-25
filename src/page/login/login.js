import React from "react";
import './login.css';

const login = () => {

    return (
        <div className="TelaLogin">

            <div className="LogoLogin">
                <img src="./imagens/logo.png" alt="Login"></img>
            </div>
            <div className="Formularios">
                <div >
                    <label className="menulogin" name='user'>User:</label>
                    <input className="menulogin" type="text" name='user'></input>
                </div>
                <div >
                    <label className="menulogin" name='senha'>Password:</label>
                    <input className="menulogin" name='senha' type="password"></input>
                </div>
            </div>
        </div>
    );
};

export default login;