import React from 'react';

const Slider = ({ currentSlide }) => {
  const sliderItems = [
    {
      image: '/img/tatum2.png',
      title: 'Tatum\n2',
      price: '£120'
    },
    {
      image: '/img/lebron_20_debut.png',
      title: 'LeBron\nXXI',
      price: '£135'
    },
    {
      image: '/img/gt_jump2a.png',
      title: 'G.T.\nJump 2',
      price: '£150'
    },
    {
      image: '/img/j1_take5b.png',
      title: 'Jordan\n1',
      price: '£133'
    },
    {
      image: '/img/lebron_s14.png',
      title: 'LB Soldier\n14',
      price: '£145'
    }
  ];

  return (
    <div className="slider">
      <div 
        className="sliderWrapper"
        style={{ transform: `translateX(${-100 * currentSlide}vw)` }}
      >
        {sliderItems.map((item, index) => (
          <div key={index} className="sliderItem">
            <img src={item.image} alt="" className="sliderImage" />
            <div className="sliderBg"></div>
            <h1 className="sliderTitle">{item.title}</h1>
            <h2 className="sliderPrice">{item.price}</h2>
            <button className="buyButton">PURCHASE</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider; 