import React from "react";
import picture from "./campanile.jpeg"
import './home.css'

function Home() {
  const doClick = () => {

  }
  
  
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
            <img
              class="image img-fluid rounded mb-4 mb-lg-0"
              src={picture}
              alt=""
            />
          </div>
          <div class="col-lg-5">
            <button class="font-weight-light">Start Your Musical Journey!</button>
           
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <button class="font-weight-light">Login</button>
            <br></br>
            <button class="font-weight-light">Signup</button>
          </div>
          <p>
              Learn About us!
            </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
