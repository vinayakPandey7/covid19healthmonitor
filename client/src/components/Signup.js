import React, { useEffect, useState, useFormFields } from "react";
import Form from "react-bootstrap/Form";
import { useHistory } from "react-router-dom";
import apiService from "../services/apiService";
import AuthService from "../services/Auth.service";
// import LoaderButton from "../components/LoaderButton";
// import { useAppContext } from "../lib/contextLib";
// import { useFormFields } from "../lib/hooksLib";
// import { onError } from "../lib/errorLib";
import "./Signup.css";


export const Signup = () => {
    const [fields, handleFieldChange] = useState({
        firstname: "",
        lastname: "",
        sex:"",
        bloodgroup: "",
        address: "",
        state: '',
        city:"",
        zip: "",
        email: "",
        password: "",
        pcontact: "",
        gcontact: "",
        isAdmin: false,

        maxdate: ""
      });
      const history = useHistory();

     
      
     const getMaxDate = () =>  {  var now = new Date(); const maxDatee = now.toISOString().substring(0,10); handleFieldChange({maxdate:maxDatee}) }
     useEffect(() => {getMaxDate();}, [])
    


      function validateForm() {
        return (
          fields.email.length > 0 &&
          fields.password.length > 0 &&
          fields.password === fields.confirmPassword
        );
      }
    
      function validateConfirmationForm() {
        return fields.confirmationCode.length > 0;
      }
    
      async function handleSubmit(event) {
        event.preventDefault();
        console.log(fields)

        AuthService.register(fields)
            .then(response => {
                console.log(response);

                // this.setState(prevState => ({
                    alert('Signed up successfully, click on login')
                // }))
              
            })
            .then( res => {
              // this.highChartsRender()
            })
            .catch(e => {
              console.log(e);
            });
           
          

        // setIsLoading(true);
    
        // setNewUser("test");
    
        // setIsLoading(false);
      }
    
     function handleInput(e) {
         const name = e.target.name;
         const value = e.target.value;

         handleFieldChange({...fields,[name]:value})

     }
     



    
    
      return (
        <div className="Signup container">
        <form className="needs-validation" onSubmit={handleSubmit}  >
                <div className="row justify-content-md-center">
                    <div className="col-md-6 mb-6">
                        <label >First name</label>
                        <input type="text" className="form-control" id="validationTooltip01" name="firstname" placeholder="First name" value={fields.firstname} onChange={handleInput} autoComplete="off" required />
                    </div>
                    <div className="col-md-6 mb-6">
                        <label>Last name</label>
                        <input type="text" className="form-control" id="validationTooltip02" name="lastname" placeholder="Last name" value={fields.lastname} onChange={handleInput} autoComplete="off" required />
                    </div>
                </div>
                <br />
                <div className="row justify-content-md-center">
                    <div className="col-md-4 mb-4">
                        <label >Gender</label>
                        <select className="form-control" name="sex" value={fields.sex} onChange={handleInput} autoComplete="off">
                            <option value="none" defaultValue>Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">other</option>
                        </select>
                    </div>
                    <div className="col-md-4 mb-4">
                        <label htmlFor="dob">Date of Birth</label>
                        <input className="form-control" type="date" max={fields.maxdate} id="dob" name="dob" value={fields.dob} onChange={handleInput} autoComplete="off" />
                    </div>
                    <div className="col-md-4 mb-4">
                        <label >Blood Group</label>
                        <select className="form-control" name="bloodgroup" value={fields.bloodgroup} onChange={handleInput} autoComplete="off" required>
                            <option value="A+" defaultValue>A+</option>
                            <option value="A-">A-</option>
                            <option value="B+">B+</option>
                            <option value="B-">B-</option>
                            <option value="O+">O+</option>
                            <option value="O-">O-</option>
                            <option value="AB+">AB+</option>
                            <option value="AB-">AB-</option>
                        </select>
                    </div>
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-md-6 mb-6">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" name="email" value={fields.email} onChange={handleInput} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" autoComplete="off"  required />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="col-md-6 mb-6">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" name="password" value={fields.password} onChange={handleInput} className="form-control" id="exampleInputPassword1" placeholder="Password" required />
                    </div>
                </div>
                
                <br />
                <div className="row justify-content-md-center">
                    <div className="col-md-12 mb-12">
                    <label >Address </label>
                    <input type="text" className="form-control" id="validationTooltip03" name="address" placeholder="Address" value={fields.address} onChange={handleInput} autoComplete="off"  required  />
                    </div> 
                </div>

                <div className="row justify-content-md-center">
                    <div className="col-md-4 mb-4">
                    <label >City </label>
                    <input type="text" className="form-control" id="validationTooltip03" name="city" placeholder="City" value={fields.city} onChange={handleInput} autoComplete="off"  required  />
                    </div>
                    <div className="col-md-4 mb-4">
                    <label>State</label>
                    <input type="text" className="form-control" id="validationTooltip04" name="state" placeholder="State" value={fields.state} onChange={handleInput} autoComplete="off" required />
                    </div>
                    <div className="col-md-4 mb-4">
                    <label >Zip</label>
                    <input type="text" className="form-control" id="validationTooltip05" name="zip" placeholder="Zip code" minLength={6} maxLength={6} pattern="[0-9]{6}" autoComplete="off" value={fields.zip} onChange={handleInput} autoComplete="off" required />
                    </div>
                    
                </div>

                    <div className="row justify-content-md-center" >
                        <div className="col-md-6 mb-6">
                            <label >Patient contact No.</label>
                            <input type="tel" name="pcontact" value={fields.pcontact} onChange={handleInput} className="form-control" id="validationTooltip05"  placeholder="Patient contact No." pattern="[0-9]{10}" minLength={10} maxLength={10} autoComplete="off" required />
                        </div>

                        <div className="col-md-6 mb-6">
                            <label >Alternate contact No.</label>
                            <input type="tel" name="gcontact" value={fields.gcontact} onChange={handleInput} className="form-control" id="validationTooltip05" placeholder="Alternate contact No." pattern="[0-9]{10}" minLength={10} maxLength={10} autoComplete="off" required />
                        </div>
                    </div>


           <br />
           <div style={{width: '100%', textAlign: 'center'}}></div>
            <button className="btn btn-primary" type="submit">Submit form</button>
            {fields.firstname}
            {fields.lastname}
            {fields.dob}
            {fields.sex}
            {fields.address}
            {fields.state}
            {fields.city}
            {fields.email}
            {fields.password}
            {fields.zip}
            {fields.pcontact}

            {fields.gcontact}

            {fields.bloodgroup}


            </form>
        </div>
      );
}
