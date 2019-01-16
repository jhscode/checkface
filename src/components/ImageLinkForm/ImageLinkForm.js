import React from 'react';
import './imageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className='f3'>
        {' Mr. Smiley Face will detect faces in any picture! '}
      </p>
      <div className='center'>
      <form onChange={onInputChange}>
        <div className='center form pa4 br3 shadow-5'>
          <input 
            className='f4 pa2 w-70 center' 
            type='text' 
            placeholder='search'
          />
          <button 
            className='w-30 grow f4 link ph3 pv2 dib white bg-light-purple'
            onClick={onButtonSubmit}
            >Detect</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default ImageLinkForm;