import React, { useContext, useEffect } from "react";
import Navbar from "./Navbar";
import { FoodContext } from "../../Context/FoodContext";
import { Link } from "react-router-dom";
import bg1 from '../../Assets/car2.jpg';


  const MyProfile = () => {
    const { userData, isLogin, setUserData} = useContext(FoodContext);

    useEffect(() => {
      const savedProfile = localStorage.getItem('profile');
        if (savedProfile) {
          setUserData(JSON.parse(savedProfile));
        }
      },[setUserData]);
    

    return (
      <div
        className="container-fluid py-3 pb-5"
        style={{
          backgroundImage: `url(${bg1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(80%)",
        }}
      >
        <Navbar />
        <div className="row d-flex justify-content-center align-items-center mt-5">
          <div className="col col-xl-5">
            <div
              className=""
              style={{
                borderRadius: "1rem",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
              }}
            >
              <div className="row g-0 mt-5">
                <div className="col-md-6 col-lg-10 d-flex align-items-center">
                  <div className="card-body p-4 p-lg-5 text-black">
                    {userData && isLogin ? (
                      <form style={{ fontFamily: "Raleway" }}>
                        <div className="d-flex align-items-center mb-3 pb-1 text-black">
                          <i
                            className="fas fa-cubes fa-2x me-3"
                            style={{ color: "#ff6219" }}
                          ></i>
                          <span className="h1 fw-bold mb-0">Foobies</span>
                        </div>
                        <h5
                          className="fw-bold mb-3 pb-1"
                          style={{ letterSpacing: "1px" }}
                        >
                          Account Information
                        </h5>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label text-black fw-bold"
                            htmlFor="form2Example17"
                          >
                            First Name
                          </label>
                          <input
                            type="text"
                            name="first"
                            value={userData.first}
                            // onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label text-black fw-bold"
                            htmlFor="form2Example27"
                          >
                            Last Name
                          </label>
                          <input
                            type="text"
                            name="last"
                            value={userData.last}
                            // onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label text-black fw-bold"
                            htmlFor="form2Example28"
                          >
                            Email
                          </label>
                          <input
                            type="email"
                            name="email"
                            value={userData.email}
                            // onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                        <div className="form-outline mb-4">
                          <label
                            className="form-label text-black fw-bold"
                            htmlFor="form2Example29"
                          >
                            Phone Number
                          </label>
                          <input
                            type="text"
                            name="phone"
                            value={userData.phone}
                            // onChange={handleChange}
                            className="form-control"
                          />
                        </div>
                        {/* <div className="pt-2 mb-4">
                          <button
                            className="btn btn-success btn-lg btn-block"
                            type="submit"
                          >
                            Update
                          </button>
                        </div> */}
                        <Link className="text-danger fw-bold" to="/">
                          Return to Home
                        </Link>
                      </form>
                    ) : (
                      <div className="text-center fs-4 fw-bold">Loading user data..... Please wait!</div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  export default MyProfile;
