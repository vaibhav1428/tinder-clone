import React from 'react';

import './App.css';
import Header from './components/Header';
import TinderCards from './components/TinderCards'
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import SwipButton from './components/SwipButton';
import Chats from './components/Charts';
import Charscreen from './components/Chatscreen'

function App() {
  return (
    <div className="app">
      <Router>
 <Switch>




 <Route path="/chat/:person">
   <Header backButton="/chat"  />
   <Charscreen/>
 </Route>  



 <Route path="/chat">
   <Header backButton="/"/>
  <Chats/>
 </Route>   



 <Route path="/"> 
 <Header/>
 <TinderCards/>
<SwipButton/>
</Route>

      
</Switch>

       </Router>
    </div>
  );
}

export default App;
