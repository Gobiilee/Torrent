import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/logo.png";
import "./login.css";
import {
  Button,
  Navbar,
  ListGroup,
  Dropdown,
  Carousel,
  Form,
  Toast,
} from "react-bootstrap";
import NavbarWibu from "../../../components/NavbarWibu";
import { FaQuestion, FaUser, FaKey } from "react-icons/fa";
import { Link } from "react-router-dom";
import {
  handleLoginApi,
  handleGetProfileApi,
} from "../../../services/userServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import setCookie from "../../../hooks/setCookie";
import getCookie from "../../../hooks/getCookie";
import removeCookie from "../../../hooks/removeCookie";
export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  let navigate = useNavigate();
  async function handleLogin() {
    try {
      let data = await handleLoginApi(username, password);
      console.log(data);
      if (data.status === "success") {
        setCookie("usr", username);
        setCookie("logged", 1);
        setCookie("usrid", data.user.id);
        setCookie("imgavatar", data.user.image);
        //setCookie("token", data.token);
        setCookie("userRole", data.user.role);
        toast.dark("Logged in as " + username);
        let usrId = getCookie("usrid");
        const Imagedata = await handleGetProfileApi(usrId);
        setCookie("imgArr", Imagedata.image);
        return navigate("/");
      } else {
        document.getElementById("form3Example3").value = "";
        document.getElementById("form3Example4").value = "";
        toast.dark("Logged in failed, try again");
      }
    } catch (error) {
      console.log(error);
      toast.dark("Error: " + error.status);
    }
  }
  function checkFirstHandError() {
    if (password.length < 8) {
      toast.dark("Password is less than 8 character");
    } else {
      handleLogin();
    }
  }
  return (
    <section className="vh-100">
      <div className="container-fluid h-custom">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-md-9 col-lg-6 col-xl-5">
            <Link to="/home" style={{ textDecoration: "none" }}>
              <img src={logo} className="img-fluid" alt="Sample image" />
            </Link>
          </div>
          <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <Form>
              <div className="form-outline mb-4">
                <FaUser className="icon" size={18} color={"white"} />
                <label className="form-label textL" for="form3Example3">
                  |Username
                </label>
                <div className="input-field">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control form-control-lg"
                    placeholder="Enter your username"
                    onChange={(e) => setUsername(e.target.value)}
                  />
                </div>
              </div>
              <div className="form-outline mb-3">
                <FaKey className="FaKey" size={18} color={"white"} />
                <label className="form-label textL" for="form3Example4">
                  |Password
                </label>
                <input
                  type="password"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <div className="d-flex justify-content-between align-items-center">
                <div className="form-check mb-0">
                  <input
                    className="form-check-input me-2 text-info"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label className="form-check-label textL" for="form2Example3">
                    Remember me
                  </label>
                </div>
              </div>

              <div className="text-center text-lg-start mt-4 pt-2">
                <Button
                  onClick={() => checkFirstHandError()}
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                  }}
                  id="btnS"
                >
                  Login
                </Button>
                <p className="small fw-bold mt-2 pt-1 mb-0 textL">
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    style={{ textDecoration: "none" }}
                    className="iText"
                  >
                    Register
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </section>
  );
}
