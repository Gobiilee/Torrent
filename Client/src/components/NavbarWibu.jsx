import {
  Button,
  Navbar,
  ListGroup,
  Dropdown,
  Carousel,
  Nav,
  Container,
  NavDropdown,
  Form,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import getCookie from "../hooks/getCookie";
import removeCookie from "../hooks/removeCookie";
import setCookie from "../hooks/setCookie";
import "./cssComponent/navWibu.css";
import { FaQuestion, FaUser, FaKey, FaListUl } from "react-icons/fa";
import React, { useState, useEffect } from "react";
import { handleGetProfileApi } from "../services/userServices";
import { getRandomImageApi } from "../services/imageServices";
function NavbarWibu() {
  const [searchKey, setSearchKey] = useState("");
  let url = `${window.location.origin.toString()}/resultSearch/`;
  async function TakeImageArr() {
    let usrId = getCookie("usrid");
    const data = await handleGetProfileApi(usrId);
    setCookie("imgArr", data.image);
    //console.log(data.image[0]);
  }

  function Profile(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <Dropdown.Item href="#/action-1">
            Profile: {getCookie("usr")}
          </Dropdown.Item>
        </Link>
      );
    }
  }
  function ProfileBar(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      let usrId = getCookie("usrid");
      return (
        <Nav.Link href={"/Profile/" + usrId} onClick={() => TakeImageArr()}>
          Profile
        </Nav.Link>
      );
    }
  }
  function AdminBar(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      if (getCookie("userRole") == 1) {
        return <Nav.Link href={"/adminpage"}>Admin</Nav.Link>;
      }
    }
  }
  function StarBar(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return <Nav.Link href={"/starpage"}>Stared</Nav.Link>;
    }
  }
  function ProfileBTN(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <Link to="/profile" style={{ textDecoration: "none" }}>
          <FaUser className="icon" size={18} color={"white"} />{" "}
          <text class="iText">Profile</text>
        </Link>
      );
    }
  }
  function Login(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
    } else {
      return (
        <Link to="/login" style={{ textDecoration: "none" }}>
          <Dropdown.Item href="#/action-2">Login</Dropdown.Item>
        </Link>
      );
    }
  }
  function LoginNav(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
    } else {
      return <Nav.Link href="/login">Login</Nav.Link>;
    }
  }
  function Upload(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <Link to="/upload" style={{ textDecoration: "none" }}>
          <Dropdown.Item href="#/action-2">Upload wallpaper</Dropdown.Item>
        </Link>
      );
    }
  }
  function UploadBar(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return <Nav.Link href="/upload">Upload</Nav.Link>;
    }
  }
  function UploadList(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return <NavDropdown.Item href="/upload">Upload</NavDropdown.Item>;
    }
  }
  function logoutUtility() {
    console.log("hello");
    removeCookie("usr");
    setCookie("logged", 0);
    window.location.reload(false);
  }
  function Logout(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return <Dropdown.Item onClick={logoutUtility}>Logout</Dropdown.Item>;
    }
  }
  function LogoutList(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <NavDropdown.Item onClick={logoutUtility}>Logout</NavDropdown.Item>
      );
    }
  }
  return (
    <>
      <Navbar className="ms-auto navbar-dark " style={{ fontSize: "2.5vh" }}>
        <Container fluid>
          <Navbar.Brand href="/home">
            <img
              src={logo}
              alt="Avatar Logo"
              style={{ width: "9vh", display: "inline" }}
              className="justify-content-center"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll ">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/showcategory">Categories</Nav.Link>
              <Nav.Link href="/leaderboards">Leaderboards</Nav.Link>
              <ProfileBar isLoggedIn={getCookie("logged")} />
              <StarBar isLoggedIn={getCookie("logged")} />
              <LoginNav isLoggedIn={getCookie("logged")} />
              <UploadBar isLoggedIn={getCookie("logged")} />
              <AdminBar isLoggedIn={getCookie("logged")} />
              <NavDropdown title="More" id="navbarScrollingDropdown">
                <LogoutList isLoggedIn={getCookie("logged")} />
                <NavDropdown.Item href="/about">About us</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Form className="d-flex" style={{ paddingTop: "1.3%" }}>
              <Form.Control
                type="search"
                placeholder="Type a name or id"
                className="me-2"
                aria-label="Search"
                style={{ width: "50vh", borderRadius: "2vh" }}
                onChange={(e) => setSearchKey(e.target.value)}
              />
              <Button
                id="btnS"
                className="btn btn-primary"
                type="button"
                href={url + searchKey}
              >
                Search
              </Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavbarWibu;
