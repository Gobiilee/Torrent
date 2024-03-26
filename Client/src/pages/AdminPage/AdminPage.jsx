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
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./AdminPage.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import FooterWibu from "../../components/FooterWibu";
import NavbarWibu from "../../components/NavbarWibu";
import dataTest from "./testData";
import React, { useEffect, useState } from "react";
import { getDataImg, getRandomImageApi } from "../../services/imageServices";
import { deleteImg } from "../../services/imageServices";
function AdminPage() {
  const [imgID, setimgID] = useState([]);
  const [numberOfReport, setRP] = useState([]);
  let [tempVal, setTempVal] = useState(0);
  const [wtf, setWtf] = useState([0]);
  //const numberOfReport = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  // const imgID = [
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
  async function getRP(imgID) {
    const dataI = await getDataImg(imgID);
    setTempVal(dataI.image.numOfReport);
    //console.log(dataI.image.numOfReport);
    return tempVal;
  }
  async function testF() {
    const data = await getRandomImageApi("", "", "like", "60");
    setimgID(data);
    console.log(data);
    //console.log(data);
  }
  async function deleteImgF(thisID) {
    //console.log(thisID);
    const data = await deleteImg(thisID);
    console.log(data);
  }

  useEffect(() => {
    testF();
  }, []);
  return (
    <>
      <NavbarWibu />
      <Container>
        <Row>
          <Col id="divCol">Link</Col>
          <Col id="divCol">Number of reports</Col>
          <Col id="divCol">Delete command</Col>
        </Row>
        {imgID.map((linkT, index) => (
          <div key={imgID[index].id}>
            <Row>
              <Col id="divCol">
                {/* {url + imgID[index].id} */}
                <a href={url + imgID[index].id}>
                  <img
                    src={
                      "https://drive.google.com/uc?export=view&id=" +
                      imgID[index].id
                    }
                    style={{ maxWidth: "50%" }}
                  />
                </a>
              </Col>
              <Col id="divCol">{imgID[index].numOfReport}</Col>
              <Col id="divCol">
                <Button id="btnS" onClick={() => deleteImgF(imgID[index].id)}>
                  Delete
                </Button>
              </Col>
            </Row>
          </div>
        ))}
      </Container>
      <FooterWibu />
    </>
  );
}

export default AdminPage;
