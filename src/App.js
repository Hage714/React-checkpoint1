import React from "react";
import Image from "./components/Image";
import Name from "./components/Name";
import Description from "./components/Description";
import Price from "./components/Price";

const firstName = "Hage"; //defining the first name variable

// Define the image URL or path
const imageUrl = "https://media.istockphoto.com/id/1419988769/photo/porsche-911-turbo-s.jpg?s=612x612&w=0&k=20&c=KdoIXVhnHEJcJkvxHHkOHLyVcq7YtzGBG9QE8uBjI_4="

function App() {
  return (
    <>
      <div className="container d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
        
      <div className="card mt-5" style={{ width: '30rem' }}>
        <p className="text-center mt-4"><Image /></p>
          <div className="card-body">
            <h5 className="card-title"><Name /></h5>
            <p className="card-text"><Description /></p>
          <p className="card-text fw-bold"><Price /></p>
<div className="text-center mb-3 fs-5 fw-semibold">
          <p className="card-text">
            Hello, {firstName ? firstName : "there"}!
          </p>
          </div>

          {firstName && (
            <img src={imageUrl} alt="Personalized Greeting" style={{ width: '100%' }} />
          )}
          </div>
      </div>
       

      </div>
    </>
  );
}

export default App;
