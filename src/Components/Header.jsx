import { useState } from "react";
function Header() {
  const [isopen, setisopen] = useState(false)
  return (
    <div>
      <div className="border text-center">
        <span>Mxdelite</span>
        <button onClick={() => setisopen(!isopen)}>
          {isopen ? "x" : "☰"}
        </button>
      </div>
      {isopen && (
      <nav>
        <ul>
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
      </nav>)}
    </div>
  );
}

export default Header;
