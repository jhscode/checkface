import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {' Mr. Smiley Face will detect faces in any picture! Place your URL in the box!'}
      </p>
      <div className='center'>
        <div className='center form pa4 br3 shadow-5'>
          <input 
            className='f4 pa2 w-70 center' 
            type='text' 
            placeholder='URL'
            onChange={onInputChange}
          />
          <button 
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
            >Detect</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;