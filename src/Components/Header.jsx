// Creating Header Function
function Header(){
  return (
    // Creating container
    <div>
      <h1 className="">Mxdelite</h1>
       {/* Creating Nav container */}
      <nav>
        {/* Nav elements */}
        <a href="">Services</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">Start Your Project</a>
      </nav>
    </div>
  );
}
export default Header; // exporting to be imported in future