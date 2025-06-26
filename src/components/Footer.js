import React from 'react';

const Footer = () => {
  const footerLinks = [
    { name: 'Products', href: '#Products' },
    { name: 'Sneakers', href: '#Sneakers' },
    { name: 'Shirts', href: '#Shirts' },
    { name: 'Caps', href: '#Caps' }
  ];

  return (
    <footer>
      <ul className="nav-links">
        {footerLinks.map((link, index) => (
          <li key={index}>
            <a href={link.href}>{link.name}</a>
            <h4 className="note">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium
              quasi repellat ex explicabo eveniet quaerat similique neque, in
              omnis magni.
            </h4>
          </li>
        ))}
      </ul>
      <p>&copy; Copyright Manny_Johnson -X- Nike_Store</p>
    </footer>
  );
};

export default Footer; 