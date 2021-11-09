import React, { useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/Auth.service";
import { useHistory } from "react-router-dom";
import  { Redirect } from 'react-router-dom'
export const Login = ({handleLoginClick}) => {

    
const history = useHistory();
    const [fields, setfields] = useState({
        email: "",
        pass: "",
        isloggedIn: false
    })


    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;

        setfields({...fields,[name]:value})

        
    }

    async function handleSubmit(event) {
        event.preventDefault();
        let that = this
        console.log(fields)

        AuthService.login(fields)
            .then(response => {
                console.log(response.message);
                handleLoginClick()
                history.push("/profile");
                // that.history.pushState('/profile')
                // this.setState(prevState => ({
                       
                // }))
              
            })
            .then( res => {
              // this.highChartsRender()
            })
            .catch(e => {
              console.log(e);
              history.push("/login");
            });
           
          

        // setIsLoading(true);
    
        // setNewUser("test");
    
        // setIsLoading(false);
      }

    return (
        <div className="container">
             <form onSubmit={handleSubmit}>
                <div className="row justify-content-md-center">
                
                    <div className="col-md-6 mb-6">
                    <h3 style={{textAlign:"center"}}>Sign In</h3>
                        <label>Email address</label>
                        <input type="email" className="form-control" name="email" value={fields.email} onChange={handleInput}  placeholder="Enter email" />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-6 mb-6">
                        <label>Password</label>
                        <input type="password" className="form-control" name="pass" value={fields.pass} onChange={handleInput} placeholder="Enter password" />
                    </div>
                </div>
                <div className="row justify-content-md-center">
                    <div className="col-md-6 mb-6">
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                        </div>
                    </div>
                </div>
               

                <div className="row justify-content-md-center">
                    <div className="col-md-6 mb-6">
                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            Forgot <Link to="/reset">password?</Link>
                        </p>
                    </div>
                    
                </div>
            </form>
        </div>
    )
}
