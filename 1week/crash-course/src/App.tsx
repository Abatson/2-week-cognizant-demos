import React, { useState } from 'react';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { CookieClicker } from './components/CookieClicker/CookieClicker';
import { CookiePersonalization } from './components/CookiePersonalization/CookiePersonalization';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavBarComponent } from './components/NavBar/NavBar';

function App() {
  const [cookiePState, changeCookiePState] = useState({cookieName:'', storeName:'', userName:''})

  return (
    <div className="App">
      <Router>
        <NavBarComponent/>
        <Switch>
          <Route exact path='/' render={()=><CookieClicker cookiePState={cookiePState}/>} />
          <Route path='/personalization' render={(props)=><CookiePersonalization {...props} cookiePState={cookiePState} changeCookiePState={changeCookiePState}/>} />
        </Switch>
        <ToastContainer />
      </Router>
    </div>
  );
}

export default App;
