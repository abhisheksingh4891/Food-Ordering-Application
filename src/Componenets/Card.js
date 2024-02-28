import React, { useState, useEffect } from "react";
import axios from 'axios';

const baseURL = "https://food-ordering-backend-jwmu.onrender.com";

// const baseURL = "https://localhost:5000";

const Card = () => {
  const [food, setFood] = useState([]);

  useEffect(() => {
    axios.get(`${baseURL}/data`)
      .then((response) => {
        setFood(response.data);
      })
      .catch(error => console.error(error));
  }, []);
  return (  
    <div className="row">
      {food.map((foodItem) => (
        <div className="col-md-3">
          <div className="card mt-5 mx-2" style={{ "maxHeight": "400px" }}>
            <img src={foodItem.img} className="card-img-top" alt="Bhel Puri" style={{ "height": "200px", "objectFit": "cover", "filter": "brightness(80%)" }} />
            <div className="card-body">
              <h5 className="card-title">{foodItem.name}</h5>
              <p className="card-text">{foodItem.description}</p>
              <div className="container d-flex justify-content-around p-1">
                <div>
                  <button className=" p-2 w-100 bg-black text-white rounded border-0" style={{"filter": "brightness(70%)" }}>Add to cart</button>
                </div>
                <div>
                  <select className=" p-2 w-100 bg-black text-white rounded" style={{"filter": "brightness(70%)" }}>
                    {Array.from(Array(4), (_, i) => (
                      <option key={i + 1} value={i + 1}> {i + 1} </option>
                    ))}
                  </select>
                </div>
                <div>
                  <select className=" p-2 w-100 bg-black text-white rounded" style={{"filter": "brightness(70%)" }}>
                    <option value={foodItem.options.full}>Full</option>
                    <option value={foodItem.options.half}>Half</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
