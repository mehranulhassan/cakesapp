import React from 'react';
import '../Sidebar.css'; // Import the CSS file

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>Categories</h2>
      <ul className="category-list">
        <li className="category-item">
          <a href="/Birthdaycake">Birthday Cakes</a>
        </li>
        <li className="category-item">
          <a href="/weddingcake">Wedding Cakes</a>
        </li>
        <li className="category-item">
          <a href="/Services">Anniversary Cakes</a>
        </li>
        <li className="category-item">
          <a href="/Cakes">Special Occasion Cakes</a>
        </li>
        {/* Add more categories */}
      </ul>
     
    </div>
  );
};

export default Sidebar;
