import React from 'react'
import { Button, Navbar, ListGroup, Dropdown, Carousel } from "react-bootstrap";
import logo from "../../assets/images/logo.png";
import welcome from "../../assets/images/welcome.png";
import "./about.css";
import { Link } from "react-router-dom";
import setCookie from "../../hooks/setCookie";
import getCookie from "../../hooks/getCookie";
import removeCookie from "../../hooks/removeCookie";
import NavbarWibu from '../../components/NavbarWibu';
import FooterWibu from '../../components/FooterWibu';
// Use div and class for this
// ABOUT WIBU WALLPAPER PAGE
// What is Wibu Wallpaper?
// Wibu Wallpaper is a photo sharing tool in the form of social networks, posting and classifying as emotional photos. Users create and manage photo collections by different themes, such as by events, prefer... Users can view other people's collections, "Like" photos if they like, "Star" photos you want to store, and "Report" but the photo negatively affects the community of participants.
// With the images on Wibu Wallpaper, you will always find ideas to inspire. As you discover your favorite photos, save them with "Star" to keep your ideas organized and easy to find. You can also post photos or, more broadly, a collection to share ideas with others on Wibu Wallpaper.
// Discover ideas!
// Use the search bar to discover ideas, people, and trends by keywords. Explore recommended themes or search for your own.
// Like, Save, Share and Report
// Under each photo, there will be a "Like" icon so you can express your feelings to the photo in the most direct way. "Star" a lovely star-shaped icon used to save "star" photos in your eyes. Share the photos you like with the link. This "Report" is a tool to punish the images that bring negativity to the members of this common house.
// Collection
// You can create your own collection of topics, or we will combine photos with similar topics to create the best possible collection
// OUR VALUES
// MISSION:
// THE JOURNEY OF YOUTH IS ALWAYS CONNECTED WITH THE JOURNEY OF FINDING YOUR ONE, FINDING YOUR OWN UNIQUE "I", ON THAT JOURNEY, SOMETIMES THE SOUNDS AND COLORS AROUND MAKE US A MESS, WE ARE CAUSED, FOLLOW, AND WRONG MYSELF, WHAT IS BETTER POWERFUL AND LONELY WHEN WE DON'T RECEIVE MYSELF AND REJECT MYSELF AND THAT IS THE DESIGN PHILOSOPHY OF WIBU WALLPAPER MINING IMAGES THROUGH THE EMOTION OF THE USER AND CONNECTING IT UNIQUE AND NOT TASTY, YOU CAN ALWAYS FIND AFTER EVERY IMAGE USERS SHARE IS STORIES, WE HAVE TRANSFORMED THE IMAGE LANGUAGE, THE VOICES OF YOUNGAGES WE TRANSFORMED TO PICTURE LANGUAGE PLEASE ENJOY YOUR WIBU WALLPAPER, UNDERSTAND YOUR LANGUAGE, WITH ALL CREATIVITY AND IMAGINATION BOLD, FRIVOLOUS, AND NEEDLESS
// VISION:
// WIBU WALLPAPER IS ALWAYS ORIENTED TOWARDS USER FEELING, WE ALWAYS CHANGE TO GIVE US USERS THE BEST EXPERIENCE. BESIDE, WE WILL RESEARCH THE DEVELOPMENT OF VR AND APPLICATIONS INTO SOFTWARE FROM THESE USERS CAN FEEL THE MOST TRUE EMOTION THAT PHOTOS CONTRACT
// CONTACT
// Contact us and we'll get back to you within 24 hours.
// Ho Chi Minh, VietNam
// +84 091xxxxxx
// 20127xxx@student.hcmus.edu.vn

function AboutPage() {
    return (
        <>
            <NavbarWibu />
            <div className="jumbotron text-center">
                <h1>Company</h1>
                <p>We provide you with great wallpaper for your devices</p>
            </div>
            <div id="about" className="pag">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>About Wibu Wallpaper Page</h2><br />
                        <h4>What is Wibu Wallpaper?</h4>
                        <p>Wibu Wallpaper is a photo sharing tool in the form of social networks, posting and classifying as emotional photos.
                            Users create and manage photo collections by different themes, such as by events,
                            prefer...
                            Users can view other people's collections, "Like" photos if they like, "Star" photos you want to store,
                            and "Report" but the photo negatively affects the community of participants.
                        </p><br />
                        <p>
                            With the images on Wibu Wallpaper, you will always find ideas to inspire.
                            As you discover your favorite photos, save them with "Star" to keep your ideas organized and easy to find.
                            You can also post photos or, more broadly, a collection to share ideas with others on Wibu Wallpaper.
                        </p><br />
                        <h4>Discover ideas!</h4>
                        <p>
                            Use the search bar to discover ideas, people, and trends by keywords.
                            Explore recommended themes or search for your own.
                        </p><br />
                        <h4>Like, Save, Share and Report</h4>
                        <p>
                            Under each photo, there will be a "Like" icon so you can express your feelings to the photo in the most direct way.
                            "Star" a lovely star-shaped icon used to save "star" photos in your eyes.
                            Share the photos you like with the link.
                            This "Report" is a tool to punish the images that bring negativity to the members of this common house.
                        </p><br />
                        <h4>Collection</h4>
                        <p>
                            You can create your own collection of topics,
                            or we will combine photos with similar topics to create
                            the best possible collection
                        </p><br />
                    </div>
                    <div className="col-sm-4">
                        <span className="xxxx ảnh"></span>
                    </div>
                </div>
            </div>

            <div className="page2 bg-grey">
                <div className="row">
                    <div className="col-sm-4">
                        <span className="glyphicon glyphicon-globe logo slideanim"></span>
                    </div>
                    <div className="col-sm-8">
                        <h2>Our Values</h2><br />
                        <h4>MISSION: </h4>
                        <p>
                            THE JOURNEY OF YOUTH IS ALWAYS CONNECTED WITH THE JOURNEY OF FINDING YOUR ONE, FINDING YOUR OWN UNIQUE "I",
                            ON THAT JOURNEY, SOMETIMES THE SOUNDS AND COLORS AROUND MAKE US A MESS, WE ARE CAUSED, FOLLOW,
                            AND WRONG MYSELF, WHAT IS BETTER POWERFUL AND LONELY WHEN WE DON'T RECEIVE MYSELF AND REJECT MYSELF
                            AND THAT IS THE DESIGN PHILOSOPHY OF WIBU WALLPAPER MINING IMAGES THROUGH THE EMOTION OF THE USER AND CONNECTING IT
                            UNIQUE AND NOT TASTY, YOU CAN ALWAYS FIND AFTER EVERY IMAGE USERS SHARE IS STORIES,
                            WE HAVE TRANSFORMED THE IMAGE LANGUAGE, THE VOICES OF YOUNGAGES WE TRANSFORMED TO PICTURE LANGUAGE PLEASE ENJOY YOUR WIBU WALLPAPER, UNDERSTAND YOUR LANGUAGE,
                            WITH ALL CREATIVITY AND IMAGINATION BOLD, FRIVOLOUS, AND NEEDLESS

                        </p><br />
                        <h4>VISION: </h4>
                        <p>
                            WIBU WALLPAPER IS ALWAYS ORIENTED TOWARDS USER FEELING,
                            WE ALWAYS CHANGE TO GIVE US USERS THE BEST EXPERIENCE.
                            BESIDE, WE WILL RESEARCH THE DEVELOPMENT OF VR AND APPLICATIONS INTO SOFTWARE FROM THESE USERS CAN FEEL
                            THE MOST TRUE EMOTION THAT PHOTOS CONTRACT
                        </p>
                    </div>
                </div>
            </div>
            <div id="contact" className="container-fluid bg-grey ">
                <h2 className="text-center">CONTACT</h2>
                <p className="text-center">Contact us and we'll get back to you within 24 hours.</p>
                <p className="text-center">Ho Chi Minh, VietNam</p>
                <p className="text-center">+84 091xxxxxxx</p>
                <p className="text-center">20127xxx@student.hcmus.edu.vn</p>
            </div>
            <div className="bg-light py-5">
                <div className="container py-5">
                    <div className="row mb-4">
                        <h2 className="display-4 font-weight-light text-center">Our team</h2>
                    </div>

                    <div className="row text-center">
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img
                                src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100"
                                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Lê Anh Kiệt - 20127542</h5><span className="small text-uppercase text-muted">Project manager, Developer (Front end), Data analysis</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i
                                        className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img
                                src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100"
                                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Trần Tiến Hoàng - 20127424</h5><span className="small text-uppercase text-muted">Developer (Back end), Data analysis</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i
                                        className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img
                                src="https://bootstrapious.com/i/snippets/sn-about/avatar-2.png" alt="" width="100"
                                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Lê Võ Huỳnh Thanh - 20127072</h5><span className="small text-uppercase text-muted">Developer (Front end), Data manager, Designer (UI prototype)</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i
                                        className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img
                                src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100"
                                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Nguyễn Quốc Thắng - 20127627</h5><span className="small text-uppercase text-muted">Developer (Back end), Tester </span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i
                                        className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-3 col-sm-6 mb-5">
                            <div className="bg-white rounded shadow-sm py-5 px-4"><img
                                src="https://bootstrapious.com/i/snippets/sn-about/avatar-1.png" alt="" width="100"
                                className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" />
                                <h5 className="mb-0">Lâm Kim Nhân - 20127579</h5><span className="small text-uppercase text-muted">Developer (Front end), Tester</span>
                                <ul className="social mb-0 list-inline mt-3">
                                    <li className="list-inline-item"><a href="#" className="social-link"><i
                                        className="fa fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-twitter"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-instagram"></i></a>
                                    </li>
                                    <li className="list-inline-item"><a href="#" className="social-link"><i className="fa fa-linkedin"></i></a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <img src="" className="w3-image w3-greyscale-min" style={{ width: "100%" }}></img>
            <FooterWibu />
        </>
    )
}

export default AboutPage