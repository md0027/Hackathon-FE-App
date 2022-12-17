
import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {getEmail} from "../state/action/emailAction"



export default function (props) {
    let [authMode, setAuthMode] = useState("signin")
    const [values, setValues] = useState({});
    const navigate = useNavigate()
    const dispatch=useDispatch()
    const changeAuthMode = () => {
        setAuthMode(authMode === "signin" ? "signup" : "signin")
    }
    const userEmail=useSelector((state)=>state.email.userEmail)
    const handleChange = event => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    };

    const handleSignUp = (e) => {
    }
    
    const handleSignIn =  (e) => {
       e.preventDefault()
      dispatch(getEmail(values.email))
    }

    
   console.log("userEmail",userEmail)


    if (authMode === "signin") {
        return (
            <div className="Auth-form-container">
                <form className="Auth-form" onSubmit={handleSignIn}>
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <input
                                type="email"
                                className="form-control mt-1"
                                placeholder="Enter email"
                                name="email"
                                value={values.email || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <input
                                type="password"
                                className="form-control mt-1"
                                placeholder="Enter password"
                                name="password"
                                value={values.password || ""}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        )
    }

    return (
        <div className="Auth-form-container">
            <form className="Auth-form" onSubmit={handleSignUp}>
                <div className="Auth-form-content">
                    <h3 className="Auth-form-title">Sign In</h3>
                    <div className="text-center">
                        Already registered?{" "}
                        <span className="link-primary" onClick={changeAuthMode}>
                            Sign In
                        </span>
                    </div>
                    <div className="form-group mt-3">
                        <label>Full Name</label>
                        <input
                            type="text"
                            className="form-control mt-1"
                            placeholder="e.g Jane Doe"
                            name="fullName"
                            value={values.fullName || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Email address</label>
                        <input
                            type="email"
                            className="form-control mt-1"
                            placeholder="Email Address"
                            name="email"
                            value={values.email || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group mt-3">
                        <label>Password</label>
                        <input
                            type="password"
                            className="form-control mt-1"
                            placeholder="Password"
                            name="Password"
                            value={values.Password || ""}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="d-grid gap-2 mt-3">
                        <button type="submit" className="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}