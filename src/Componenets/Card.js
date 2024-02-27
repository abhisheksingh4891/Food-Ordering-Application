import React from "react";
import card1 from "../Assets/card1.jpg"

const Card = () => {
  return (
    <div className="card m-3" style={{"width": "18rem", "maxHeight":"400px"}}>
      <img src={card1} className="card-img-top" alt="Bhel Puri" style={{"height":"200px", "objectFit":"cover","filter":"brightness(80%)"}}/>
      <div className="card-body">
        <h5 className="card-title">Card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <div className="container w-100">
            <button className="m-2 h-100 bg-success text-white rounded">Add to cart</button>

            <select className="m-2 h-100 bg-success text-white rounded">
                {
                    Array.from(Array(4),(e, i)=>{
                        return (
                            <option key={i+1} value={i+1}> {i+1} </option>
                        )
                    })
                }
            </select>

            <select class="m-2 h-100 bg-success text-white rounded">
                {/* <option selected>Choose Quantity</option> */}
                <option value="full">Full</option>
                <option value="half">Half</option>
                <option value="qtr">Qtr</option>
            </select> 
        </div>
      </div>
    </div>
  );
};

export default Card;
