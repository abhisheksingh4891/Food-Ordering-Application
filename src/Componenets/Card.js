import React, { useState, useEffect } from "react";
import axios from 'axios'

const baseURL = "http://localhost:5000/data";

const Card = () => {

  const [ Food, setFood] = useState([]);

  useEffect(() => {
    axios.get(baseURL)
      .then((response) => {
        console.log(response.data);
        setFood(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  

  return (  
    <>
    {
      Food.map(food =>{
        return (
        <div className="card m-3" style={{"width": "18rem", "maxHeight":"400px"}}>
        <img src={food.img} className="card-img-top" alt="Bhel Puri" style={{"height":"200px", "objectFit":"cover","filter":"brightness(80%)"}}/>
      <div className="card-body">
        <h5 className="card-title">{food.name}</h5>
        <p className="card-text">
          {food.description}
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
                <option value={food.options.full}>Full</option>
                <option value={food.options.half}>Half</option>
                {/* <option value="qtr">Qtr</option> */}
            </select> 
        </div>
      </div>
      </div>
        )
      })
    }
  </>
  );
};

export default Card;
