import React, { useState } from "react";
export const Forgotpass = () => {

    const [fields, setfields] = useState({
        username: ""
    })


    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;

        setfields({...fields,[name]:value})
        
    }

    function handleSubmit(e){
        e.preventDefault();
        console.log(fields)
    }



    return (
        <div className="container">
             <form onSubmit={handleSubmit}>
                <div className="row justify-content-md-center">
               
                    <div className="col-md-6 mb-6">
                    <h3 style={{textAlign:'center'}}>Reset Password</h3>
                        {/* <label>Email address</label> */}
                        <input type="email" className="form-control" style={{display:'inline'}} name="username" value={fields.username} onChange={handleInput}  placeholder="Enter email" />
                        <button type="submit" style={{width: '100%'}} className="btn btn-primary btn-block">Submit</button>
                    </div>
                </div>               


               
            </form>
        </div>
    )
}
