import React, { useState, useEffect } from "react";
import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./StarPage.css";
import { Link, useParams } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from "../../components/FooterWibu";
import NavbarWibu from "../../components/NavbarWibu";
import axios from "axios";
import { toast } from "react-toastify";
import { searchApi } from "../../services/imageServices";
import { getStared } from "../../services/imageServices";
function StarPage() {
  let url = `${window.location.origin.toString()}/showImage/`;
  const [imgArr, setImg] = useState([]);
  async function fetchData() {
    const data = await getStared();
    setImg(data);
    console.log(data);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      <NavbarWibu />
      <div className="masonry-with-flex">
        {imgArr.map((linkT, index) => (
          <a href={url + imgArr[index]}>
            <div>
              <img
                src={
                  "https://drive.google.com/uc?export=view&id=" + imgArr[index]
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

export default StarPage;
