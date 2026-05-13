import { Link } from "react-router-dom";
import Footer from "../Commen/Footer";
import Header from "../Commen/Header";
import { useEffect, useState } from "react";
import axios from "axios";

function Home() {
  return (
    <>
      <Header />
      <Component1 />
      <Component2 />
      <Component3 />
      <Component4 />
      <Footer />
    </>
  );
}
function Component1() {
  return (
    <>
      <div className="th-hero-wrapper hero-3" id="hero">
        <div
          className="th-hero-bg"
          style={{ backgroundImage: "url('/assets/img/hero/hero-bg3-1.png')" }}
        />
        <div className="container">
          <div className="hero-style3">
            <span
              className="sub-title custom-anim-left wow"
              data-wow-duration="1.2s"
              data-wow-delay="0.1s"
            >
              Play, Improve &amp; Win
            </span>
            <h1
              className="hero-title custom-anim-left wow"
              data-wow-duration="1.2s"
              data-wow-delay="0.2s"
            >
              Online Fantasy
            </h1>
            <h1
              className="hero-title style2 text-theme custom-anim-left wow"
              data-wow-duration="1.2s"
              data-wow-delay="0.3s"
            >
              Video Game
            </h1>
            <div
              className="btn-group custom-anim-left wow"
              data-wow-duration="1.2s"
              data-wow-delay="0.5s"
            >
              <Link to="/Games" className="th-btn">
                EXPLORE MORE <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function Component2() {
  return (
    <>
      <div className="overflow-hidden space" id="about-sec">
        <div className="about-bg-img shape-mockup" data-top={0} data-left={0}>
          <img src="assets/img/bg/about-bg1.png" alt="img" />
        </div>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-xl-6 mb-50 mb-xl-0">
              <div className="img-box4">
                <div
                  className="custom-anim-left wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.2s"
                >
                  <img
                    className
                    src="assets/img/normal/about4-1.png"
                    alt="About"
                  />
                </div>
                <div className="img2">
                  <img src="assets/img/normal/about4-2.png" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-6">
              <div className="about-wrap4">
                <div
                  className="title-area mb-35 custom-anim-left wow"
                  data-wow-duration="1.5s"
                  data-wow-delay="0.1s"
                >
                  <span className="sub-title style3">
                    <span className="sub-title-shape icon-masking">
                      <span
                        className="mask-icon"
                        data-mask-src="assets/img/bg/section-title-bg.svg"
                      />
                      {""}
                    </span>
                    About Our Gaming Site
                  </span>
                  <h2 className="sec-title mb-0">
                    Beyond Gaming It's an Odyssey.
                  </h2>
                  <p className="mt-20">
                    Emerging trends in the esports industry include the growth
                    of mobile esports, the integration of virtual reality in
                    gaming experiences, and the increasing involvement of
                    traditional sports.
                  </p>
                </div>
                <div className="row gy-60">
                  <div className="col-sm-6">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="box-number">
                          <span className="counter-number">1.6</span>K
                          <span className="text-theme fw-medium">+</span>
                        </h2>
                        <p className="box-text">Our Daily Game Users</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="box-number">
                          <span className="counter-number">50</span>M
                        </h2>
                        <p className="box-text">Game Downloads</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="box-number">
                          <span className="counter-number">200</span>
                          <span className="text-theme fw-medium">+</span>
                        </h2>
                        <p className="box-text">Game Launched</p>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <div className="counter-card">
                      <div className="media-body">
                        <h2 className="box-number">
                          <span className="counter-number">3.6</span>M
                        </h2>
                        <p className="box-text">Gaming Project Delivered</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-wrap mt-50">
                  <Link to="/Contact" className="th-btn">
                    EXPLORE MORE <i className="fa-solid fa-arrow-right ms-2" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
function Component3() {
  let [GamesFetch, SetGames] = useState([]);
  async function Games() {
    const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "aeda170c71mshcf8675ac9b06470p14952bjsnaada448e661a",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.get(url, options);
      const result = await response.data;
      SetGames(result)
      console.log(result);
    } catch (error) {
      console.error(error);
    }
  }
  useEffect(() => {
      window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
    
  })
    Games();
  }, []);

  return (
    <>
      <section className="game-area-3 space-bottom overflow-hidden">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-lg-auto">
              <div
                className="title-area custom-anim-top wow"
                data-wow-duration="1.5s"
                data-wow-delay="0.2s"
              >
                <span className="sub-title style3">
                  <span className="sub-title-shape icon-masking">
                    <span
                      className="mask-icon"
                      data-mask-src="assets/img/bg/section-title-bg.svg"
                    ></span>
                  </span>
                  Our Latest Game
                </span>
                <h2 className="sec-title">
                  Best Video Games In <span className="text-theme">2024</span>
                </h2>
                <p>
                  The rise of mobile gaming has significantly expanded the
                  gaming audience
                </p>
              </div>
              <div className="game-filter-btn filter-menu filter-menu-active custom-anim-top wow">
                <button
                  data-filter="*"
                  className="tab-btn active"
                  type="button"
                >
                  We Recommend
                </button>
               <br />
               <br />
                <Link to="/ShortGames">
                  <button data-filter=".cat2" className="tab-btn" type="button">
                  All GAMES
                </button>
                </Link>
                <br />
               <br />
                

              </div>
            </div>
          </div>
          <div className="row gy-4 filter-active">
           {

            GamesFetch.slice(7,10).map((value)=>{
              return(
                <>
                 <div className="col-lg-4 col-md-6 filter-item cat1">
              <div
                className="game-card style3"
                data-mask-src="assets/img/game/game_card3_bg.jpg"
              >
                <div
                  className="game-card-img"
                  data-mask-src="assets/img/game/game_card3_img-shape.jpg"
                >
                  <Link to={`/Gamedetails/${value.id}`}>
                    <span className="game-rating">
                      <i className="fas fa-star" /> 4.5
                    </span>
                    <img src={value.thumbnail} alt="game image" />
                   
                  </Link>
                </div>
                <div className="game-card-details">
                  <div className="game-tag">{value.genre}</div>
                  <h3 className="box-title">
                    <Link to={`/Gamedetails/${value.id}`}>{value.title}</Link>
                  </h3>
                  <p className="game-content">publisher : {value.publisher}</p>
                </div>
              </div>
            </div>
                </>
              )
            })
           }
          </div>
        </div>
      </section>
    </>
  );
}

function Component4() {
  return (
    <>
      <div
        className="countdown-sec1 overflow-hidden"
        data-bg-src="assets/img/bg/countdown-sec1-bg.png"
        data-overlay="black"
        data-opacity={8}
      >
        <div
          className="countdown-thumb1-1 shape-mockup d-xl-block d-none"
          data-bottom={0}
          data-left="5%"
        >
          <img src="assets/img/normal/countdown1-1.png" alt="img" />
        </div>
        <div
          className="countdown-thumb1-2 shape-mockup d-xl-block d-none"
          data-bottom={0}
          data-right="3%"
        >
          <img src="assets/img/normal/countdown1-2.png" alt="img" />
        </div>
        <div className="container">
          <div className="countdown-wrap1 z-index-common text-center space">
            <h3 className="countdown-subtitle custom-anim-top wow">
              Big Match
            </h3>
            <h2 className="countdown-title custom-anim-top wow">
              Valorant Game
            </h2>
            <h4 className="countdown-time custom-anim-top wow">
              21 February, 2024 - 6:00 PM
            </h4>
            <ul
              className="counter-list custom-anim-top wow"
              data-offer-date="06/20/2024"
            >
              <li>
                <div
                  className="day count-number"
                  data-bg-src="assets/img/bg/countdown_item_bg.png"
                >
                  00
                </div>
                <span className="count-name">Days</span>
              </li>
              <li>
                <div
                  className="hour count-number"
                  data-bg-src="assets/img/bg/countdown_item_bg.png"
                >
                  00
                </div>
                <span className="count-name">Hour</span>
              </li>
              <li>
                <div
                  className="minute count-number"
                  data-bg-src="assets/img/bg/countdown_item_bg.png"
                >
                  00
                </div>
                <span className="count-name">Minute</span>
              </li>
              <li>
                <div
                  className="seconds count-number"
                  data-bg-src="assets/img/bg/countdown_item_bg.png"
                >
                  00
                </div>
                <span className="count-name">Second</span>
              </li>
            </ul>
            <div className="btn-wrap mt-40 justify-content-center custom-anim-top wow">
              <Link to="/Contact" className="th-btn">
                WATCH THE MATCH <i className="fa-solid fa-arrow-right ms-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
