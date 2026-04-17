import { useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [isopen, setisopen] = useState(false)
  const closemenu = () =>{
    setisopen(false)}
  return (
    <div>
      <div className="border bg-black  text-center flex justify-between items-center p-4 z-50 fixed top-0 left-0 w-full ">
        <button className="w-10" onClick={() => setisopen(!isopen)}>
          {isopen ? "x" : "☰"}
        </button>
        <span className="font-['Montserrat']">Mxdelite</span>
        <div className="w-10"></div>
      </div>
      {isopen && (
        <nav className="bg-black  fixed top-0 left-0 h-full w-full text-white">
          <div className="mt-20 p-6 flex flex-col gap-10 text-center">
            <Link className="" to="/services" onClick={closemenu}>
              Services
            </Link>
            <Link to="/contact" onClick={closemenu}>
              Contacts
            </Link>
            <Link to="/problems" onClick={closemenu}>
              Problems
            </Link>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Header;
