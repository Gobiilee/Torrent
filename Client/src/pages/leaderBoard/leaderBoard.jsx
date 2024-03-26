import {
  Button,
  Navbar,
  ListGroup,
  Dropdown,
  Carousel,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./leaderBoard.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import NavbarWibu from "../../components/NavbarWibu";
import FooterWibu from "../../components/FooterWibu";
import { getRandomImageApi } from "../../services/imageServices";
import React, { useState, useEffect, useCallback } from "react";
function LeaderBoard() {
  const [Likebm, setLikebm] = useState([]);
  const [Starbm, setStarbm] = useState([]);
  const [Likeat, setLikeat] = useState([]);
  const [Starat, setStarat] = useState([]);
  async function takeLBM() {
    const data = await getRandomImageApi("", "month", "like", "10");
    let temp = [];
    for (var i = 0; i < data.length; i++) {
      temp.push(data[i].id);
    }
    if (data.length < 10) {
      for (var i = data.length; i < 10; i++) {
        temp.push(" ");
      }
    }
    setCookie("LBM", temp);
    setLikebm(data);
  }
  async function takeSBM() {
    const data = await getRandomImageApi("", "month", "star", "10");
    let temp = [];
    for (var i = 0; i < data.length; i++) {
      temp.push(data[i].id);
    }
    if (data.length < 10) {
      for (var i = data.length; i < 10; i++) {
        temp.push(" ");
      }
    }
    setCookie("SBM", temp);
    setStarbm(data);
  }
  async function takeLAT() {
    const data = await getRandomImageApi("", "", "like", "10");
    let temp = [];
    for (var i = 0; i < data.length; i++) {
      temp.push(data[i].id);
    }
    if (data.length < 10) {
      for (var i = data.length; i < 10; i++) {
        temp.push(" ");
      }
    }
    setCookie("LAT", temp);
    setLikeat(data);
  }
  async function takeSAT() {
    const data = await getRandomImageApi("", "", "star", "10");
    let temp = [];
    for (var i = 0; i < data.length; i++) {
      temp.push(data[i].id);
    }
    if (data.length < 10) {
      for (var i = data.length; i < 10; i++) {
        temp.push(" ");
      }
    }
    setCookie("SAT", temp);
    setStarat(data);
  }
  useEffect(() => {
    takeLBM();
    takeSBM();
    takeLAT();
    takeSAT();
  }, []);
  // const Likebm = [
  //   "19hEWuwRILVFcDOBF9sq5yTnrjS8sydN5",
  //   "1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs",
  //   "1FjK29ynIxF7_lwlgBmXnus1QnnSaJisw",
  //   "1Gc7DBQu4wVB8QHnx9vkpVed6K70jarbj",
  //   "1kZRUVTNQz7c6YgXVbMwypuKHAwKfP6U-",
  //   "1NKOgbzaWDoErzZ4pdDtL5bwkT-X5RBC3",
  //   "1pCBHAAyNPKnHVBqyPxXHNfxjyRmTSa6s",
  //   "1SGLs3sys1jpxuOlwWYbJw-Dgd93jNJjv",
  //   "1z1R4pttq4Tz_t5tRzZq7LBbvMgK971k5",
  //   "1ZS6bffKrJtOMspWYaL-yrwYSeGAnYRTK",
  // ];
  // const Starbm = [
  //   "19hEWuwRILVFcDOBF9sq5yTnrjS8sydN5",
  //   "1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs",
  //   "1FjK29ynIxF7_lwlgBmXnus1QnnSaJisw",
  //   "1Gc7DBQu4wVB8QHnx9vkpVed6K70jarbj",
  //   "1kZRUVTNQz7c6YgXVbMwypuKHAwKfP6U-",
  //   "1NKOgbzaWDoErzZ4pdDtL5bwkT-X5RBC3",
  //   "1pCBHAAyNPKnHVBqyPxXHNfxjyRmTSa6s",
  //   "1SGLs3sys1jpxuOlwWYbJw-Dgd93jNJjv",
  //   "1z1R4pttq4Tz_t5tRzZq7LBbvMgK971k5",
  //   "1ZS6bffKrJtOMspWYaL-yrwYSeGAnYRTK",
  // ];
  // const Likeat = [
  //   "19hEWuwRILVFcDOBF9sq5yTnrjS8sydN5",
  //   "1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs",
  //   "1FjK29ynIxF7_lwlgBmXnus1QnnSaJisw",
  //   "1Gc7DBQu4wVB8QHnx9vkpVed6K70jarbj",
  //   "1kZRUVTNQz7c6YgXVbMwypuKHAwKfP6U-",
  //   "1NKOgbzaWDoErzZ4pdDtL5bwkT-X5RBC3",
  //   "1pCBHAAyNPKnHVBqyPxXHNfxjyRmTSa6s",
  //   "1SGLs3sys1jpxuOlwWYbJw-Dgd93jNJjv",
  //   "1z1R4pttq4Tz_t5tRzZq7LBbvMgK971k5",
  //   "1ZS6bffKrJtOMspWYaL-yrwYSeGAnYRTK",
  // ];
  // const Starat = [
  //   "19hEWuwRILVFcDOBF9sq5yTnrjS8sydN5",
  //   "1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs",
  //   "1FjK29ynIxF7_lwlgBmXnus1QnnSaJisw",
  //   "1Gc7DBQu4wVB8QHnx9vkpVed6K70jarbj",
  //   "1kZRUVTNQz7c6YgXVbMwypuKHAwKfP6U-",
  //   "1NKOgbzaWDoErzZ4pdDtL5bwkT-X5RBC3",
  //   "1pCBHAAyNPKnHVBqyPxXHNfxjyRmTSa6s",
  //   "1SGLs3sys1jpxuOlwWYbJw-Dgd93jNJjv",
  //   "1z1R4pttq4Tz_t5tRzZq7LBbvMgK971k5",
  //   "1ZS6bffKrJtOMspWYaL-yrwYSeGAnYRTK",
  // ];
  let url = `${window.location.origin.toString()}/showImage/`;
  return (
    <div>
      <NavbarWibu />
      <Container>
        <Row>
          <Col id="divCol">Order</Col>
          <Col id="divCol">Most liked by month</Col>
          <Col id="divCol">Most stared by month</Col>
          <Col id="divCol">Most liked all time</Col>
          <Col id="divCol">Most stared all time</Col>
        </Row>
        {getCookie("LAT")
          .split(",")
          .map((imgID, index) => (
            <>
              <Row>
                <Col id="divCol">{index + 1}</Col>
                <Col id="divCol">
                  <a href={url + getCookie("LBM").split(",")[index]}>
                    {getCookie("LBM").split(",")[index]}
                  </a>
                </Col>
                <Col id="divCol">
                  <a href={url + getCookie("SBM").split(",")[index]}>
                    {getCookie("SBM").split(",")[index]}
                  </a>
                </Col>
                <Col id="divCol">
                  <a href={url + getCookie("LAT").split(",")[index]}>
                    {getCookie("LAT").split(",")[index]}
                  </a>
                </Col>
                <Col id="divCol">
                  <a href={url + getCookie("SAT").split(",")[index]}>
                    {getCookie("SAT").split(",")[index]}
                  </a>
                </Col>
              </Row>
            </>
          ))}
      </Container>
      {/* <div className="row" style={{ textAlign: "center" }}>
        <h4
          className="text-warning justify-content-center"
          style={{ fontWeight: "bold" }}
        >
          Ranking all the time (by like)
        </h4>
        <table className="table table-dark table-striped justify-content-center">
          <thead>
            <tr>
              <th>Name</th>
              <th>ID</th>
              <th>Upload date</th>
              <th>Likes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>The wind</td>
              <td>1234</td>
              <td>22/06/2022</td>
              <td>14321</td>
            </tr>
            <tr>
              <td>Lab</td>
              <td>3143</td>
              <td>21/06/2022</td>
              <td>12121</td>
            </tr>
          </tbody>
        </table>
      </div> */}
      <FooterWibu />
    </div>
  );
}

export default LeaderBoard;
