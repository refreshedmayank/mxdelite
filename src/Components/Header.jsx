import { useState } from "react";
function Header() {
  const [isopen, setisopen] = useState(false)
  return (
    <div>
      <div className="border bg-black border-b-white/20 text-center flex justify-between items-center p-4 z-50 fixed top-0 left-0 w-full " >
        <button className="w-10" onClick={() => setisopen(!isopen)}>
          {isopen ? "x" : "☰"}
        </button>
        <span className="font-['Montserrat']">Mxdelite</span>
        <div className="w-10"></div>
      </div>
      {isopen && (
        <nav className="">
          <ul className="">
            <li>
              <a href="#Services">Services</a>
            </li>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Contact">Contact</a>
            </li>
            <li>
              <a href="#Start Your Project">Start Your Project</a>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Header;
