import React from 'react';

const DuplicateItemModal = ({ show, handleClose }) => {
    return (
      <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none'}}>
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-danger text-white">
              <h5 className="modal-title">Duplicate Item</h5>
              <button type="button" className="btn-close" aria-label="Close" onClick={handleClose}></button>
            </div>
            <div className="modal-body">
              <p>Item already added to cart!</p>
            </div>
          </div>
        </div>
      </div>
    );
  };
  

export default DuplicateItemModal;
