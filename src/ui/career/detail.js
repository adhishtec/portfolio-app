import React from 'react';
import 'material-symbols';
import ge from '../../assets/images/ge.png'

const Detail = ({onClose,isOpen,obj}) => {
  if (!isOpen) {
    return null; // If the modal is not open, don't render anything
  }
  return (
    // <div className="modal">
    //    <span class="material-symbols-outlined" onClick={onClose} >
    //     Cancel
    //     </span> 
    //   <div className="modal-content">
      
    //     <div className='modal-image'>
    //   <img className='popup-imgae' src={obj.imgSrc}></img>
    //   </div>
    //   <div className='modal-text'>
    //     <h2>{obj.title}</h2>
    //     <p>{obj.description}</p>
    //     </div>
    //   </div>
    // </div>
 
    <div class="modal fade" id="learnMore1" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
      <div class="main-body" role="document">
      <span class="material-symbols-outlined" onClick={onClose} >
        Cancel
      </span> 
        <div class="modal-content">
          <div class="modal-body">
            <br/>
          <div class="container">
            <div class="row">
              <div class="col-sm-8">
                 <img src={obj.imgSrc} alt="" className='image'/>
              </div>
              <div class="col-sm-4 align-self-center"> 
                <h5 class="intro-title"></h5>
                <h3>{obj.title}</h3>
                <p> {obj.description} </p>
              </div>          
            </div>  
          </div> 
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
