import { useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <div>

        {/* MOBILE MENU */}
        <div className={`th-menu-wrapper ${open ? "th-body-visible" : ""}`}>
          <div className="th-menu-area text-center">

            {/* CLOSE BUTTON */}
            <button
              className="th-menu-toggle"
              onClick={() => setOpen(false)}
            >
              <i className="fal fa-times" />
            </button>

            <div className="mobile-logo">
              <Link to="/">
                <img src="assets/img/logo.svg" alt="logo" />
              </Link>
            </div>

            <div className="th-mobile-menu">
              <ul>
                <li><Link to="/" onClick={() => setOpen(false)}>HOME</Link></li>
                <li><Link to="/About" onClick={() => setOpen(false)}>ABOUT</Link></li>
                <li><Link to="/Games" onClick={() => setOpen(false)}>GAMES</Link></li>
                <li><Link to="/ShortGames" onClick={() => setOpen(false)}>SHORT GAMES</Link></li>
                <li><Link to="/Contact" onClick={() => setOpen(false)}>CONTACT</Link></li>
              </ul>
            </div>

          </div>
        </div>

        {/* HEADER */}
        <header className="th-header header-layout1">
          <div className="sticky-wrapper">
            <div className="menu-area">
              <div className="container">
                <div className="row align-items-center justify-content-between">

                  {/* LOGO */}
                  <div className="col-auto">
                    <div className="header-logo">
                      <Link to="/">
                        <img src="assets/img/logo.svg" alt="logo" />
                      </Link>
                    </div>
                  </div>

                  {/* DESKTOP MENU */}
                  <div className="col-auto">
                    <nav className="main-menu d-none d-lg-inline-block">
                      <ul>
                        <li><Link to="/">HOME</Link></li>
                        <li><Link to="/About">ABOUT</Link></li>
                        <li><Link to="/Games">GAMES</Link></li>
                        <li><Link to="/ShortGames">SHORT GAMES</Link></li>
                        <li><Link to="/Contact">CONTACT</Link></li>
                      </ul>
                    </nav>

                    {/* MOBILE BUTTON */}
                    <div className="header-button d-flex d-lg-none">
                      <button
                        type="button"
                        className="th-menu-toggle"
                        onClick={() => setOpen(true)}
                      >
                        <span className="btn-border" />
                        <i className="far fa-bars" />
                      </button>
                    </div>

                  </div>

                </div>
              </div>
            </div>
          </div>
        </header>

      </div>
    </>
  );
}

export default Header;