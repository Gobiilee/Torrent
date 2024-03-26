import React, { useState, useEffect } from "react";
import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./resultSearch.css";
import { Link, useParams } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from "../../components/FooterWibu";
import NavbarWibu from "../../components/NavbarWibu";
import axios from "axios";
import { toast } from "react-toastify";
import { searchApi } from "../../services/imageServices";
function ResultSearch() {
  const { keySearch } = useParams();
  console.log(keySearch);
  //const [imgID, setImg] = useState([]);
  //const urlS = `https://cnpmapi.azurewebsites.net/search/${keySearch}`;
  //let imgArr = await axios.get(urlS);
  let url = `${window.location.origin.toString()}/showImage/`;
  //[{ id: "jahdwhjdjhawhdkawd" }, { id: "hagwdhjagdhjhawgd" }];
  let [imgArr, setImg] = useState([]);
  const [initVal, setInit] = useState([]);
  async function fetchData() {
    const data = await searchApi(keySearch);
    console.log(data);
    setImg(data.data);
    //console.log(imgArr.data[0].id);
  }
  useEffect(() => {
    fetchData();
  }, initVal);
  return (
    <>
      <NavbarWibu />
      <div className="masonry-with-flex">
        {imgArr.map((linkT, index) => (
          <a href={url + imgArr[index].id}>
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
    </>
  );
}

export default ResultSearch;
