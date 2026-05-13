import { Link } from "react-router-dom";

function Footer() {
    
    return (
    <>
      <footer
      class="footer-wrapper footer-layout2"
      style={{backgroundImage:"url('/assets/img/bg/footer2-bg.png')"}}
    >
      <div class="container">
        <div class="text-center">
          <div
            class="footer-top-shape bg-repeat"
            style={{backgroundImage:"url('/assets/img/bg/jiji-bg.png')"}}
          ></div>
        </div>
      </div>
      <div class="widget-area">
        <div class="container">
          <div class="row justify-content-between">
            <div class="col-md-6 col-xl-auto">
              <div class="widget footer-widget">
                <div class="th-widget-about">
                  <div class="about-logo">
                    <Link to="/"
                      ><span
                        style={{backgroundImage:"url('/assets/img/logo.svg')"}}
                        class="logo-mask"
                      ></span>
                      <img src="/assets/img/logo.svg" alt="Bame"
                    /></Link>
                  </div>
                  <p class="about-text">
                    Beyond esports tournaments, include a broader calendar of
                    gaming events, conferences, and conventions.
                  </p>
                  {/* <h3 class="widget_title">
                    Follow <span class="text-theme">With Us:</span>
                  </h3> */}
                  {/* <div class="th-widget-contact">
                    <div class="th-social style-mask">
                      <a class="facebook" href="https://www.facebook.com/"
                        ><i class="fab fa-facebook-f"></i
                      ></a>
                      <a class="twitter" href="https://www.twitter.com/"
                        ><img
                          src="assets/img/icon/x-twitter-icon.svg"
                          alt="icon" /></a
                      ><a class="instagram" href="https://www.instagram.com/"
                        ><img
                          src="assets/img/icon/instagram-icon.svg"
                          alt="icon"
                        /> </a
                      ><a class="linkedin" href="https://www.linkedin.com/"
                        ><i class="fab fa-linkedin"></i
                      ></a>
                      <a class="google-play" href="https://www.google.com/"
                        ><img
                          src="assets/img/icon/google-playstore-icon.svg"
                          alt="icon"
                      /></a>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-auto">
              <div class="widget widget_nav_menu footer-widget">
                <h3 class="widget_title">Useful Link</h3>
                <div class="menu-all-pages-container">
                  <ul class="menu">
                    <li>
                      <Link to="/Games"
                        ><i class="far fa-angle-right"></i>Gaming</Link>
                    </li>
                    <li>
                      <Link to="/"
                        ><i class="far fa-angle-right"></i>Home</Link>
                    </li>

                    <li>
                      <Link to="/Contact"
                        ><i class="far fa-angle-right"></i>Collectibles</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-xl-auto">
              <div class="widget widget_nav_menu footer-widget">
                <h3 class="widget_title">Supports</h3>
                <div class="menu-all-pages-container">
                  <ul class="menu">
                    <li>
                      <Link to="/About"
                        ><i class="far fa-angle-right"></i> About</Link>
                    </li>
                   
                    <li>
                      <Link to="/Contact"
                        ><i class="far fa-angle-right"></i> 24/7 Supports</Link>
                    </li>
                    
                    <li>
                      <Link to="/Contact"
                        ><i class="far fa-angle-right"></i> Our News</Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {/* <div class="col-md-6 col-xl-auto">
              <div class="widget newsletter-widget footer-widget">
                <h3 class="widget_title">Newsletter</h3>
                <p class="footer-text">
                  Subscribe to our newsletter to get our latest update & news
                  consenter
                </p>
                <form class="newsletter-form">
                  <div class="form-group">
                    <input
                      class="form-control"
                      type="email"
                      placeholder="Email Address"
                      required=""
                    />
                    <button type="submit" class="th-btn">
                      <i class="fas fa-paper-plane"></i>
                    </button>
                  </div>
                  <div class="btn-wrap">
                    <a href="#"
                      ><img
                        src="assets/img/normal/footer-apple-btn.png"
                        alt="img" /></a>
                        <a href="#">
                        <img
                        src="assets/img/normal/footer-playstore-btn.png"
                        alt="img"
                    /></a>
                  </div>
                </form>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div
        class="copyright-wrap text-center bg-repeat"
        style={{backgroundImage:'/assets/img/bg/jiji-bg.png'}}
      >
        <div class="container">
          <div class="row align-items-center justify-content-center">
            <div class="col-lg-6">
              <p
                class="copyright-text bg-repeat"
                data-bg-src="assets/img/bg/jiji-bg.png"
              >
                <i class="fal fa-copyright"></i> Copyright 2024
                <Link to="/"> GameCraft.</Link> All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
     <div className="scroll-top">
  <svg className="progress-circle svg-content" width="100%" height="100%" viewBox="-1 -1 102 102">
    <path d="M50,1 a49,49 0 0,1 0,98 a49,49 0 0,1 0,-98" style={{transition: 'stroke-dashoffset 10ms linear 0s', strokeDasharray: '307.919, 307.919', strokeDashoffset: '307.919'}} />
  </svg>
</div>

    </>
    )
};

export default Footer;