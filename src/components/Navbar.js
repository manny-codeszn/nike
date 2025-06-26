import React from 'react';

const Navbar = ({ onSlideChange, currentSlide }) => {
  const menuItems = [
    { name: 'Tatum 2', index: 0 },
    { name: 'LeBron XXI', index: 1 },
    { name: 'G.T. Jump 2', index: 2 },
    { name: 'Jordan 1', index: 3 },
    { name: 'Lebron Soldier 14', index: 4 }
  ];

  return (
    <nav>
      <div className="navTop">
        <div className="navItem">
          <img src="/img/logo.png" width="80px" height="33px" alt="Nike Logo" />
        </div>
        <div className="navItem">
          <div className="search">
            <input type="text" placeholder="Search..." className="searchInput" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </div>
        <div className="navItem">
          <span className="limitedOffer">Just Do It!</span>
        </div>
      </div>
      <div className="navBottom">
        {menuItems.map((item, index) => (
          <h3 
            key={index}
            className={`menuItem ${currentSlide === index ? 'active' : ''}`}
            onClick={() => onSlideChange(index)}
          >
            {item.name}
          </h3>
        ))}
      </div>
    </nav>
  );
};

export default Navbar; 