import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useWindowDimensions } from "../Utils";
function Header() {
  const { height, width } = useWindowDimensions();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
      <nav className={offset>0?"navBar headerShadow":"navBar"} style={{padding:"0.7rem 0"}}>
        <Link to="/" style={{flex: "0 1 auto", textAlign:"right"}}>
          <h1 className="brandName">Purritos <span style={{color:"var(--primary)"}}>3.0</span></h1>
        </Link>
        <ul className="centerDiv" style={width<839?{display:"none"}:{}}>
          <li>Products</li>
          <li>Purrime</li>
          <li>Contact Sales</li>
        </ul>
        <div className="rightNav">
          <Link to="/login" className={offset>0?"btn btn-auth-dark":"btn btn-auth"} style={width<600?{display:"none"}:{}}>
            Signup
          </Link>
          <Link to="/login" className={offset>0?"btn btn-secondaryAuth-dark":"btn btn-secondaryAuth"}  style={width<839?{display:"none"}:{}}>
            Login
          </Link>
          <button className="btn btn-secondaryAuth" style={width>839?{display:"none"}:{}}>=</button>
        </div>
      </nav>
  );
}

export default Header;
