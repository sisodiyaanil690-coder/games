import { Link } from "react-router-dom";

 function Bradcrom({name}) {

    return (

<>

<div className="breadcumb-wrapper" style={{backgroundImage:"url('/assets/img/bg/breadcumb-bg.jpg')"}}>

  <div className="container">
    <div className="breadcumb-content">
      <h1 className="breadcumb-title">{name}</h1>
      <ul className="breadcumb-menu">
        <li><Link to="/">Home</Link></li>
        <li>{name}</li>
      </ul>
    </div>
  </div>
</div>


</>
    )
};

export default Bradcrom;