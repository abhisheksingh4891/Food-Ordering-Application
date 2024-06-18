import React, { useState, useEffect, useContext } from "react";
import "./CSS/Card.css";
import axios from "axios";
import { FoodContext } from "../../Context/FoodContext";

const baseURL = "https://food-ordering-backend-jwmu.onrender.com";

const Card = () => {
  const [food, setFood] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredFood, setFilteredFood] = useState([]);
  const { addToCart } = useContext(FoodContext);
  const [loading, isLoading] = useState(true);

  useEffect(() => {
    isLoading(true);
    axios
      .get(`${baseURL}/data`)
      .then((response) => {
        isLoading(false);
        setFood(response.data);
        setFilteredFood(response.data); // Initialize filteredFood with all food items
      })
      .catch((error) => console.error(error));
  }, []);

  const handleHover = (index) => {
    const cards = document.querySelectorAll(".card");
    cards.forEach((card, i) => {
      if (i !== index) {
        card.classList.remove("active");
      }
    });
    cards[index].classList.toggle("active");
  };

  const handleSearch = (e) => {
    e.preventDefault();
    const filtered = food.filter((item) =>
      item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFood(filtered);
  };

  const handleAddToCart = (foodItem) => {
    addToCart(foodItem);
  };

  return (
    <>
      {loading ? (
        <div className="bg-light p-3">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
          <h5 className="text-black">Loading Data...</h5>
        </div>
      ) : (
        <div className="pb-3">
          <div className="container">
            <form className="d-flex mt-4 mb-0" onSubmit={handleSearch}>
              <input
                className="form-control me-2 text-black bg-white"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style={{ filter: "brightness(80%)" }}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                className="btn btn-outline-success btn-success text-white"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="container">
            <div className="row">
              {filteredFood.map((foodItem, index) => (
                <div className="col-md-4 mt-3" key={index}>
                  <div
                    className="card my-4"
                    style={{ maxHeight: "400px" }}
                    onMouseEnter={() => handleHover(index)}
                    onMouseLeave={() => handleHover(index)}
                  >
                    <img
                      src={foodItem.img}
                      className="card-img-top"
                      alt="Bhel Puri"
                      style={{
                        height: "200px",
                        objectFit: "cover",
                        filter: "brightness(80%)",
                      }}
                    />
                    <div className="card-body">
                      <div className="d-flex justify-content-between">
                        <h5 className="card-title">{foodItem.name}</h5>
                        <h6 className="card-title">Rs.{foodItem.price}</h6>
                      </div>
                      <p className="card-text">{foodItem.description}</p>
                      <div className="container d-flex justify-content-around gap-4">
                        <div>
                          <button
                            className="btn btn-danger p-1 fs-6"
                            style={{ width: "100px", height: "40px" }}
                            onClick={() => handleAddToCart(foodItem)}
                          >
                            Add to cart
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
