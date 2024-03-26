import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./Homepage.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from "../../components/FooterWibu";
import NavbarWibu from "../../components/NavbarWibu";
import dataTest from "./testData";
import { getRandomImageApi } from "../../services/imageServices";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
function Homepage() {
  // const [idArray, setArray] = useState("");
  let url = `${window.location.origin.toString()}/showImage/`;
  setCookie("backPage", "");
  //let url2 = `${window.location.origin.toString()}/morePage/`;
  // let imgID=[];
  // async function GetArray() {
  //     let data = await getRandomImageApi("anime,background", "month", "like", "10")
  // }
  // useEffect(() => {
  //       setArray(data);
  //   }, []);
  // //let data=await getRandomImageApi("anime,background","month","like","10")
  // GetArray();
  // console.log(idArray);
  //console.log(dataTest);
  // const [ImageArray, SetImageArray] = useState("");
  // const getImageArray = async () => {
  //   const data = await getRandomImageApi("anime,background", "month", "like", "10");
  //   SetImageArray(data);
  //   setCookie("triggeredEffect", 1);
  // }
  // useEffect(() => {
  //   if (getCookie("triggeredEffect") != 1) {
  //     getImageArray();
  //   }
  // }, []);
  // console.log(ImageArray);
  // console.log(ImageArray[0]);

  // //Delay
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {

  //   setTimeout(() => {
  //     setLoading(false)
  //   }, 3000)

  // }, []);

  // //Fetch data
  // const [ImageArray, SetImageArray] = useState("");
  // // declare the async data fetching function
  // useEffect(() => {
  //   axiosGet();
  // }, []);
  // async function axiosGet() {
  //   const data = await getRandomImageApi("background", "month", "like", "10");
  //   SetImageArray(data);
  // }

  // if (loading) {
  //   return <div>loading...</div>
  // }

  // console.log(ImageArray);
  // console.log(ImageArray[0]);
  const [imgArr, setImg] = useState([]);
  const [testArr, setTestArray] = useState([]);
  async function getLeaderBoards() {
    //Like by month
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

    //Star by month
    const data2 = await getRandomImageApi("", "month", "star", "10");
    temp = [];
    for (var i = 0; i < data2.length; i++) {
      temp.push(data2[i].id);
    }
    if (data2.length < 10) {
      for (var i = data2.length; i < 10; i++) {
        temp.push(" ");
      }
    }
    setCookie("SBM", temp);

    //Like all time
    const data3 = await getRandomImageApi("", "", "like", "10");
    temp = [];
    for (var i = 0; i < data3.length; i++) {
      temp.push(data3[i].id);
    }
    if (data3.length < 10) {
      for (var i = data3.length; i < 10; i++) {
        temp.push(" ");
      }
    }
    setCookie("LAT", temp);

    //Star all time
    const data4 = await getRandomImageApi("", "", "star", "10");
    temp = [];
    for (var i = 0; i < data4.length; i++) {
      temp.push(data4[i].id);
    }
    if (data4.length < 10) {
      for (var i = data4.length; i < 10; i++) {
        temp.push(" ");
      }
    }
    setCookie("SAT", temp);
  }
  async function testF() {
    const data = await getRandomImageApi("background", "", "like", "10");
    const dataNew = await getRandomImageApi("anime", "", "like", "10");
    setTestArray(data);
    setImg(dataNew);
    console.log(data);
    getLeaderBoards();
  }
  useEffect(() => {
    testF();
  }, []);
  //anime
  //background
  return (
    <>
      <NavbarWibu />
      <a
        style={{ textDecoration: "none" }}
        href="/showimageforcategory/background"
      >
        <p style={{ color: "white", padding: "1%" }}>Background</p>
      </a>
      <div className="masonry-with-flex">
        {testArr.map((linkT, index) => (
          <a href={url + testArr[index].id} key={index}>
            <div>
              <img
                src={
                  "https://drive.google.com/uc?export=view&id=" +
                  testArr[index].id
                }
                id="anhHomePage"
              />
            </div>
          </a>
        ))}
      </div>
      <a style={{ textDecoration: "none" }} href="/showimageforcategory/anime">
        <p style={{ color: "white", padding: "1%" }}>Anime</p>
      </a>
      <div className="masonry-with-flex">
        {imgArr.map((linkT, index) => (
          <a href={url + imgArr[index].id} key={index}>
            <div>
              <img
                src={
                  "https://drive.google.com/uc?export=view&id=" +
                  imgArr[index].id
                }
                id="anhHomePage"
              />
            </div>
          </a>
        ))}
      </div>
      <FooterWibu />
    </>
  );
}

export default Homepage;
