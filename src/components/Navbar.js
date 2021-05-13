import '../style/css/Navbar.css';
import { FaCaretDown } from 'react-icons/fa';
// import { Link } from "react-router-dom";

function Navbar() {
  return (
      <header className="navbar">
          <div className="navwrap">
            <ul className="left_side">
                <li className="logo">LOGO</li>
            </ul>
            <ul  className="right_side">
                <li className="menu">
                    <p className="menu_content">ABOUT</p></li>
                <li className="menu">
                    <p className="menu_content">TOURS<FaCaretDown/>
                    <div class="dropdown">
                            <p>Hello World!</p>
                        </div>
                    </p></li>
                <li className="menu">
                    <p className="menu_content">PLACES<FaCaretDown/>
                    <div class="dropdown">
                            <p>Hello World!</p>
                        </div>
                    </p></li>
                <li className="menu">
                    <p className="menu_content">PHOTO</p>
                    </li>
                <li className="menu">
                    <p className="menu_content">CONTACT US</p></li> 
            </ul>
          </div>
      </header>
  );
}

export default Navbar;