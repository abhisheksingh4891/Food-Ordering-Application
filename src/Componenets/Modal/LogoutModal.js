// LogoutModal.js
import React from 'react';

const LogoutModal = ({ show }) => {
  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none', 'zIndex': '1051' }}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">Logged Out</h5>
            <button type="button" className="btn-close" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p>You have been successfully logged out!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoutModal;
