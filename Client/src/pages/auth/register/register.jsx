import React, { useState, useEffect } from "react";
import logo from '../../../assets/images/logo.png';
import "./register.css"
import { Button, Navbar, ListGroup, Dropdown, Carousel, Form } from "react-bootstrap";
import { FaUser, FaKey, FaUsers, FaCalendarDay, FaPagelines } from 'react-icons/fa'
import { Link } from "react-router-dom";
import { handleRegisterApi } from "../../../services/userServices";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { Select } from 'react-select';
export default function Register() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    let navigate = useNavigate();
    async function handleRegister() {
        try {
            let data = await handleRegisterApi(username, email, password);
            console.log(data)
            if (data.status === "success") {
                toast.dark("Registered successfully with username: " + username + ", please check email to verify user");
                return navigate("/login");
            } else if (data.status === "error") {
                document.getElementById('form3Example3').value = '';
                document.getElementById('form3Example4').value = '';
                toast.dark("Sign up failed, try again");
            }
        } catch (error) {
            console.log(error)
            toast.dark("Error: " + error.status)
        }
    }
    function checkFirstHandError() {
        if (password.length < 8) {
            toast.dark("Password is less than 8 character");
            console.log(username);
            console.log(email);
            console.log(password);
        } else {
            handleRegister();
        }
    }
    return (
        <section className="vh-100">
            <div className="container-fluid h-custom">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col-md-9 col-lg-6 col-xl-5">
                        <Link to="/home" style={{ textDecoration: 'none' }}>
                            <img src={logo} className="img-fluid" alt="Sample image" />
                        </Link>
                    </div>
                    <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                        <Form>
                            <div className="form-outline mb-4">
                                <FaUser className="icon" size={18} color={"white"} />
                                <label className="form-label textL" for="form3Example3">|Username</label>
                                <div className="input-field">
                                    <input type="text" id="form3Example3" className="form-control form-control-lg" placeholder="Enter your username" onChange={(e) => setUsername(e.target.value)} />
                                </div>
                            </div>
                            <div className="form-outline mb-3">
                                <FaKey className="FaKey" size={18} color={"white"} />
                                <label className="form-label textL" for="form3Example4">|Password</label>
                                <input type="password" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="form-outline mb-3">
                                <FaKey className="FaKey" size={18} color={"white"} />
                                <label className="form-label textL" for="form3Example4">|Email</label>
                                <input type="text" id="form3Example4" className="form-control form-control-lg"
                                    placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="text-center text-lg-start mt-4 pt-2">
                                <Button type="button" className="btn btn-primary btn-lg"
                                    style={{
                                        paddingLeft: "2.5rem",
                                        paddingRight: "2.5rem",
                                    }} onClick={() => checkFirstHandError()} id="btnS">Register</Button>
                                <p className="small fw-bold mt-2 pt-1 mb-0 textL">Have an account? <Link to="/login" style={{ textDecoration: 'none' }} className="iText">Login now!</Link></p>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </section>
    )
}