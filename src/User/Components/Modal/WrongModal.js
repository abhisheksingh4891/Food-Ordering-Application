import React from 'react';

const WrongModal = ({ show }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none'}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header bg-danger text-white">
          
            <h5 className="modal-title">Wrong Credentials</h5>
          
            <button type="button" className="btn-close" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>Please enter correct password!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WrongModal;
