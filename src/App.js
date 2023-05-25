import './App.css';
import React, { useState } from 'react';
import Login from './page/login/login';

function App() {
  const [currentPage, setCurrentPage] = useState('login');

  const navigateTo = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'login':
        return <Login navigateTo={navigateTo} />;
      default:
        return null;
    }
  };

  return <div id='principal'>{renderPage()}</div>;
}

export default App;
