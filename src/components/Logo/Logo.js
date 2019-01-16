import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import smile from './smile.png';

const Logo = () => {
  return (
    <div className='ma4 mt0'>
      <Tilt className="Tilt br3 shadow-4" options={{ max : 55 }} style={{ height: 150, width: 150 }} >
        <div className="Tilt-inner pa3"> <img style={{paddingTop: '5px'}} src={smile} alt="logo" /> </div>
      </Tilt>
    </div>
  );
}

export default Logo;