import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./MorePage.css";
import { Link, useParams } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from "../../components/FooterWibu";
import NavbarWibu from "../../components/NavbarWibu";
import { getRandomImageApi } from "../../services/imageServices";
import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
function MorePage() {
  let { categoryname } = useParams();
  console.log(categoryname);
  let url = `${window.location.origin.toString()}/showImage/`;
  const [testArr, setTest] = useState([]);
  async function fetchData() {
    const data = await getRandomImageApi(categoryname, "month", "like", "20");
    console.log(data);
    setTest(testArr);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <NavbarWibu />
      <a style={{ textDecoration: "none" }} href="" />
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
      <FooterWibu />
    </>
  );
}

export default MorePage;
