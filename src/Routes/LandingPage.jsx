import React, {useState, useEffect} from "react";

function LandingPage() {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div style={{minWidth:"100vw"}}>
    <div id="square" contentEditable  />{/*clip css */}
    <div style={{marginTop:"10rem"}}>asfsafsa</div>
    <div style={{marginTop:"10rem"}}>asfsafsa</div>
    <div style={{marginTop:"10rem"}}>asfsafsa</div>
    <div style={{marginTop:"10rem"}}>asfsafsa</div>
    <div style={{marginTop:"10rem"}}>asfsafsa</div>
    <div style={{marginTop:"10rem"}}>asfsafsa</div>
    </div>
  );
}

export default LandingPage;
