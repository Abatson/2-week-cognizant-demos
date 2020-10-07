import React from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CookieClicker } from './components/CookieClicker/CookieClicker';

function App() {
  return (
    <div className="App">
      <h1>Welcome to our Crash Course</h1>
      <CookieClicker/>
      <ToastContainer/>
    </div>
  );
}

export default App;
