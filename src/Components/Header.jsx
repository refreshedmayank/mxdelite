// Creating Header Function
function Header(){
  return (
    // Creating container
    <div className="flex">
      <h1>Mxdelite</h1>
      {/* Creating Nav container */}
      <nav className="">
        {/* Nav elements */}
        <a>Mxdelite</a>
        <a href="">Services</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
        <a href="#">Start Your Project</a>
      </nav>
    </div>
  );
}
export default Header; // exporting to be imported in future