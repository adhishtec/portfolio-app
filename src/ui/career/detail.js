import React from 'react';
import 'material-symbols';
import ge from '../../assets/images/ge.png'

const Detail = ({onClose,isOpen,obj}) => {
  if (!isOpen) {
    return null; // If the modal is not open, don't render anything
  }
  return (
    <div className="modal">
         <span class="material-symbols-outlined" onClick={onClose} >
        Cancel
        </span>
      <div className="modal-content">
        <div className='modal-image'>
      <img className='popup-imgae' src={obj.imgSrc}></img>
      </div>
      <div className='modal-text'>
        <h2>{obj.title}</h2>
        <p>{obj.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Detail;
