import React from 'react';
import Login from './login'

import '../homepage.css'; // Import the CSS file
import img1 from '../images/image1.jfif';
import img2 from '../images/image2.jpg';
import img3 from '../images/image3.jfif';

import img4 from '../images/image4.jfif';
import img5 from '../images/cake34.jpg';


import img6 from '../images/image6.jfif';
import img7 from '../images/image7.jpg';

import img8 from '../images/cake9.jpg';
import img9 from '../images/image9.jpg';
import img10 from '../images/image10.jfif';

import img11 from '../images/image11.jfif';
import img12 from '../images/image12.jfif';

import img13 from '../images/image13.jfif';



import img14 from '../images/image14.jpg';
import img15 from '../images/cake36.jpg';

import img16 from '../images/image16.jfif';
import img17 from '../images/cake30.jpg';

import img18 from '../images/cake30.jpg';
import img19 from '../images/cake31.jpg';
import img20 from '../images/cake33.jpg';
import { redirect } from 'react-router-dom';







const Home = () => {


  const cartFun = () => {
   <form>

  <input type='text'>

  </input>
   </form>
  };



  return (
    <div className="homepage">
      <div className="banner">
        <h1>Delicious Cake For EveryOne</h1>
        <p>Our Service is Register All Over the World</p>
      </div>


      <div className="product-grid">
        <div className="product-item">
          <img src={img1} alt="Product 1" />
          <div className="product-info">
          <h1 className="product-name">[Amandine]</h1>
        <p className="product-description">[A chocolate layered cake filled with chocolate, caramel and fondant cream.]</p>
        <p className="product-price">Price: $[50]</p>
        <button className="add-to-cart-button" onClick={Login}>Add to Cart</button>
          </div>
        </div>



        <div className="product-item">
          <img src={img2} alt="Product 2" />
          <div className="product-info">
                <h1 className="product-name">[Amygdalopita]</h1>
        <p className="product-description">[An almond cake made with ground almonds, flour, butter, egg and pastry cream.]</p>
        <p className="product-price">Price: $[30]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>



        <div className="product-item">
          <img src={img3} alt="Product 3" />
          <div className="product-info">
          <h1 className="product-name">[Angel cake]</h1>
        <p className="product-description">[A type of layered sponge cake, often garnished with cream and food coloring.]</p>
        <p className="product-price">Price: $[90]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>



        <div className="product-item">
          <img src={img4} alt="Product 4" />
          <div className="product-info">
          <h1 className="product-name">[Angel food cake]</h1>
        <p className="product-description">[	A type of sponge cake made with egg whites, sugar, flour, vanilla, and a whipping agent such as cream of tartar.]</p>
        <p className="product-price">Price: $[90]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>



        <div className="product-item">
          <img src={img5} alt="Product 5" />
          <div className="product-info">
          <h1 className="product-name">[Apple cake]</h1>
        <p className="product-description">[A cake featuring apples, occasionally topped with caramel icing.]</p>
        <p className="product-price">Price: $[10]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>



        <div className="product-item">
          <img src={img6} alt="Product 6" />
          <div className="product-info">
          <h1 className="product-name">[Applesauce cake]</h1>
        <p className="product-description">[A cake that is prepared using applesauce, flour, and sugar as primary ingredients.]</p>
        <p className="product-price">Price: $[20]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img7} alt="Product 7" />
          <div className="product-info">
          <h1 className="product-name">[Aranygaluska]</h1>
        <p className="product-description">[A cake with yeasty dough and vanilla custard.]</p>
        <p className="product-price">Price: $[40]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img8} alt="Product 8" />
          <div className="product-info">
          <h1 className="product-name">[Avocado cake]</h1>
        <p className="product-description">[A cake prepared with avocado as a primary ingredient.]</p>
        <p className="product-price">Price: $[10]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img9} alt="Product 9" />
          <div className="product-info">
          <h1 className="product-name">[Babka]</h1>
        <p className="product-description">[	A sweet braided cake which originated in Jewish communities.]</p>
        <p className="product-price">Price: $[90]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img10} alt="Product 10" />
          <div className="product-info">
          <h1 className="product-name">[Babka Wielkanocna]</h1>
        <p className="product-description">[An Easter cake with icing.]</p>
        <p className="product-price">Price: $[90]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>

        <div className="product-item">
          <img src={img11} alt="Product 11" />
          <div className="product-info">
          <h1 className="product-name">[Ballokume[3]]</h1>
        <p className="product-description">[A cake made with corn flour, butter, sugar, and vanilla.]]</p>
        <p className="product-price">Price: $[80]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img12} alt="Product 12" />
          <div className="product-info">
          <h1 className="product-name">[Banana bread]</h1>
        <p className="product-description">[A sweet bread made with bananas, sometimes with the addition of nuts or chocolate.]</p>
        <p className="product-price">Price: $[12]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img13} alt="Product 13" />
          <div className="product-info">
          <h1 className="product-name">[Bánh chuối]</h1>
         
        <p className="product-description">[Banana cake, usually made with rice flour, coconut milk, and sugar.]</p>
        <p className="product-price">Price: $[40]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img14} alt="Product 14" />
          <div className="product-info">
          <h1 className="product-name">[Biscoff cake]</h1>
        <p className="product-description">[A cake that incorporates Lotus Biscoff cookies.[4]]</p>
        <p className="product-price">Price: $[35]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img15} alt="Product 15" />
          <div className="product-info">
          <h1 className="product-name">[Black Forest cake,]</h1>
        <p className="product-description">[	A cake featuring cherries, kirsch, and chocolate. Typically, there is one bottom layer of chocolate shortcrust and two layers of chocolate sponge cake; the cake is then filled with cherry jam and whipped cream.]</p>
        <p className="product-price">Price: $[87]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img16} alt="Product 16" />
          <div className="product-info">
          <h1 className="product-name">[]</h1>
        <p className="product-description">[Description of the cake]</p>
        <p className="product-price">Price: $[Cake Price]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>


       
        <div className="product-item">
          <img src={img17} alt="Product 17" />
          <div className="product-info">
          <h1 className="product-name">[Blackout cake]</h1>
        <p className="product-description">[A chocolate cake filled with chocolate pudding and topped with chocolate cake crumbs.]</p>
        <p className="product-price">Price: $[10]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img18} alt="Product 18" />
          <div className="product-info">
          <h1 className="product-name">[Bolo de mel]</h1>
        <p className="product-description">[A sweet, heavy cake made with molasses or honey, often with walnuts and almonds. The name translates to "honey cake".]</p>
        <p className="product-price">Price: $[250]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img19} alt="Product 19" />
          <div className="product-info">
          <h1 className="product-name">[Madeleine]</h1>
        <p className="product-description">[A small shell-shaped sponge cake.]</p>
        <p className="product-price">Price: $[65]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
        <div className="product-item">
          <img src={img20} alt="Product 20" />
          <div className="product-info">
          <h1 className="product-name">[Boston cream pie]</h1>
        <p className="product-description">[A yellow cake filled with custard and topped with some form of chocolate.]</p>
        <p className="product-price">Price: $[56]</p>
        <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
