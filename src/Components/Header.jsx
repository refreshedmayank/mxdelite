function Header(){
  return(<div>
      <nav className=" -z-50 bg-black text-white fixed top-0 left-0 w-full  " >
        <ul className="flex justify-between p-8">
          <li className="Mxdelite-logo">Mxdelite</li>
          <li><a href="#Services">Services</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#Contact">Contact</a></li>
          <li><a href="#Start Your Project">Start Your Project</a></li>
        </ul>
      </nav>
  </div>);
};
export default Header;