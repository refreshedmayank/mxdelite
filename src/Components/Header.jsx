import { useState } from "react";
function Header() {
  const [isopen, setisopen] = useState(false)
  return (
    <div>
      <div className=" bg-black  text-center flex justify-between items-center p-4 z-50 fixed top-0 left-0 w-full ">
        <button className="w-10" onClick={() => setisopen(!isopen)}>
          {isopen ? "x" : "☰"}
        </button>
        <span className="font-['Montserrat']">Mxdelite</span>
        <div className="w-10"></div>
      </div>
      {isopen && (
        <nav className="bg-black  fixed top-0 left-0 h-full w-full ">
          <ul className="mt-20 p-6 flex flex-col gap-10 text-center">
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
