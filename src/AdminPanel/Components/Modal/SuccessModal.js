import React, {useContext} from 'react';
import { FoodContext } from '../../../Context/FoodContext';

const SuccessModal = ({ show }) => {

  const {user} = useContext(FoodContext)
  return (
    <div className={`modal ${show ? 'show' : ''}`} tabIndex="-1" role="dialog" style={{ display: show ? 'block' : 'none'}}>
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header bg-success text-white">
            <h5 className="modal-title">Login Successful</h5>
            <button type="button" className="btn-close" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <p><b>{user}</b> successfully logged in!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
