// Creating Header Function
function Header(){
  return (
    // Creating container
    <div className="Container border p-4">
      <nav className="flex justify-between">
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