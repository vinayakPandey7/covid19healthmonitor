
import "bootstrap/dist/css/bootstrap.min.css";
import React, {useState, useEffect, Component} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import Header from './components/Header'
import Dashboard from './components/Dashboard'
import Profile from './components/profile.component'
// import { TodoItem } from './myComponent/TodoItem';
// import {aboutText} from './constants'
import {Signup} from './components/Signup';
import {logoName} from './constant';
import { Login } from "./components/Login";
import { Forgotpass } from "./components/Forgotpass";
import AuthService from "./services/Auth.service";
import BoardUser from "./components//Board-user.component";
import BoardModerator from "./components/Board-moderator.component";
import BoardAdmin from "./components/Board-user.component";


export default class App extends Component {

  

  constructor(props) {
    super(props);

    console.log("above state1")
    this.state = {
      currentUserDetail: AuthService.getCurrentUser(),
      isLoggedIn : AuthService.getCurrentUser()==null ? false: true
      
    };

    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

   handleLoginClick(){
    this.setState({isLoggedIn:true,currentUserDetail: AuthService.getCurrentUser()});
  } 

  handleLogOut = (() => { this.setState({isLoggedIn:false,currentUserDetail:null});});

  componentDidUpdate(){
    console.log("iside component will update");
  }
  componentDidMount(){
    console.log("iside component did mount")
  }

  componentDidMount(){
    console.log("iside component will mount")
  }
 
   

  render() {
    
    const {isLoggedIn, currentUserDetail} = this.state;

    return (
      <div className="container-fluid">
      <Router>
   
       
         <Header handleLogOut={this.handleLogOut} title={logoName} searchBar={false} currentUserDetail={currentUserDetail}  isLoggedIn={isLoggedIn} logout={this.logout} />
        {!isLoggedIn ? 
        <Switch>
             <Route exact path="/signup" render={()=> {
               return(
               <>
               <Signup  />
               </>)
             }} />
           <Route path={["/", "/login"]}  render={()=> {
               return(
               <>
               <Login handleLoginClick={this.handleLoginClick}  />
               </>)
             }} />
   

        </Switch>
        
        
        : 
          <Switch >
         
           <Route exact path="/"   render={()=> {
   
               return(
               <>
              <Profile  />
               </>)
             }} />
   
          
   
           <Route exact path="/reset" render={()=> {
               return(
               <>
               <Forgotpass  />
               </>)
             }} />
   
           <Route exact path="/dashboard" render={()=> {
             return(
             <>
             <Dashboard  />
             </>)
           }} />
   
   
            <Route exact path="/profile" component={Profile} />
           <Route exact path="/user" component={BoardUser} />
           <Route exact path="/mod" component={BoardModerator} />
           <Route exact path="/admin" component={BoardAdmin} />
   
   
         </Switch>
  }
      </Router>
       
      </div>
    );
  }
}

// function App() {
  // const [userLevel, setUserLevel] = useState({
  //   showModeratorBoard: false,
  //   showAdminBoard: false,
  //   showUserBoard: false,
  //   currentUser: undefined
  // })

  // const [loginUserDetail, setloginUserDetail] = useState({})

  // const [isLoggedIn, setIsLoggedIn] = useState(false);
 
  // console.log("above use effect1")
  // useEffect(async() => {
  //   console.log("inside use effect1")
  //   const user = await AuthService.getCurrentUser();
  //   setIsLoggedIn(true);
  //   setloginUserDetail({
  //     loginUserDetail:user  
  //   })
  // })
  // console.log("below use effect1")
  // useEffect(() => {
  //   const user =  AuthService.getCurrentUser();
    
  //   if (user) {
  //     setUserLevel({
  //       currentUser: user,
  //       showUserBoard: (user.message.role.includes("user")===undefined ? false : true),
  //       showModeratorBoard: (user.message.role.includes("ROLE_MODERATOR")===undefined ? false : true),
  //       showAdminBoard: (user.message.role.includes("ROLE_ADMIN")===undefined ? false : true)
  //     });
      
    
  //   }
  // }, []); // passing an empty array as second argument triggers the callback in useEffect only after the initial render thus replicating `componentDidMount` lifecycle behaviour


//   return (

    

//     <div className="container-fluid">
//    <Router>

    
//       <Header title={logoName} isLoggedIn={isLoggedIn} searchBar={false} loginUserDetail={loginUserDetail}  />
//       inside appjs 
     
//       {/* {
//        !localStorage.getItem('access_token') ? <Redirect to='/login' /> :   */}
//        <Switch >
      
//         <Route exact path="/profile" render={()=> {

//             return(
//             <>
//            <Profile  />
//             </>)
//           }} />

//         <Route exact path="/login" setloginUserDetail={() => setloginUserDetail} render={()=> {
//             return(
//             <>
//             <Login  />
//             </>)
//           }} />

//         <Route exact path="/signup" render={()=> {
//             return(
//             <>
//             <Signup  />
//             </>)
//           }} />

//         <Route exact path="/reset" render={()=> {
//             return(
//             <>
//             <Forgotpass  />
//             </>)
//           }} />

//         <Route exact path="/dashboard" render={()=> {
//           return(
//           <>
//           <Dashboard  />
//           </>)
//         }} />


//         <Route path="/user" component={BoardUser} />
//         <Route path="/mod" component={BoardModerator} />
//         <Route path="/admin" component={BoardAdmin} />


//       </Switch>
//     {/* } */}
//    </Router>
    
//    </div>

//   );
// }

// export default App;
