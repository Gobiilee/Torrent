import React, { useState, useEffect } from "react";
import {
  Button,
  Navbar,
  ListGroup,
  Dropdown,
  Carousel,
  Card,
  Col,
  Row,
} from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./showCategory.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import NavbarWibu from "../../components/NavbarWibu";
import FooterWibu from "../../components/FooterWibu";
import { getCategoryValues } from "../../services/imageServices";
function ShowCategory() {
  // const textData = ["Tile 1", "Title 2", "Title 3", "Ttile 4"];
  // const linkI = [
  //   "https://drive.google.com/uc?export=view&id=19hEWuwRILVFcDOBF9sq5yTnrjS8sydN5",
  //   "https://drive.google.com/uc?export=view&id=1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs",
  //   "https://drive.google.com/uc?export=view&id=1FjK29ynIxF7_lwlgBmXnus1QnnSaJisw",
  //   "https://drive.google.com/uc?export=view&id=1Gc7DBQu4wVB8QHnx9vkpVed6K70jarbj",
  //   "https://drive.google.com/uc?export=view&id=1kZRUVTNQz7c6YgXVbMwypuKHAwKfP6U-",
  //   "https://drive.google.com/uc?export=view&id=1NKOgbzaWDoErzZ4pdDtL5bwkT-X5RBC3",
  //   "https://drive.google.com/uc?export=view&id=1pCBHAAyNPKnHVBqyPxXHNfxjyRmTSa6s",
  //   "https://drive.google.com/uc?export=view&id=1SGLs3sys1jpxuOlwWYbJw-Dgd93jNJjv",
  //   "https://drive.google.com/uc?export=view&id=1z1R4pttq4Tz_t5tRzZq7LBbvMgK971k5",
  //   "https://drive.google.com/uc?export=view&id=1ZS6bffKrJtOMspWYaL-yrwYSeGAnYRTK",
  // ];
  let url = `${window.location.origin.toString()}/showimageforcategory/`;
  const [fakeImg, setFake] = useState([
    "1oypnjE-ewRLdBpXUpCAqOv2LJtnn_tMo",
    "1SGLs3sys1jpxuOlwWYbJw-Dgd93jNJjv",
    "1TAso8UAO-mrXRi7CLNpo8gKbTRkVdZ2o",
    "1NKOgbzaWDoErzZ4pdDtL5bwkT-X5RBC3",
    "1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs",
    "1pCBHAAyNPKnHVBqyPxXHNfxjyRmTSa6s",
    "1K8WHBYRS-u-R5QjuJixy2Ej4XWD_MrAz",
    "1AeoUYZOfqu0yoadEESk1CKGlwlHn0b9K",
    "1vbmOybQYp9k1Q-WXQTRCphW0LmEFjnKr",
    "1sWL77fF7ma3d9iaPCXhyj2vyrsuG4fPA",
  ]);
  const [textData, setTextData] = useState([]);
  const [linkI, setImg] = useState([]);
  const [initLoad, setInitLoad] = useState([]);
  async function fetchData() {
    let data = await getCategoryValues();
    console.log(data);
    setTextData(data.name);
    setImg(data.id);
  }
  useEffect(
    () => {
      fetchData();
    },
    { initLoad }
  );
  return (
    <div id="all">
      <NavbarWibu />
      <Row xs={1} md={2} className="g-4">
        {textData.map((titleT, index) => (
          <Col>
            <a
              href={url + titleT}
              style={{ textDecoration: "none", color: "black" }}
            >
              <Card>
                <Card.Img
                  variant="top"
                  src={
                    "https://drive.google.com/uc?export=view&id=" +
                    fakeImg[index]
                  }
                  style={{ maxHeight: "50vh", maxWidth: "100%" }}
                />
                <Card.Body>
                  <Card.Title>{titleT}</Card.Title>
                  <Card.Text>
                    This is a longer card with supporting text below as a
                    natural lead-in to additional content. This content is a
                    little bit longer.
                  </Card.Text>
                </Card.Body>
              </Card>
            </a>
          </Col>
        ))}
      </Row>

      <FooterWibu />
    </div>
  );
}

export default ShowCategory;
