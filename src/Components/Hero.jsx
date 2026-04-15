function Hero(){
  return (
    <div className="Hero border">
      <section className="Hero-section mt-24 ">
        <div className="Hero-Headline  p-8 flex flex-col items-center ">
          <h1>We turn invisible</h1> <br />
          <h1>businesses into brands</h1>
          <br />
          <h1>that own the room.</h1>
        </div>
        <div className="services flex items-center gap-20 mb-4">
          <span>Websites</span>
          <span>Brand Identity</span>
          <span>Social Media</span>
          <a className="ml-auto mr-10" href="">START YOUR PROJECT</a>
        </div>
      </section>
    </div>
  );
}
export default Hero;