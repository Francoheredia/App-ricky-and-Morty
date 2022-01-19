import React from 'react';

const Characters = ({ characters = [] }) => {
  return (
    <div className="row">
      {characters.map((element, index) => (
        <div key={index} className="col mb-5">
          <div className="card" style={{ minWidht: '200px' }}>
            <img src={element.image} alt="" />

            <div className="card-body">
              <h2 className="card-title">{element.name}</h2>
              <h3>{element.species}</h3>
              <h3>{element.status}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
