import React from 'react';
import './FindSeriesSection.css';
import { Link } from 'react-router-dom';

const FindSeriesSection = () => {
  return (
    <div className="Findcontainer">
      <h1 className="Findheading">Find your next best series</h1>
      <div className="FindsearchBox">
        <input type="text" placeholder="Search" className="Findinput" />
        <button className="FindsearchButton"><Link to={"/"} style={{textDecoration:"none", color:"white"}}>Search</Link></button>
      </div>
    </div>
  );
};

export default FindSeriesSection;
