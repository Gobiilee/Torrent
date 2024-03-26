import React, { useState, useEffect } from "react";
import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./showImageForCategory.css";
import { Link, useParams } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import NavbarWibu from "../../components/NavbarWibu";
import FooterWibu from "../../components/FooterWibu";
import { getRandomImageApi } from "../../services/imageServices";
function ShowImageForCategory() {
  let { categoryname } = useParams();
  console.log(categoryname);
  let url = `${window.location.origin.toString()}/showImage/`;

  let [testArr, setTest] = useState([]);
  async function fetchData() {
    const data = await getRandomImageApi(categoryname, "", "like", "20");
    console.log(data);
    setTest(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  const dataTest = [];
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

export default ShowImageForCategory;
