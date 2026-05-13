import axios from "axios"
import Bradcrom from "../Commen/Bradcrom"
import Footer from "../Commen/Footer"
import Header from "../Commen/Header"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

function ShortGames() {
  return (

    <>
      <Header />
      <Component1 />
      <Component3 />
      <Footer />
    </>

  )
};
function Component1() {
  return (
    <>

      <Bradcrom name={"ALL GAMES"} />


    </>
  )
}

function Component3() {
  let [GamesFetch, SetGames] = useState([]);
  let [ShortGames, SetShortGames] = useState();
  async function Games() {
    let url = `https://free-to-play-games-database.p.rapidapi.com/api/games`;
    if (ShortGames) {
      url += `?sort-by=${ShortGames}`
    }
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
      left: 0,
      top: 0,
      behavior: "smooth"

    })
    Games();
  }, [ShortGames]);
  return (
    <>
      <div>
        <div className="th-sort-bar mt-10">
          <div className="row justify-content-between align-items-center">
            <div className="col-md">
              <p className="woocommerce-result-count">Showing 1–12 of 16 results</p>
            </div>
            <div className="col-md-auto">
              <form className="woocommerce-ordering" method="get">
                <select
                  name="orderby"
                  className="orderby"
                  aria-label="Shop order"
                  onChange={(e) => {
                    SetShortGames(e.target.value)
                  }}
                >
                  <option value="menu_order" selected="selected">
                    Default Sorting
                  </option>
                  <option value="popularity">
                    popular Games
                  </option>
                  <option value="alphabetical">
                    A-Z
                  </option>
                  <option value="release-date">
                    Latest games
                  </option>



                </select>
              </form>
            </div>
          </div>
        </div>

        <section className="overflow-hidden space-top space-extra2-bottom">
          <div className="container">
            <div className="row gy-4">
              {
                GamesFetch.map((value, index) => {
                  return (
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
      </div>

    </>
  )
} function Component4() {
  return (
    <>


    </>
  )
}
export default ShortGames;