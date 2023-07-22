import React from 'react';
import {Routes,Route} from "react-router-dom";
import '../homepage.css'; // Import the CSS file
import Sidebar from './sidebar';
import Team from "./Team";
import Cakes from "./Cakes";
import Contactus from "./Contactus";

import Services from "./Services";
import img1 from '../images/cake1.jpg';
import img2 from '../images/cake2.jpg';
import img3 from '../images/cake3.jpg';
import img4 from '../images/cake13.jpg';
import img5 from '../images/cake5.jpg';
import img6 from '../images/cake6.jpg';
import img7 from '../images/cake7.jpg';
import img8 from '../images/cake9.jpg';
import img9 from '../images/cake12.jpg';
import img10 from '../images/cake11.jpg';
import img11 from '../images/cake14.avif';
import img12 from '../images/cake15.avif';
import img13 from '../images/cake16.avif';
import img14 from '../images/cake17.avif';
import img15 from '../images/cake18.avif';
import img16 from '../images/cake19.avif';
import img17 from '../images/cake8.avif';
import img18 from '../images/cake21.avif';
import img19 from '../images/cake22.avif';
import img20 from '../images/cake23.avif';

const Home = () => {
  return (
    <div className="homepage">
      <div className="banner">
        <h1>Welcome to Our Website</h1>
        <p>Discover amazing products and services</p>
      </div>

      <Sidebar />

      <div className="product-grid">
        <div className="product-item">
          <img src={img1} alt="Product 1" />
          <div className="product-info">
            <h3>Caterpillar cake</h3>
            <p>$10</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img2} alt="Product 2" />
          <div className="product-info">
            <h3>Charlotte (cake)</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img3} alt="Product 3" />
          <div className="product-info">
            <h3>Cheesecake</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img4} alt="Product 4" />
          <div className="product-info">
            <h3>Chestnut cake</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img5} alt="Product 5" />
          <div className="product-info">
            <h3>Chhena poda</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img6} alt="Product 6" />
          <div className="product-info">
            <h3>Chiffon cake</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img7} alt="Product 7" />
          <div className="product-info">
            <h3>Chocolate cake</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img8} alt="Product 8" />
          <div className="product-info">
            <h3>Chocotorta</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img9} alt="Product 9" />
          <div className="product-info">
            <h3>Christmas cake</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img10} alt="Product 10" />
          <div className="product-info">
            <h3>Clementine cake</h3>
            <p>$15</p>
          </div>
        </div>

        <div className="product-item">
          <img src={img11} alt="Product 11" />
          <div className="product-info">
            <h3>Coffee cake</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img12} alt="Product 12" />
          <div className="product-info">
            <h3>Coffee and walnut cake</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img13} alt="Product 13" />
          <div className="product-info">
            <h3>
            Cookie Cake
            </h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img14} alt="Product 14" />
          <div className="product-info">
            <h3>Cornbread</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img15} alt="Product 15" />
          <div className="product-info">
            <h3>Cozonac</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img16} alt="Product 16" />
          <div className="product-info">
            <h3>Crema de fruta</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img17} alt="Product 17" />
          <div className="product-info">
            <h3>Cremeschnitte</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img18} alt="Product 18" />
          <div className="product-info">
            <h3>Jublie cake</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img19} alt="Product 19" />
          <div className="product-info">
            <h3>Molten Lava Cake</h3>
            <p>$15</p>
          </div>
        </div>
        <div className="product-item">
          <img src={img20} alt="Product 20" />
          <div className="product-info">
            <h3>Cupcake</h3>
            <p>$15</p>
          </div>
        </div>
      </div>
   
<Team/>
<Services/>
<Cakes></Cakes>
<Contactus></Contactus>
    </div>
  );
};

export default Home;
