import { Link } from "react-router-dom";
import Footer from "../Commen/Footer";
import Header from "../Commen/Header";
import Bradcrom from "../Commen/Bradcrom";

function About() {

  return (
    <>
      <Header />
      <Component />
      <Footer />
    </>
  )
};


function Component() {
    window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
    
  })
  return (
    <>


      <Bradcrom name={"About US"} />
      <div className="overflow-hidden space position-relative z-index-common">
        <div className="gr-bg1 overlay" />
        <div className="container">
          <div className="title-area text-center">
            <span className="sub-title style2"># Welcome to The eSports &amp; Gaming Site</span>
            <h2 className="sec-title text-white">
              Forging Legends in the Gaming Universe
            </h2>
          </div>
          <div className="row">
            <div className="col-xl-7 mb-50 mb-xl-0">
              <div className="img-box2">
                <div className="img1">
                  <img src="/assets/img/normal/about2-1.png" alt="About" />
                </div>
              </div>
            </div>
            <div className="col-xl-5">
              <div className="about-feature-wrap">
                <div className="slider-area">
                  <div className="swiper th-slider about-feature-slider1" id="aboutfeature1" data-slider-options="{&quot;breakpoints&quot;:{&quot;0&quot;:{&quot;slidesPerView&quot;:2,&quot;mousewheel&quot;:false},&quot;576&quot;:{&quot;slidesPerView&quot;:&quot;2&quot;,&quot;mousewheel&quot;:false},&quot;768&quot;:{&quot;slidesPerView&quot;:&quot;3&quot;,&quot;mousewheel&quot;:false},&quot;992&quot;:{&quot;slidesPerView&quot;:&quot;3&quot;,&quot;mousewheel&quot;:false},&quot;1200&quot;:{&quot;slidesPerView&quot;:&quot;3&quot;}},&quot;direction&quot;:&quot;vertical&quot;,&quot;mousewheel&quot;:true}">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div className="about-feature">
                          <div className="about-feature-icon icon-masking">
                            <span className="mask-icon" data-mask-src="/assets/img/icon/about_feature_2_1.svg" />
                            <img src="/assets/img/icon/about_feature_2_1.svg" alt="Icon" />
                          </div>
                          <div className="about-feature-content">
                            <h3 className="about-feature-title">Live Streaming</h3>
                            <p className="about-feature-text">
                              Integration with popular streaming platforms for
                              live coverage of esports.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="about-feature">
                          <div className="about-feature-icon icon-masking">
                            <span className="mask-icon" data-mask-src="assets/img/icon/about_feature_2_2.svg" />
                            <img src="/assets/img/icon/about_feature_2_2.svg" alt="Icon" />
                          </div>
                          <div className="about-feature-content">
                            <h3 className="about-feature-title">Gaming News</h3>
                            <p className="about-feature-text">
                              Keep users informed about the gaming industry with
                              news articles.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="about-feature">
                          <div className="about-feature-icon icon-masking">
                            <span className="mask-icon" style={{ backgroundImage: "url('/assets/img/icon/about_feature_2_3.svg')" }} />
                            <img src="assets/img/icon/about_feature_2_3.svg" alt="Icon" />
                          </div>
                          <div className="about-feature-content">
                            <h3 className="about-feature-title">Great Tournament</h3>
                            <p className="about-feature-text">
                              Display a calendar of upcoming tournament with
                              dates, times, and game.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="about-feature">
                          <div className="about-feature-icon icon-masking">
                            <span className="mask-icon" data-mask-src="/assets/img/icon/about_feature_2_1.svg" />
                            <img src="assets/img/icon/about_feature_2_1.svg" alt="Icon" />
                          </div>
                          <div className="about-feature-content">
                            <h3 className="about-feature-title">Live Streaming</h3>
                            <p className="about-feature-text">
                              Integration with popular streaming platforms for
                              live coverage of esports.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="about-feature">
                          <div className="about-feature-icon icon-masking">
                            <span className="mask-icon" data-mask-src="assets/img/icon/about_feature_2_2.svg" />
                            <img src="assets/img/icon/about_feature_2_2.svg" alt="Icon" />
                          </div>
                          <div className="about-feature-content">
                            <h3 className="about-feature-title">Gaming News</h3>
                            <p className="about-feature-text">
                              Keep users informed about the gaming industry with
                              news articles.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div className="about-feature">
                          <div className="about-feature-icon icon-masking">
                            <span className="mask-icon" data-mask-src="assets/img/icon/about_feature_2_3.svg" />
                            <img src="assets/img/icon/about_feature_2_3.svg" alt="Icon" />
                          </div>
                          <div className="about-feature-content">
                            <h3 className="about-feature-title">Great Tournament</h3>
                            <p className="about-feature-text">
                              Display a calendar of upcoming tournament with
                              dates, times, and game.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="space-bottom counter-area-1">
        <div className="container">
          <div className="counter-card-wrap">
            <div className="counter-card">
              <div className="media-body">
                <h2 className="box-number">
                  <span className="counter-number">1.6</span>K<span className="text-theme fw-medium">+</span>
                </h2>
                <p className="box-text">Our Daily Game Users</p>
              </div>
            </div>
            <div className="counter-card">
              <div className="media-body">
                <h2 className="box-number">
                  <span className="counter-number">50</span>M
                </h2>
                <p className="box-text">Game Downloads</p>
              </div>
            </div>
            <div className="counter-card">
              <div className="media-body">
                <h2 className="box-number">
                  <span className="counter-number">200</span><span className="text-theme fw-medium">+</span>
                </h2>
                <p className="box-text">Game Launched</p>
              </div>
            </div>
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
      </div>

      <div className="about-sec-3 mb-5 overflow-hidden space-top position-relative z-index-common" data-bg-src="assets/img/bg/about-bg2.png">
        <div className="gr-bg1 overlay" />
        <div className="container">
          <div className="about-wrap3">
            <div className="row gy-40">
              <div className="col-xl-6">
                <div className="title-area custom-anim-left wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <span className="sub-title"># Why Choose Our Gaming Site</span>
                  <h2 className="sec-title">
                    Our Values Inspire And Drive Our Every Move
                    <span className="text-theme">!</span>
                  </h2>
                  <div className="checklist">
                    <ul>
                      <li>
                        <i className="fas fa-circle-check" /> Duis scelerisque nunc
                        ac massa efficitur pulvinar.
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> Vivamus eget nisi
                        scelerisque, iaculis risus vel, molestie risus.
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> Aliquam nec sapien
                        vitae dui dapibus blandit.
                      </li>
                      <li>
                        <i className="fas fa-circle-check" /> Sed non ipsum ut
                        mauris dictum ullamcorper ac at nibh.
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="img-box3">
                  <div className="img1">
                    <img src="/assets/img/normal/about3-2.png" alt="About" />
                  </div>
                </div>
              </div>
              <div className="col-xl-6">
                <div className="img-box3">
                  <div className="img1">
                    <img src="/assets/img/normal/about3-1.png" alt="About" />
                  </div>
                </div>
                <div className="about-content custom-anim-left wow animated" data-wow-duration="1.5s" data-wow-delay="0.2s">
                  <p>
                    Gamers can join local gaming meetups, participate in gaming
                    events, or connect with like-minded individuals through online
                    forums and social media groups. Engaging with the community
                    helps build connections and creates opportunities for
                    collaborative gaming experiences.
                  </p>
                  <p className="mb-0">
                    Storytelling is a crucial element in modern video game design,
                    creating immersive and engaging experiences. Games with
                    compelling narratives often resonate more with players, adding
                    depth to the overall gaming experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="about-tag ">
              <div className="about-experience-tag">
                <span className="circle-title-anime">24 YEARS EXPERIENCE OF GAMING</span>
              </div>
              <div className="about-tag-icon">
                <img src="/assets/img/logo-icon.svg" alt="img" />
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )

}
export default About;