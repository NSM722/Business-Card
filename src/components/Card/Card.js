import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';


const Card = () => {
  return (
    <>
      <div className="card bg-secondary border-dark">
        <img src="https://picsum.photos/400" 
        className="card-img-top" 
        alt="Random pics from lorem picsum site" />
        <div className="card-body text-white">
          <h5 className="card-title">Jane Doe</h5>
          <p className="card-text">An example of a digital business card</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">JaneDoe@worldwideweb.com</li>
          <li className="list-group-item">Software Engineer</li>
          <li className="list-group-item">Nairobi, Kenya</li>
        </ul>
        <div className="card-body">
          <a 
          href="https://www.linkedin.com/login/de" 
          className="card-link"
          target='_blank' 
          rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/marketplace" 
          className="card-link"
          target='_blank' 
          rel="noreferrer">Github</a>
        </div>
      </div>
    </>
  );
}

export default Card;