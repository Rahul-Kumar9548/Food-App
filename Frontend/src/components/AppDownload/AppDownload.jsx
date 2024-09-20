import React from 'react';
import './AppDownload.css';
import { assets } from '../../assets/assets';

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
          <p>For better Experience Dowmload <br />Home Food</p>
          <div className="app-download-Platforms">
                <img src={assets.play_store} alt="" />
                <img src={assets.app_store} alt="" />
          </div>
    </div>
  );
}

export default AppDownload;