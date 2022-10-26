import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [randomData, setRandomData] = useState([])

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=1')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setRandomData(data['results'])
      })
      .catch(error => console.log(error))
  }, []);

  return (
    <>
      <main>
        <div className='container mt-2'>
          <h4
            className='text-center 
          mt-5 mb-3 text-primary fw-bolder fs-1'>
            Digital Business Card
          </h4>
          <hr />
          <div className="card bg-dark border-warning my-3">
            {
              randomData.map((user) => (
                <>
                  <img src={user.picture.large}
                    key={user.id}
                    className="card-img-top img-fluid"
                    alt="random pic" />
                  <div className="card-body text-white">
                    <h5 className="card-title fs-3">
                      <i className="fa-user-graduate fa-solid" />&nbsp;
                      {user.name.title}. {user.name.first} {user.name.last}</h5>
                    <p className="card-text fs-4">
                      <i className="fa-solid fa-map-location" />&nbsp;
                      {user.location.city}, {user.location.country}
                    </p>
                  </div>
                  <ul key={user.password} className="list-group list-group-flush">
                    <li key={user.email} className="list-group-item fs-4">
                      <i className="fa-solid fa-envelope-open-text" />&nbsp;
                      {user.email}
                    </li>
                    <li key={user.name.gender} className="list-group-item fs-4">
                      <i className="fa-solid fa-mars-and-venus-burst" />&nbsp;
                      {user.gender}
                    </li>
                    <li key={user} className="list-group-item fs-4">
                      <i className="fa-solid fa-briefcase" />&nbsp;
                      Software Engineer
                    </li>
                  </ul>
                  <div className="card-body">
                    <a
                      href="https://www.linkedin.com/login/de"
                      className="card-link fs-5"
                      target='_blank'
                      rel="noreferrer">
                      <i className="fa-solid fa-link" />
                      LinkedIn
                    </a>
                    <a href="https://github.com/marketplace"
                      className="card-link fs-5"
                      target='_blank'
                      rel="noreferrer">
                      <i className="fa-brands fa-twitter" />
                      @{user.login.username}
                    </a>
                  </div>
                </>
              ))
            }
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
