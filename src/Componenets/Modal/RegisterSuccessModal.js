import React from 'react';

const RegisterSuccessModal = ({ show }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none'}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header btn-success text-white">
   
            <h5 className="modal-title">Registeration Successful</h5>
      
            <button type="button" className="btn-close" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>You have successfully registered on our website!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterSuccessModal;
