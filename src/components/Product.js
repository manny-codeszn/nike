import React from 'react';

const Product = () => {
  return (
    <div className="product">
      <img src="/img/sneakers/air force.png" alt="Air Force Sneakers" className="productImg" />
      <div className="productDetails">
        <h1 className="productTitle">Air Force</h1>
        <h2 className="productPrice">£120</h2>
        <p className="productDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus veniam
          quidem, corporis repellat nihil nemo odio! Aspernatur aliquam ratione
          qui.
        </p>
        <div className="colors">
          <div className="color"></div>
          <div className="color"></div>
        </div>
        <div className="sizes">
          <div className="size">39</div>
          <div className="size">40</div>
          <div className="size">44</div>
        </div>
        <button className="productBtn">ORDER HERE</button>
      </div>
    </div>
  );
};

export default Product; 