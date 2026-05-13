
function Errror() {
    return (

        <>
        <Component/>
        </>

    )
};
function Component() {
    return(
        <>
        
       <section className="space error-page" data-bg-src="assets/img/bg/error-bg.png">
  <div className="container">
    <div className="error-img">
      <img src="assets/img/theme-img/error.svg" alt="404 image" />
    </div>
    <div className="error-content">
      <h2 className="error-title text-white">Opp’s that page can’t be found</h2>
      <p className="error-text">
        It looks like nothing was found at this location. Maybe try one of
        the links below or a search?
      </p>
      <a href="index.html" className="th-btn"><i className="fas fa-home me-2" />Back To Home</a>
    </div>
  </div>
</section>

        </>
    )
    
}
export default Errror;