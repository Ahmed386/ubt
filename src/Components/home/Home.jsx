import React, { useState, useRef, useEffect } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import Carousel from 'react-multi-carousel';
import OwlCarousel from "react-owl-carousel";
import "../../../node_modules/owl.carousel/dist/assets/owl.carousel.min.css";
import "../../../node_modules/owl.carousel/dist/assets/owl.theme.default.min.css";

import { Link, useLocation } from "react-router-dom";
import Projectdetails from "../projects/Projectdetails";
import { projects } from "../../data/projects";
import { FreeMode, Pagination } from "swiper";
import { useMediaQuery } from "@mui/material";

export default function Home() {
  //****************** Vars ***************/
  const location = useLocation();
  const aboutRef = useRef();
  const proRef = useRef(null);

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const teamList = [
    {
      avatar: "staff/staff-5.png (1).png",
      name: "Hugo Bob",
      job: "	constructor",
    },
    {
      avatar: "staff/staff1.png (1).png",
      name: "Shezuka Li",
      job: "		engineer  ",
    },
    {
      avatar: "staff/staff-5.png (1).png",
      name: "Hugo Bob",
      job: "	constructor",
    },
    {
      avatar: "staff/staff1.png (1).png",
      name: "Shezuka Li",
      job: "		engineer  ",
    },
  ];

  useEffect(() => {
    if (location.hash === "#aboutUs") {
      window.scrollTo(0, aboutRef?.current?.offsetTop);
    }
    if (location.hash === "#ourprojects") {
      window.scrollTo(0, proRef?.current?.offsetTop + 200);
    }
  }, [location.hash]);

  const matches = useMediaQuery("(max-width:900px)");
  //****************** States**************/
  const [openProject, setOpenProject] = useState(false);
  const [currentProject, setCurrentProject] = useState();
  const [List, setList] = useState(teamList);

  return (
    <>
      <div className="landingsection ">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-lg-4 backu">
              <img src="U.png" className="w-100" alt="" />
              <div className=" position-absolute headingtitle ">
                <h1 className="text-white mb-4   ">
                  Construction <br /> you can <br /> count on.{" "}
                </h1>
                <small className="text-white headingbreef  ">
                  {" "}
                  We provide a complete service for the sale, purchase or <br />{" "}
                  rental, We have been operating in Madrid and Barcelona <br />{" "}
                  more than 15 years.
                </small>
              </div>
            </div>
            <div className="col-lg-8 landingbg position-relative p-0">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img
                      src="Subtract.png"
                      className="w-100"
                      alt="landing photo"
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src="Exclude.png"
                      className="w-100"
                      alt="landing photo"
                    />
                  </div>
                </div>
                <div className="arrowicon position-absolute d-flex    ">
                  <i
                    className="fa-solid fa-chevron-left fa-3x text-white-50  carousel-control-prev"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                  ></i>
                  <i
                    className="fa-solid fa-chevron-right fa-3x text-white-50 carousel-control-next"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="brands mt-5 pb-4">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-2 text-sm-center p-lg-0 p-sm-4 ">
                <img src="brands/Rectangle 164.png" alt="" />
              </div>
              <div className="col-lg-2 text-sm-center p-lg-0 p-sm-4 ">
                <img src="brands/Rectangle 165.png" alt="" />
              </div>
              <div className="col-lg-2 text-sm-center p-lg-0 p-sm-4 ">
                <img src="brands/Rectangle 168.png" alt="" />
              </div>
              <div className="col-lg-2 text-sm-center p-lg-0 p-sm-4 ">
                <img src="brands/Rectangle 167.png" alt="" />
              </div>
              <div className="col-lg-2 text-sm-center p-lg-0 p-sm-4 ">
                <img src="brands/Rectangle 166.png" alt="" />
              </div>
              <div className="col-lg-2 text-sm-center p-lg-0 p-sm-4 ">
                <img src="brands/Rectangle 169.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondsection py-5 px-4" id="aboutUs" ref={aboutRef}>
        <div className="container-fluid ">
          <div className="row justify-content-between align-items-center">
            <div className="col-lg-6">
              <img src="Img 1.png" className="w-100" alt="" />
            </div>
            <div className="col-lg-6 p-4">
              <div className="content">
                <small className="firstline text-uppercase">
                  what we offer
                </small>
                <p className="secondline mt-2 ">
                  Providing solutions for <br /> construction, management,{" "}
                  <br /> and restoration.
                </p>
                <p className="text-black-50 contentbreef  ">
                  We are a long-established, independent building services and
                  home improvements company. We have a wealth of experience
                  working as main building contractors on all kinds of projects,
                  big and small, from home maintenance and improvements to
                  extensions, refurbishments. One of the most upgrading and
                  promising companies in Egypt. In February 2010, UBTC was
                  established as an Egyptian joint-stock company subject to the
                  companies' establishment law no.159 for the year 1981. UBTC
                  was established with an authorized capital of 10 millions
                  Egyptian pounds.
                </p>
                <Link
                  className="text-white text-decoration-none btn btn-danger px-5 secondsectionbtn"
                  to="/contact"
                >
                  Contact US
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="thirdsection px-5 py-5 mb-5">
        <div className="container-fluid">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5">
              <p className="thirdsectionfline text-uppercase">
                Building Services
              </p>
              <p className="thirdsectionbreef mt-2">
                We are creating places that are both funcional and visually
                pleasing
              </p>
            </div>
            <div className="col-lg-7">
              <img src="img 2.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className=" fourthsection py-5 position-relative w-100" ref={proRef}>
        {matches ? (
          // "Render Carousel Here"
          <Swiper
            breakpoints={{
              300: {
                width: 300,
                slidesPerView: 1,
              },
              500: {
                width: 500,
                slidesPerView: 2,
              },
              767: {
                width: 767,
                slidesPerView: 3,
              },
            }}
            spaceBetween={30}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="mySwiper"
          >
            <SwiperSlide className="p">
              <div className="card mb-3 text-start bg-white px-3  mb-3 shadow ">
                <div className="w-25 rounded-circle bg-black mb-2 d-flex p-1 justify-content-center">
                  <img
                    src="cardicons/Capa_1.png"
                    className=" w-75 rounded-circle"
                    alt="cardicon"
                  />
                </div>
                <p className="cardtitle">Finishing</p>
                <small className="cardbreef text-black-50">
                  The stage of works which is final, significant and giving the
                  premises its due spender in appearance. Finishing work is very
                  important in the final stages of construction.
                </small>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-3 text-start bg-white px-3  mb-3 shadow ">
                <div className="w-25 p-1 rounded-circle  bg-black mb-2 d-flex justify-content-center">
                  <img
                    src="cardicons/_x30_42---Reinforced-Concrete.png"
                    className=" w-75 "
                    alt="cardicon"
                  />
                </div>
                <p className="cardtitle">Concrete</p>
                <small className="cardbreef text-black-50">
                  Our concrete experts have the equipment and experience needed
                  to design, pour and stamp all kinds of concrete features. The
                  project introduces the world’s first and largest mountain-top
                  lagoon.
                </small>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-3 text-start bg-white px-3  mb-5 shadow ">
                <div className="w-25 p-1 rounded-circle bg-black mb-2 d-flex justify-content-center">
                  <img
                    src="cardicons/Frame.png"
                    className=" w-75 rounded-circle frame"
                    alt="cardicon"
                  />
                </div>
                <p className="cardtitle">Mep</p>
                <small className="cardbreef text-black-50">
                  Mechanical, electrical and plumbing engineering. These three
                  technical disciplines encompass the systems that make building
                  interiors suitable for human occupancy.
                </small>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="card mb-3 text-start bg-white px-3 shadow ">
                <div className="w-25 p-1 rounded-circle bg-black mb-2 d-flex justify-content-center">
                  <img
                    src="cardicons/Capa_3.png"
                    className=" w-75 rounded-circle"
                    alt="cardicon"
                  />
                </div>
                <p className="cardtitle">Landscape</p>
                <small className="cardbreef text-black-50">
                  Carry out foundational work, such as laying drainage or
                  installing irrigation systems. Also may reshape the landscape
                  and create special features. The project introduces the
                  world’s largest mountain-top lagoon.
                </small>
              </div>
            </SwiperSlide>
          </Swiper>
        ) : (
          <>
            <div className="cards  position-absolute start-0 end-0 w-100   d-md-block  ">
              <div className="container  cardcontainer">
                <div className="row justify-content-center rowcardwidth">
                  <div className="col-md-6 col-lg-3 cardmargin  ">
                    <div className="card mb-3 text-start bg-white px-3 py-5  mb-3 shadow ">
                      <div className="w-25 rounded-circle bg-black mb-2 d-flex p-1 justify-content-center">
                        <img
                          src="cardicons/Capa_1.png"
                          className=" w-75 rounded-circle"
                          alt="cardicon"
                        />
                      </div>
                      <p className="cardtitle">Finishing</p>
                      <small className="cardbreef text-black-50">
                        The stage of works which is final, significant and
                        giving the premises its due spender in appearance.
                        Finishing work is very important in the final stages of
                        construction.
                      </small>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 cardmargin ">
                    <div className="card mb-3 text-start bg-white px-3 py-5 mb-3 shadow ">
                      <div className="w-25 p-1 rounded-circle  bg-black mb-2 d-flex justify-content-center">
                        <img
                          src="cardicons/_x30_42---Reinforced-Concrete.png"
                          className=" w-75 "
                          alt="cardicon"
                        />
                      </div>
                      <p className="cardtitle">Concrete</p>
                      <small className="cardbreef text-black-50">
                        Our concrete experts have the equipment and experience
                        needed to design, pour and stamp all kinds of concrete
                        features. The project introduces the world’s first and
                        largest mountain-top lagoon.
                      </small>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 cardmargin ">
                    <div className="card mb-3 text-start bg-white px-3 py-5 mb-5 shadow ">
                      <div className="w-25 p-1 rounded-circle bg-black mb-2 d-flex justify-content-center">
                        <img
                          src="cardicons/Capa_3.png"
                          className=" w-75 rounded-circle"
                          alt="cardicon"
                        />
                      </div>
                      <p className="cardtitle">Mep</p>
                      <small className="cardbreef text-black-50">
                        Mechanical, electrical and plumbing engineering. These
                        three technical disciplines encompass the systems that
                        make building interiors suitable for human occupancy.
                      </small>
                    </div>
                  </div>
                  <div className="col-md-6 col-lg-3 cardmargin ">
                    <div className="card mb-3 text-start bg-white px-3 py-5 mb-5 shadow ">
                      <div className="w-25 rounded-circle bg-black mb-2 d-flex justify-content-center">
                        <img
                          src="cardicons/Frame.png"
                          className=" w-100 rounded-circle frame"
                          alt="cardicon"
                        />
                      </div>
                      <p className="cardtitle">Landscape</p>
                      <small className="cardbreef text-black-50">
                        Carry out foundational work, such as laying drainage or
                        installing irrigation systems. Also may reshape the
                        landscape and create special features. The project
                        introduces the world’s largest mountain-top lagoon.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        <div className="fourthsectioncontent py-5 " id="ourprojects">
          <div className="py-5 mt-5">
            <div className="container feature ">
              <small className=" text-uppercase ourprojects ">
                Our projects
              </small>
              <h2 className="text-white mt-2 featureprojects">
                Feature Projects
              </h2>
            </div>
          </div>
          <div className="w-100 overflowhidden projectswrapper">
            <div className="w-75 ms-auto projectcarouselwrapper ">
              <div className="">
                <Swiper
                  breakpoints={{
                    200: {
                      width: 200,
                      slidesPerView: 1,
                    },
                    500: {
                      width: 500,
                      slidesPerView: 1,
                    },
                    767: {
                      width: 767,
                      slidesPerView: 2,
                    },
                  }}
                  slidesPerView={3}
                  spaceBetween={30}
                  loop={true}
                  freeMode={true}
                  pagination={{
                    clickable: true,
                  }}
                  modules={[FreeMode, Pagination]}
                  className="mySwiper"
                >
                  {projects.map((project, index) => (
                    <SwiperSlide className="p" key={index}>
                      <div>
                        <Link
                          to={`/project/${project.id}`}
                          className="text-decoration-none"
                        >
                          <div
                            className=" item  "
                            onClick={() => {
                              setCurrentProject(index);
                              setOpenProject(true);
                            }}
                          >
                            <div className=" rounded bg-white  text-start ">
                              <img
                                className="w-100 rounded"
                                src={project.image}
                                alt="foukabay"
                              />
                              <div className="p-3 " id="projectwhitespace">
                                <h6 className=" mb-0 text-black project-h6">
                                  {project.title}
                                </h6>
                                <small className="projsubtitle d-block mb-2 ">
                                  {project.subtitle}{" "}
                                </small>

                                <small className=" projbreef">
                                  {project.breef}
                                </small>
                              </div>
                            </div>
                          </div>
                        </Link>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
        </div>
        
        <div className="container-fluid ">
          <div className="redvector mb-4  w-25 ">
            <img src="Vector 35.png " className=" me-3 " alt="" />
            <img src="Vector 36.png " className=" " alt="" />
          </div>
          <div className="row">
            <div className="col-lg-4 px-5">
              <p className="text-uppercase mt-3 peoplesay">what People Say</p>
              <h2 className="text-white clienttalk px-0">Client's Talk</h2>
              <small className=" clienttalkbreef">
                We have a wealth of experience working as main building
                contractors on all kinds of projects, big and small, from home
                maintenance and improvements to extensions, refurbishments{" "}
                <br /> and new builds.
              </small>
            </div>
            <div className="col-lg-8 ">
              <div className="row ">
                <div className="col-lg-6">
                  <div className=" p-4 bg-white bubble5 my-lg-0 my-3">
                    <p className="peopleopinion">
                      I noticed one thing: it's very productive to discuss a
                      project with pople who have technical background. I forgot
                      how to explain obvious technical things that often happen
                      with more humanitarian people and just get more done.
                    </p>
                    <img
                      src="brands/Tatwwer-Misr.png"
                      className="w-50"
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className=" p-4 bg-white bubble5 my-lg-0 my-3">
                    <p className="peopleopinion">
                      I noticed one thing: it's very productive to discuss a
                      project with pople who have technical background. I forgot
                      how to explain obvious technical things that often happen
                      with more humanitarian people and just get more done.
                    </p>
                    <img
                      src="brands/seashell-luxury-villas-egypt-m (2).png"
                      className=" seashell"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="fifthsection  py-5">
        <div className="py-5">
          <div className="heading text-center">
            <h6 className="text-uppercase fs-5">our team</h6>
            <h2>Meet our staff</h2>
          </div>
          <div className="staff py-5 ">
            <div className="container mt-5">
              <div className="row">
                {matches ? (
                  <Swiper
                    breakpoints={{
                      500: {
                        width: 500,
                        slidesPerView: 2,
                      },
                      767: {
                        width: 767,
                        slidesPerView: 3,
                      },
                    }}
                    spaceBetween={30}
                    freeMode={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[FreeMode, Pagination]}
                    className="mySwiper"
                  >
                    {List.map((teammember, i) => (
                      <SwiperSlide key={i} className="p">
                        <div className="">
                          <div className="member position-relative mb-3 bg-white shadow  py-5 px-4 text-center">
                            <div className="position-absolute reddot"></div>
                            <div className="mb-3">
                              <img src={teammember.avatar} alt="" />
                            </div>
                            <h2 className="">{teammember.name}</h2>
                            <h6 className="text-black-50 text-uppercase">
                              {teammember.job}
                            </h6>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                ) : (
                  List.map((teammember, i) => (
                    <div key={i} className="col-md-6 col-lg-3">
                      <div className="member position-relative mb-3 bg-white shadow  py-5 px-4 text-center">
                        <div className="position-absolute reddot"></div>
                        <div className="mb-4">
                          <img src={teammember.avatar} alt="" />
                        </div>
                        <h2 className="mt-2">{teammember.name}</h2>
                        <h6 className="text-black-50 text-uppercase">
                          {teammember.job}
                        </h6>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="lastsection py-5 text-center ">
        <div>
          <h2 className="text-white">Contact Us</h2>
          <p className=" ">
            Get notified about updates and be the first to get early access{" "}
            <br /> to new episodes.
          </p>
          <Link
            className="text-white text-decoration-none btn btn-danger px-5"
            to="/contact"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
}
