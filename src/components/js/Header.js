import {Link} from 'react-router-dom'

import "../css/Header.css";


const Header = () => {
    
  return (
  <div className="sidebar">
    <p>Dashboard</p>
    <div className="dropdown">
        <button className="dropbtn">Topics</button>
        <div className="dropdown-content">
        <Link to="/ques">Differenciation</Link>
        <Link to="/">Integration</Link>
        {/* <a href="/">Link 3</a> */}
        </div>
    </div>
  </div>
  
  );
};
export default Header;