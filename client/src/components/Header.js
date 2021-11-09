import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import {Dropdown, ButtonGroup, DropdownButton, Button } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import AuthService from "../services/Auth.service";
import { Login } from './Login';


export default function Header({handleLogOut,title,searchBar,currentUserDetail, logout,isLoggedIn}) {

    
    const history = useHistory();
    console.log(isLoggedIn)
    console.log(currentUserDetail);

    function logout() {
        
        handleLogOut();
        AuthService.logout();
        history.push("/login");
        
    }

    function handleLoginPage(){
        history.push("/login");
    }

    function handleSignUp(){
        history.push("/signup")
    }


    return (
        <>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">{title}</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/dashboard">Patient Dashboard</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                </ul>
                <ButtonGroup>
                    {isLoggedIn ? 
                 <DropdownButton bsStyle="success" title={currentUserDetail.message.firstname}>
                    <Dropdown.Item key="2"> <Link to="/profile">Profile</Link></Dropdown.Item>
                    <Dropdown.Item key="3">Settings</Dropdown.Item>
                    <Dropdown.Item key="4" onClick={logout}>logout</Dropdown.Item>
                </DropdownButton> :    
                <div>
                <Button  bsStyle="success" onClick={handleLoginPage} >Login </Button> 
                <Button style={{paddingLeft:'5px'}} bsStyle="success" onClick={handleSignUp} >Sign up </Button>
                </div>
                
                }
                   
                 </ButtonGroup>
                {searchBar? <form className="d-flex">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form>: ''}
                </div>
        </div>
        </nav>
        </>
    )
}

Header.defaultProps = {
  title : "Todo APP",
  searchBar: true
}


Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}
