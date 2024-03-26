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
  Card,
  Col,
  Row,
} from "react-bootstrap";
import logo from "../assets/images/logo.png";
import getCookie from "../hooks/getCookie";
import removeCookie from "../hooks/removeCookie";
import { Link, useParams } from "react-router-dom";
import setCookie from "../hooks/setCookie";
import "./cssComponent/CommentSection.css";
import { FaQuestion, FaUser, FaKey, FaListUl } from "react-icons/fa";
import React, { useState, useEffect, useCallback, useRef } from "react";
import { showImageApi } from "../services/imageServices";
import { sendComment } from "../services/imageServices";
function CommentSection() {
  // const imageData = [];
  // const nameData = [];
  // const dateData = [];
  // const desData = [];
  const { imgID } = useParams();
  let [imageData, setImg] = useState([]);
  let [nameData, setName] = useState([]);
  let [dateData, setDate] = useState([]);
  let [desData, setDes] = useState([]);
  let [initVal, setInitVal] = useState([1]);
  //const [contentC, setContentC] = useState("");
  const contentC = useRef(null);
  async function submitComment() {
    //id image, id avatar, username, content
    // console.log(imgID);
    // console.log(getCookie("imgavatar"));
    // console.log(getCookie("usr"));
    // console.log(contentC.current.value);

    setImg((prevArray) => [...prevArray, getCookie("imgavatar")]);
    setName((prevArray) => [...prevArray, getCookie("usr")]);
    setDes((prevArray) => [...prevArray, contentC.current.value]);
    let newDate = new Date();
    let date = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();
    let fullDate = date + "/" + month + "/" + year;
    console.log(fullDate);
    setDate((prevArray) => [...prevArray, fullDate]);
    //console.log(imageData);
    console.log(nameData);
    //console.log(dateData);
    //console.log(desData);
    await sendComment(
      imgID,
      getCookie("imgavatar"),
      getCookie("usr"),
      contentC.current.value
    );
  }
  async function fetchComment() {
    const data = await showImageApi(imgID);
    console.log(data);
    setImg(data.idAvatar);
    setName(data.username);
    setDate(data.updatedAt);
    setDes(data.content);
  }

  useEffect(() => {
    fetchComment();
  }, initVal);

  function CommentBox(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <div style={{ textAlign: "center" }}>
          <img
            src="https://drive.google.com/uc?export=view&id=1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs"
            id="avatarComment"
          />
          &nbsp;&nbsp;&nbsp;
          <input
            type="text"
            placeholder="Enter your comment"
            style={{
              width: "80%",
              height: "5vh",
              // overflow: "scroll",
              borderRadius: "0%",
            }}
            //value={contentC}
            //onChange={(e) => setContentC(e.target.value)}
            ref={contentC}
          />
          &nbsp;&nbsp;
          <Button id="btnS" onClick={() => submitComment()}>
            Submit
          </Button>
          {/* <Form className="d-flex">
            <Form.Control
              type="text"
              placeholder="Type a name or id"
              aria-label="Search"
              style={{ width: "50vh", borderRadius: "2vh" }}
              onChange={(e) => setContentC(e.target.value)}
              className="justify-content-center"
            />
            <Button
              id="btnS"
              className="btn btn-primary"
              type="button"
              onClick={() => submitComment()}
            >
              Search
            </Button>
          </Form> */}
        </div>
      );
    } else {
      return (
        <div style={{ color: "white", textAlign: "center" }}>
          You need to login to leave a comment
        </div>
      );
    }
  }
  return (
    <>
      <CommentBox isLoggedIn={getCookie("logged")} />
      <div style={{ padding: "3%" }}>
        {nameData.map((linkT, index) => (
          <>
            <Card
              style={{ backgroundColor: "#232946", color: "white" }}
              className="border-0"
            >
              <Card.Title>
                <img
                  src={
                    "https://drive.google.com/uc?export=view&id=1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs"
                  }
                  id="avatarComment"
                />
                <text> </text>
                {nameData[index]}
                <text> </text>
                <text style={{ fontSize: "0.5rem", color: "gray" }}>
                  {dateData[index]}
                </text>
              </Card.Title>
              <Card.Body>{desData[index]}</Card.Body>
            </Card>
          </>
        ))}
      </div>
    </>
  );
}

export default CommentSection;
