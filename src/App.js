import './App.css';
import React, { useState, useEffect } from 'react';
import Login from './page/login/login';
import Home from './page/home';

const ipcRenderer = window.require("electron").ipcRenderer;

function App() {
  const value = 2;

  const [currentPage, setCurrentPage] = useState('Login');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'Login':
        return <Login navigateTo={navigateTo} />;
      case 'Home':
        return <Home navigateTo={navigateTo} />;
      default:
        return null;
    }
  };

  return <div id='principal'>
   
    {renderPage()}
    </div>;
}

export default App;
