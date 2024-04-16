import React, { useState, useEffect } from "react";
import logo from "../../../assets/images/alt-logo.png";
import "./register.css";
import {
  Button,
  Navbar,
  ListGroup,
  Dropdown,
  Carousel,
  Form,
  Modal,
} from "react-bootstrap";
import {
  FaUser,
  FaKey,
  FaUsers,
  FaCalendarDay,
  FaPagelines,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleRegisterApi } from "../../../services/userServices";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Select } from "react-select";
import JSEncrypt from "jsencrypt";
import { generateKey } from "../../../services/keyServices";
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [show, setShow] = useState(false);
  const [privateKey, setPrivateKey] = useState("");
  const [publicKey, setPublicKey] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDownloadKey = () => {
    // Check if private key is not empty
    if (privateKey.trim() !== "") {
      // Create a Blob containing the private key
      const blob = new Blob([privateKey], { type: "text/plain" });
      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);
      // Create a link element
      const link = document.createElement("a");
      // Set the href attribute of the link to the URL of the Blob
      link.href = url;
      // Set the download attribute of the link to specify the filename
      link.download = "private_key.txt";
      // Append the link to the body
      document.body.appendChild(link);
      // Click the link to trigger the download
      link.click();
      // Remove the link from the body
      document.body.removeChild(link);
      // Revoke the URL to release the resources
      URL.revokeObjectURL(url);
    } else {
      alert("Private key is empty!");
    }
  };

  const handleSignIn = () => {
    return navigate("/login");
  };
  let navigate = useNavigate();
  async function handleRegister() {
    const keys = await generateKey.generateRSAKey();
    setPrivateKey(keys.privateKey);
    setPublicKey(keys.publicKey);
    try {
      let data = await handleRegisterApi(username, email, publicKey);
      console.log(data);
      if (data.status === "success") {
        toast.dark(
          "Registered successfully with username: " +
          username +
          ", please check email to verify user"
        );
        setShow(true);
      } else if (data.status === "error") {
        document.getElementById("form3Example3").value = "";
        document.getElementById("form3Example4").value = "";
        toast.dark("Sign up failed, try again");
      }
    } catch (error) {
      console.log(error);
      toast.dark("Error: " + error.status);
    }
  }
  function checkFirstHandError() {
    handleRegister();
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
                    type="text"
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
                  |Email
                </label>
                <input
                  type="text"
                  id="form3Example4"
                  className="form-control form-control-lg"
                  placeholder="Enter your email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="text-center text-lg-start mt-4 pt-2">
                <Button
                  type="button"
                  className="btn btn-primary btn-lg"
                  style={{
                    paddingLeft: "2.5rem",
                    paddingRight: "2.5rem",
                  }}
                  onClick={() => checkFirstHandError()}
                  id="btnS"
                >
                  Register
                </Button>
                <p className="small fw-bold mt-2 pt-1 mb-0 textL">
                  Have an account?{" "}
                  <Link
                    to="/login"
                    style={{ textDecoration: "none" }}
                    className="iText"
                  >
                    Login now!
                  </Link>
                </p>
              </div>
            </Form>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Private Key</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="privateKey">
              <Form.Label>Private Key:</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter private key"
                value={privateKey}
                onChange={(e) => setPrivateKey(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleDownloadKey}>
            Download Key (.txt)
          </Button>
          <Button variant="primary" onClick={handleSignIn}>
            Sign In
          </Button>
        </Modal.Footer>
      </Modal>
    </section>
  );
}
