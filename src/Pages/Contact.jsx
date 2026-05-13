import { Link } from "react-router-dom";
import Footer from "../Commen/Footer";
import Header from "../Commen/Header";
import Bradcrom from "../Commen/Bradcrom";

function Contact() {
  return (
    <>
      <Header />
      <Component1 />
      <Footer />
    </>
  );
}

function Component1() {
  window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
    
  })
  return (
    <>
      <div>
<Bradcrom name={"CONTACT"}/>
        <div className="contact-page-1 space">
          <div
            className="contact-sec-1 space bg-repeat overflow-hidden"
            style={{ backgroundImage: "('/assets/img/bg/jiji-bg2.png')" }}
          >
            <div className="container">
              <div className="row align-items-center justify-content-between">
                <div className="col-xl-6 pe-xxl-5">
                  <div className="title-area">
                    <span className="sub-title style2"># Get In Touch</span>
                    <h2 className="sec-title text-white">
                      Contact Us &amp; Meet Our Team{" "}
                      <span className="text-theme">!</span>
                    </h2>
                  </div>
                  <form
                    action="https://html.themeholy.com/bame/demo/mail.php"
                    method="POST"
                    className="contact-form ajax-contact pb-xl-0 space-bottom"
                  >
                    <div className="row">
                      <div className="form-group style-border2 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="name"
                          id="name"
                          placeholder="Your Name"
                        />
                        <i className="fal fa-user" />
                      </div>
                      <div className="form-group style-border2 col-md-6">
                        <input
                          type="email"
                          className="form-control"
                          name="email"
                          id="email"
                          placeholder="Email Address"
                        />
                        <i className="fal fa-envelope" />
                      </div>
                      <div className="form-group style-border2 col-md-6">
                        <input
                          type="text"
                          className="form-control"
                          name="number"
                          id="number"
                          placeholder="Phone Number"
                        />
                        <i className="fal fa-phone" />
                      </div>
                      <div className="col-md-6">
                        <div className="form-group style-border2">
                          <select
                            className="form-select"
                            aria-label="Default select example"
                          >
                            <option selected="selected">Subject</option>
                            <option value={1}>Esports</option>
                            <option value={2}>Tournament</option>
                            <option value={3}>Sports</option>
                          </select>
                          <i className="fal fa-angle-down" />
                        </div>
                      </div>
                      <div className="col-12 form-group style-border2">
                        <textarea
                          placeholder="Write Massage...."
                          className="form-control"
                          defaultValue={""}
                        />
                        <i className="far fa-pencil" />
                      </div>
                      <div className="form-btn col-12">
                        <button className="th-btn">
                         Send Message
                          <i className="fa-solid fa-arrow-right ms-2" />
                        </button>
                      </div>
                    </div>
                    <p className="form-messages mb-0 mt-3" />
                  </form>
                </div>
                <div className="col-xl-6 ps-xxl-5">
                  <div className="title-area">
                    <span className="sub-title style2"># Information</span>
                    <h2 className="sec-title text-white">
                      Contact Information's{" "}
                      <span className="text-theme">!</span>
                    </h2>
                  </div>
                  <div className="contact-feature">
                    <div className="contact-feature-icon icon-masking">
                      <span
                        className="mask-icon"
                        style={{
                          backgroundImage:
                            "url('/assets/img/icon/contact-map-icon1.svg')",
                        }}
                      />
                      <img
                        src="assets/img/icon/contact-map-icon1.svg"
                        alt="img"
                      />
                    </div>
                    <div className="media-body">
                      <h4 className="box-title">ADDRESS:</h4>
                      <a
                        href="https://maps.app.goo.gl/qCB2vieWst7SY3mH8"
                        className="contact-feature_link"
                      >
                        InfoLabz
                        405, Vraj Avenue, above SAM'S Pizza, nr. Commerce Six Road, Swastik Society, Navrangpura, Ahmedabad, Gujarat 380009
                      </a>
                    </div>
                  </div>
                  <div className="contact-feature">
                    <div className="contact-feature-icon icon-masking">
                      <span
                        className="mask-icon"
                        data-mask-src="/assets/img/icon/contact-phone-icon1.svg"
                      />
                      <img
                        src="/assets/img/icon/contact-phone-icon1.svg"
                        alt="img"
                      />
                    </div>
                    <div className="media-body">
                      <h4 className="box-title">OFFICE NUMBER:</h4>
                      <a href="tel:6354218997" className="contact-feature_link">
                        Mobile: +91 6354218997
                      </a>
                      <a
                        href="tel:16365981254"
                        className="contact-feature_link"
                      >
                        Fax: +163 6985 2365
                      </a>
                    </div>
                  </div>
                  <div className="contact-feature">
                    <div className="contact-feature-icon icon-masking">
                      <span
                        className="mask-icon"
                        data-mask-src="assets/img/icon/contact-envelope-icon1.svg"
                      />
                      <img
                        src="assets/img/icon/contact-envelope-icon1.svg"
                        alt="img"
                      />
                    </div>
                    <div className="media-body">
                      <h4 className="box-title">OFFICE EMAIL:</h4>
                      <a
                        href="mailto:info@bame.com"
                        className="contact-feature_link"
                      >
                        Office Mail: info@bame.com
                      </a>
                      <a
                        href="mailto:info@bameceo.com"
                        className="contact-feature_link"
                      >
                        CEO Mail: info@bameceo.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.6069876725674!2d72.5557994083064!3d23.038198179075845!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e85ff3a38c353%3A0xdabe316634ef7e5e!2sInfoLabz!5e0!3m2!1sen!2sin!4v1776066947297!5m2!1sen!2sin"
            width="600"
            height="450"
            // style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
}
export default Contact;
