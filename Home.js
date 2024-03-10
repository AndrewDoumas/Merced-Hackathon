import React from 'react';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/Chairs.jpg';
import '../styles/Home.css';

function Home() {
  return  <div className = "home"> 
            <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
              <h1>AI Therapy</h1>
              <p>Judgemnet free therapy bot</p>
              <Link to="/Therapy-Bot">
              <button>Try it now</button>
              </Link>
              </div> 
          </div>
  
}

export default Home;
