import {
  Button,
  Navbar,
  ListGroup,
  Dropdown,
  Carousel,
  Card,
} from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./ShowImage.css";
import { Link, useParams } from "react-router-dom";
import NavbarWibu from "../../components/NavbarWibu";
import {
  FaQuestion,
  FaUser,
  FaKey,
  FaDownload,
  FaShareAlt,
  FaThumbsUp,
  FaRegStar,
  FaRegFlag,
} from "react-icons/fa";
import CommentSection from "../../components/CommentSection";
import FooterWibu from "../../components/FooterWibu";
import { toast } from "react-toastify";
import { showImageApi } from "../../services/imageServices";
import React, { useState, useEffect, useCallback } from "react";
import { sendComment } from "../../services/imageServices";
import { likeImage } from "../../services/imageServices";
import { starImage } from "../../services/imageServices";
import getCookie from "../../hooks/getCookie";
import setCookie from "../../hooks/setCookie";
import { getDataImg } from "../../services/imageServices";
import { reportImg } from "../../services/imageServices";
import { checkLikeStar } from "../../services/imageServices";
import { dislikeImage } from "../../services/imageServices";
import { disstarImage } from "../../services/imageServices";
import { getAlternative } from "../../services/imageServices";
function ShowImage() {
  const { imgID } = useParams();
  //console.log(imgID);
  let url = `${window.location.origin.toString()}/showImage/`;
  let urlUSR = `${window.location.origin.toString()}/profile/`;
  setCookie("backPage", imgID);
  const linkDrive = "https://drive.google.com/uc?export=view&id=";

  //let data = await showImageApi({ imgID });
  //console.log(imgID);

  // //Delay
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {

  //     setTimeout(() => {
  //         setLoading(false)
  //     }, 1500)

  // }, []);

  // //Fetch data
  // const [CommentArray, SetCommentArray] = useState("");
  // // declare the async data fetching function
  // useEffect(() => {
  //     axiosGet();
  // }, []);
  // async function axiosGet() {
  //     const data = await showImageApi({ imgID });;
  //     SetCommentArray(data);
  // }

  // if (loading) {
  //     return <div>loading...</div>
  // }
  //console.log(url);
  //console.log(CommentArray);
  let [likeN, setLikeN] = useState(0);
  let [starN, setStarN] = useState(0);
  let [titleImg, setTile] = useState("");
  let [desImg, setDesImg] = useState("");
  let [authorImg, setAuthor] = useState("");
  let [reportImgNumber, setReportI] = useState(0);
  let [isLiked, setIsLiked] = useState(0);
  let [isStared, setIsStared] = useState(0);
  const [alternativeID, setAlternative] = useState([]);
  async function getData() {
    const data = await showImageApi(imgID);
    setLikeN(data.like);
    setStarN(data.star);
    console.log(data);
    const data3 = await getAlternative(imgID);
    //console.log(data3);
    setAlternative(data3.idImageAlter);
    console.log(data3);
  }
  async function likeImg() {
    // const data = await likeImage(imgID);
    // console.log(data);
    // setLikeN(likeN + 1);
    if (isLiked == 0) {
      const data = await likeImage(imgID);
      console.log(data);
      setLikeN(likeN + 1);
      setIsLiked(1);
    } else {
      const data = await dislikeImage(imgID);
      console.log(data);
      setLikeN(likeN - 1);
      setIsLiked(0);
    }
  }
  async function starImg() {
    // const data = await starImage(imgID);
    // console.log(data);
    // setStarN(starN + 1);
    if (isStared == 0) {
      const data = await starImage(imgID);
      console.log(data);
      setStarN(starN + 1);
      setIsStared(1);
    } else {
      const data = await disstarImage(imgID);
      console.log(data);
      setStarN(starN - 1);
      setIsStared(0);
    }
  }
  async function reportI() {
    const data = await reportImg(imgID);
    console.log(data);
    setReportI(reportImgNumber + 1);
  }
  function warningLogin() {
    toast.dark("Please login/register to use this function");
  }
  function AlternativeButton() {
    if (alternativeID.length != 0) {
      return (
        <>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a
            href={
              "https://drive.google.com/uc?export=download&id=" +
              alternativeID[0]
            }
          >
            <FaDownload className="icon" size={25} color={"#EEBBC3"} />
          </a>
        </>
      );
    }
  }
  function UtilityBar(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn == 1) {
      return (
        <div className="utilityBar">
          <FaThumbsUp
            className="icon"
            size={25}
            color={"#EEBBC3"}
            onClick={() => likeImg()}
          />
          &nbsp;&nbsp;
          <div style={{ color: "white", display: "inline" }}>{likeN}</div>
          {/* {data.like} */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaRegStar
            className="icon"
            size={25}
            color={"#EEBBC3"}
            onClick={() => starImg()}
          />
          &nbsp;&nbsp;
          <div style={{ color: "white", display: "inline" }}>{starN}</div>
          {/* {data.star} */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={"https://drive.google.com/uc?export=download&id=" + imgID}>
            <FaDownload className="icon" size={25} color={"#EEBBC3"} />
          </a>
          <AlternativeButton />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaShareAlt
            className="icon"
            size={25}
            color={"#EEBBC3"}
            onClick={() => {
              navigator.clipboard.writeText(url + imgID);
              toast.dark("Copied to clipboard");
            }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaRegFlag
            className="icon"
            size={25}
            color={"#EEBBC3"}
            onClick={() => reportI()}
          />
          &nbsp;&nbsp;
          <div style={{ color: "white", display: "inline" }}>
            {reportImgNumber}
          </div>
        </div>
      );
    } else {
      return (
        <div className="utilityBar">
          <FaThumbsUp
            className="icon"
            size={25}
            color={"#EEBBC3"}
            onClick={() => warningLogin()}
          />
          &nbsp;&nbsp;
          <div style={{ color: "white", display: "inline" }}>{likeN}</div>
          {/* {data.like} */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaRegStar
            className="icon"
            size={25}
            color={"#EEBBC3"}
            onClick={() => warningLogin()}
          />
          &nbsp;&nbsp;
          <div style={{ color: "white", display: "inline" }}>{starN}</div>
          {/* {data.star} */}
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={"https://drive.google.com/uc?export=download&id=" + imgID}>
            <FaDownload className="icon" size={25} color={"#EEBBC3"} />
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaShareAlt
            className="icon"
            size={25}
            color={"#EEBBC3"}
            onClick={() => {
              navigator.clipboard.writeText(url + imgID);
              toast.dark("Copied to clipboard");
            }}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <FaRegFlag
            className="icon"
            size={25}
            color={"#EEBBC3"}
            onClick={() => warningLogin()}
          />
          &nbsp;&nbsp;
          <div style={{ color: "white", display: "inline" }}>
            {reportImgNumber}
          </div>
        </div>
      );
    }
  }
  async function getDataOfImg() {
    const data = await getDataImg(imgID);
    //console.log(data);
    setTile(data.image.imageName);
    setDesImg(data.image.description);
    setReportI(data.image.numOfReport);
    setAuthor(data.image.idUser);
    if (data.image.description == null) {
      setDesImg("No description for this image");
    }
    if (getCookie("logged") == 1) {
      const data2 = await checkLikeStar(imgID);
      setIsLiked(data2.like);
      setIsStared(data2.star);
      //console.log(data2);
    }
    //console.log(alternativeID.length);
  }
  useEffect(() => {
    getData();
    getDataOfImg();
  }, []);
  return (
    <div id="showImageBody">
      <NavbarWibu />
      <img
        src={"https://drive.google.com/uc?export=view&id=" + imgID}
        alt="Image 1"
        className="rounded mx-auto d-block"
        id="idShowImage"
      />
      <div id="titleText">{titleImg}</div>
      <UtilityBar isLoggedIn={getCookie("logged")} />
      <br />
      <div style={{ padding: "3rem" }}>
        <Card className="descriptionBox">
          <Card.Body>
            {/* <Card.Title>Description</Card.Title>
            <Card.Text>Uploader:</Card.Text>
            <Card.Text>Id:</Card.Text> */}
            <Card.Text>
              <a href={urlUSR + authorImg}>Author</a>
            </Card.Text>
            <Card.Text>{desImg}</Card.Text>
          </Card.Body>
        </Card>
      </div>
      <CommentSection />
      <FooterWibu />
    </div>
  );
}

export default ShowImage;
