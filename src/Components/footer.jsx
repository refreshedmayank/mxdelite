function Footer() {
  function sendtoinstagram(){
  window.open("https://www.instagram.com/mxdelite/", "_blank");

  }
  function sendtoemail(){
    const Email = "mxdelite@gmail.com"
    window.location.href = `mailto:${Email}`;

  }
  return (
    <div className="p-4 ">
    <div className="      bg-black flex  p-4 gap-4 justify-center items-center text-lg">
      <h2 onClick={sendtoinstagram} >Instagram</h2>
      <h2 onClick={sendtoemail}>Email</h2>
    </div>
    </div>
  );
}

export default Footer;
