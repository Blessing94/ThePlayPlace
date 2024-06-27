import './nav.css';
import { IoSearchOutline } from "react-icons/io5";
import { VscAccount } from "react-icons/vsc";


import logo from "./pn.png";


function Nav() {

  return (
<nav>
<img className='logo' src={logo} alt="Logo" />

<div className="search-container">
      <select className="category-select">
      <option>Searching for?</option>
        <option>Play Groups</option>
        <option>Play Places</option>
        <option>Play Mates</option>
      </select>
      <input className="search-input" type="text" placeholder="City, District, Zip code......." />
      <button type="button" className='search-button' >
          <IoSearchOutline />
        </button>
    </div>
    
  <ul class="menu">
    <li><a href="#!">About Us</a></li>
    <li><a href="#!">Toy Box</a></li>
    <li><a href="#!">Create Events</a></li>
    <li><a href="#!">Our Servives</a></li>

  </ul>
  <button type = "button" className='signup'>
  <VscAccount />
  </button>

</nav>



  );
}

export default Nav;
