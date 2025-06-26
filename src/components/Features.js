import React from 'react';

const Features = () => {
  const features = [
    {
      icon: 'fa-solid fa-truck-fast fa-2xl featureIcon',
      title: 'FREE SHIPPING',
      description: 'Shipping all orders at zero cost'
    },
    {
      icon: 'fa-solid fa-right-left fa-2xl featureIcon',
      title: 'TWO WEEKS RETURN',
      description: 'Return items & get refunded in 2 weeks'
    },
    {
      icon: 'fa-solid fa-circle-dollar-to-slot fa-2xl featureIcon',
      title: 'GIFT CARDS',
      description: 'Buy Gift Cards and use your coupon codes'
    },
    {
      icon: 'fa-solid fa-address-card fa-2xl featureIcon',
      title: 'CONTACT US',
      description: 'Keep in touch and reach out to our customer service'
    }
  ];

  return (
    <div className="features">
      {features.map((feature, index) => (
        <div key={index} className="feature">
          <i className={feature.icon}></i>
          <span className="featureTitle">{feature.title}</span>
          <span className="featuredDes">{feature.description}</span>
        </div>
      ))}
    </div>
  );
};

export default Features; 