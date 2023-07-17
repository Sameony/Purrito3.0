import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/Icon.png"
import avatar from "../Images/undraw_male_avatar_re_y880.svg"
import { useWindowDimensions } from "../Utils";
function Header() {
  const { height, width } = useWindowDimensions();
  const [offset, setOffset] = useState(0);
  // const [username, setUsername] = useState("");
  const navigate = useNavigate();
  useEffect(() => {
      // setUsername(sessionStorage.getItem("username"))
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  const logoutHandler = () =>{
    sessionStorage.clear();
    navigate(0)
  }
  return (
      <nav className={offset>0?"navBar headerShadow":"navBar"} style={{}}>
        <Link to="/" style={{flex: "0 1 auto", textAlign:"right", display:"flex", alignItems:"center"}}>
          <h1 className="brandName">Purritos</h1>
          <img src={logo} style={{height:"5rem"}} alt="logo" />
        </Link>
        <ul className="centerDiv" style={width<839?{display:"none"}:{display:"flex", justifyContent:"space-around"}}>
          {/* <li style={{cursor:"pointer"}}>Products</li>
          <li style={{cursor:"pointer"}}>Contact Sales</li>
          <li style={{cursor:"pointer"}}>Services</li> */}
        </ul>
        <div className="rightNav">
          <Link to="/auth" className={offset>0?"btn btn-auth-dark":"btn btn-auth"} style={width<600?{display:"none"}:{}}>
            Signup
          </Link>
          <Link to="/auth" className={offset>0?"btn btn-secondaryAuth-dark":"btn btn-secondaryAuth"}  style={width<839?{display:"none"}:{}}>
            Login
          </Link>
          <button className="btn btn-secondaryAuth" style={width>839?{display:"none"}:{}}>=</button>
        </div>
      </nav>
  );
}

export default Header;
