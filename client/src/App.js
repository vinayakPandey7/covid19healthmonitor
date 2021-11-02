
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Header from './components/Header'
import Dashboard from './components/Dashboard'
// import { TodoItem } from './myComponent/TodoItem';
// import {aboutText} from './constants'

import {logoName} from './constant';

function App() {
  return (
    <div className="container-fluid">
   <Router>
      <Header title={logoName} searchBar={true} />
      heklo
      <Switch >


          <Route exact path="/" render={()=> {
            return(
            <>
            <Dashboard  />
            </>)
          }} />


          {/* <Route exact path="/" render={()=> {
            return(
            <>
            <AddTodo addTodo={addTodo} />
            <Todos todoList={todoList} onDelete={onDelete} />
            </>)
          }} />

          <Route exact path="/about" render={()=> {
            return(
              <>
                <About aboutText={aboutText} />
              </>
            )
          }} /> */}


      </Switch>

      {/* <Footer /> */}
   </Router>
    
   </div>

  );
}

export default App;
