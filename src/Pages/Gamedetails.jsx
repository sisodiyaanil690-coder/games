import { Link, useParams } from "react-router-dom";
import Footer from "../Commen/Footer";
import Header from "../Commen/Header";
import { useEffect, useState } from "react";
import axios from "axios";
import Bradcrom from "../Commen/Bradcrom";

 function Gamedetails() {

    return (
        <>
        <Header/>
        <Component1/>
        <Component2/>
        <Footer/>
        </>
    )
};


function Component1() {
  return(
    <>
   
   <Bradcrom name={"GAME DETAILS"}/>
   
    </>
  )
}


function Component2() {

let [GameDetails,SetGames] = useState([]);
let {id} = useParams();

async function FetchGameDetails() {

  const url = `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'aeda170c71mshcf8675ac9b06470p14952bjsnaada448e661a',
		'x-rapidapi-host': 'free-to-play-games-database.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await axios.get(url, options);
	const result = await response.data;
  SetGames(result);
	console.log(result);
} catch (error) {
	console.error(error);
}
}
useEffect(()=>{
  window.scrollTo({
    left:0,
    top:0,
    behavior:"smooth"
    
  })
FetchGameDetails();

},[id])

return (
<>

 
  <section className="overflow-hidden space-top space-extra2-bottom">
    <div className="container">
      <div className="row gx-40">
       {
         <div className="col-xxl-8 col-lg-7">
          <div className="page-single game-details-wrap">
            <div className="page-img mb-50">
              <img className="w-100" src={GameDetails.thumbnail} />
            </div>
            <div className="page-content">
              <div className="game-title-wrap">
                <h2 className="page-title text-white mb-0">{GameDetails.title}</h2>
                <div className="game-meta">
                  Entry Fee: <span className="text-theme">FREE</span>
                </div>
              </div>
              <p className="mb-30">
                {GameDetails.description}
              </p>
              <p className="mb-30">
               {GameDetails.short_description}
              </p>
              {/* <h3 className="text-white mt-45 mb-20">Top Features:</h3> */}
              {/* <p> */}
              {/* </p> */}
              {/* <div className="checklist list-two-column">
                <ul>
                  <li>
                    <i className="far fa-shield-check" /> Thousands of levels
                    across multiple worlds
                  </li>
                 
                  <li>
                    <i className="far fa-shield-check" /> Free rewards every day
                  </li>
                  <li>
                    <i className="far fa-shield-check" /> Club Tournaments and
                    other exciting friends
                  </li>
                </ul>
              </div> */}
            </div>
          </div>
        </div>
       }
        {
          <div className="col-xxl-4 col-lg-5">
          <aside className="sidebar-area">
            <div className="widget">
              <div className="widget-game-info">
                <div className="player-logo">
                  <img src="/assets/img/tournament/1-1.png" alt="img" />
                </div>
                <h2 className="game-info-title">                  <a href={GameDetails.game_url}>PLAY NOW</a>
</h2>
                <div className="game-meta-list">
                  <span>{GameDetails.release_date}</span> <span>{GameDetails.genre}</span> <span>{GameDetails.platform}</span>
                </div>
                {/* <div className="game-rating-info"> */}
                  {/* <div className="rating-wrap"> */}
                    {/* <span className="game-rating"><i className="fas fa-star" /> 4.8</span>
                    <span className="review-count">(2.6k Review)</span> */}
                  {/* </div> */}
                  {/* <div className="download-wrap "> */}
                    {/* <h5 className="download-wrap-title">10M+</h5>
                    <span className="download-wrap-text">Downloads</span> */}
                  {/* </div> */}
                {/* </div> */}
                <div className="btn-wrap box-title">
                  
                </div>
              </div>
            </div>
          </aside>
        </div>
        }
      </div>
    </div>
  </section>


</>
)
};


export default Gamedetails;