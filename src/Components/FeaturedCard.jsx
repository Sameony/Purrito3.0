import React from 'react'

const FeaturedCard = ({_id, disName, coverImg, description}) => {
    return (
      <Link to="/products" className="miniHero pd-sm basicDark" style={{ backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${coverImg})`}}>
        <h2 className="mg-b-xl fw-xl">{disName}</h2>
        <div className="fs-sm fw-md ">{description.length>100?description.slice(0,100)+"...":description}</div>
      </Link>
    );
  };