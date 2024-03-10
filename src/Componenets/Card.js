import React, { useState, useEffect } from "react";
import './CSS/Card.css'
import axios from 'axios';

const baseURL = "https://food-ordering-backend-jwmu.onrender.com";

const Card = () => {
    const [food, setFood] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');

    useEffect(() => {
        axios.get(`${baseURL}/data`)
            .then((response) => {
                setFood(response.data);
            })
            .catch(error => console.error(error));
    }, []);

    const handleHover = (index) => {
        const cards = document.querySelectorAll('.card');
        cards.forEach((card, i) => {
            if (i !== index) {
                card.classList.remove('active');
            }
        });
        cards[index].classList.toggle('active');
    };

    const filteredFood = food.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="pb-3">
            <div className="d-none d-md-block" >
                <form className="d-flex mt-4 mx-5 mb-0">
                    <input
                        className="form-control me-2 text-black bg-white"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        style={{ "filter": "brightness(80%)" }}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-outline-success btn-success text-white" type="submit">Search</button>
                </form>
            </div>
            
            <div className="d-block d-md-none mt-3">
                <form className="d-flex mt-4 mx-5 mb-0">
                    <input
                        className="form-control me-1 text-black bg-white"
                        type="search"
                        placeholder="Search"
                        aria-label="Search"
                        style={{ "filter": "brightness(80%)" }}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                    />
                    <button className="btn btn-outline-success btn-success text-white" type="submit">Search</button>
                </form>
            </div>
            <div className="row bg-light">
                {filteredFood.map((foodItem, index) => (
                    <div className="col-md-3 bg-light mt-3" key={index}>
                        <div className="card my-4 mx-2" style={{ "maxHeight": "400px" }} onMouseEnter={() => handleHover(index)} onMouseLeave={() => handleHover(index)}>
                            <img src={foodItem.img} className="card-img-top" alt="Bhel Puri" style={{ "height": "200px", "objectFit": "cover", "filter": "brightness(80%)" }} />
                            <div className="card-body">
                                <h5 className="card-title">{foodItem.name}</h5>
                                <p className="card-text">{foodItem.description}</p>
                                <div className="container d-flex justify-content-around gap-2">
                                    <div>
                                        <button className="btn btn-dark p-1 fs-6" style={{ "filter": "brightness(70%)", width:'100px' }}>Add to cart</button>
                                        {/* <button className="col btn btn-dark-moon btn-rounded">Dark Moon</button> */}
                                    </div>
                                    <div>
                                        <select className="btn btn-dark p-1 fs-6" style={{ "filter": "brightness(70%)", width:'100px' }}>
                                                <option>0</option>
                                                {Array.from(Array(4), (_, i) => (
                                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                                ))}
                                            </select>
                                    </div>
                                    <div>
                                        {/* <button className="btn-dark p-1 fs-6" style={{ "filter": "brightness(70%)", width:'100px' }}> */}
                                            <select className="btn btn-dark p-1 fs-6" style={{ "filter": "brightness(70%)", width:'100px' }}>
                                                <option>Quantity</option>
                                                <option value={foodItem.options.full}>Full</option>
                                                <option value={foodItem.options.half}>Half</option>
                                            </select>
                                        {/* </button> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;

