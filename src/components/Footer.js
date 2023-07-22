import React from 'react';
import '../App.css'

const Footer = () => {
  return (
    <footer className="f">
      <div className="f-c">
        <div className="f-s">
          <h4 className="f-h">Customer service</h4>
          <p className="f-t">Help&Contactus</p>
          <p className="f-t">Return&Refunds</p>
          <p className="f-t">Online Stores</p>
          <p className="f-t">Term&Conditions</p>
        </div>
        <div className="f-s">
          <h4 className="f-h">Company</h4>
          <p className="f-t">What we Do</p>
          <p className="f-t">Available services</p>
          <p className="f-t">Latest Posts</p>
          <p className="f-t">FAQS</p>
        </div>
        <div className="f-s">
          <h4 className="f-h">Social Media</h4>
          <p className="f-t">Twitter</p>
          <p className="f-t">Instagram</p>
          <p className="f-t">Tumbir</p>
          <p className="f-t">Pinterest</p>
        </div>
        <div className="f-s">
          <h4 className="f-h">Profile</h4>
          <p className="f-t">My Account</p>
          <p className="f-t">Check out</p>
          <p className="f-t">Order Tracking</p>
          <p className="f-t">Help&Support</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
