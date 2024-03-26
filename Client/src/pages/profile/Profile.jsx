import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./Profile.css";
import NavbarWibu from "../../components/NavbarWibu";
import getCookie from "../../hooks/getCookie";
import { Link, useParams } from "react-router-dom";
import React, { useState, useEffect, useCallback } from "react";
import { handleGetProfileApi } from "../../services/userServices";
import { getRandomImageApi } from "../../services/imageServices";
import setCookie from "../../hooks/setCookie";
function Profile() {
  let usernameC = getCookie("usr");
  let { usrID } = useParams();
  //console.log(usrID);
  //console.log(typeof(parseInt(usrID, 10)));
  //console.log(usrID);
  //let data = await handleGetProfileApi({usrID})
  //let data=test
  let url = `${window.location.origin.toString()}/showImage/`;

  //Delay
  // const [loading, setLoading] = useState(true);
  // useEffect(() => {

  //     setTimeout(() => {
  //         setLoading(false)
  //     }, 1800)

  // }, []);

  // //Fetch data
  // const [CommentArray, SetCommentArray] = useState("");
  // // declare the async data fetching function
  // useEffect(() => {
  //     axiosGet();
  // }, []);
  // async function axiosGet() {
  //     try {
  //         const data = await handleGetProfileApi(parseInt(usrID, 10));
  //         SetCommentArray(data);
  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  // if (loading) {
  //     return <div>loading...</div>
  // }
  //console.log(testArr);
  // if (loading) {
  //     return <div>loading...</div>
  // }
  //console.log(testArr);

  const [testArr, setTestArray] = useState([]);
  async function testF() {
    const data = await handleGetProfileApi(usrID);
    setCookie("imgArr", data.image);
    setTestArray(data);
    console.log(data);
    //console.log(data.image[0]);
  }
  useEffect(() => {
    testF();
    console.log("haha");
  }, []);
  return (
    <div style={{ backgroundColor: "#232946" }}>
      <NavbarWibu />
      <section className="h-100 gradient-custom-2">
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-lg-9 col-xl-7">
              <div className="card">
                <div
                  className="rounded-top text-white d-flex flex-row"
                  style={{ backgroundColor: "#000", height: "200px" }}
                >
                  <div
                    className="ms-4 mt-5 d-flex flex-column"
                    style={{ width: "150px" }}
                  >
                    <img
                      src="https://drive.google.com/uc?export=view&id=1e7tzVJ9N8lllMXNPhvwX1GxxJpDRHoxs"
                      alt="Generic placeholder image"
                      className="img-fluid img-thumbnail mt-4 mb-2"
                      style={{ width: "100px", zIndex: "1" }}
                    />
                    {/* <button
                      type="button"
                      className="btn btn-outline-dark"
                      data-mdb-ripple-color="dark"
                      style={{ zIndex: "1" }}
                    >
                      Edit profile
                    </button> */}
                  </div>
                  <div className="ms-3" style={{ marginTop: "130px" }}>
                    <h5>{usernameC}</h5>
                  </div>
                </div>
                <div
                  className="p-4 text-black"
                  style={{ backgroundColor: "#f8f9fa" }}
                >
                  <div className="d-flex justify-content-end text-center py-1">
                    <div>
                      <p className="mb-1 h5">
                        {getCookie("imgArr").split(",").length}
                      </p>
                      <p className="small text-muted mb-0">Photos</p>
                    </div>
                    {/* <div className="px-3">
                      <p className="small text-muted mb-0">Likes</p>
                    </div>
                    <div>
                      <p className="small text-muted mb-0">Stars</p>
                    </div> */}
                  </div>
                </div>
                <div className="card-body p-4 text-black">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p className="lead fw-normal mb-0">Recent photos</p>
                    {/* <p className="mb-0">
                      <a href="#!" className="text-muted">
                        Show all
                      </a>
                    </p> */}
                  </div>
                </div>

                {getCookie("imgArr")
                  .split(",")
                  .map((linkT, index) => (
                    <a href={url + linkT} key={index}>
                      <div>
                        <img
                          src={
                            "https://drive.google.com/uc?export=view&id=" +
                            linkT
                          }
                          style={{ width: "100%" }}
                        />
                      </div>
                    </a>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Profile;
