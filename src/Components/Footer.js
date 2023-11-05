import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto py-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <h2 className="text-xl font-semibold mb-4">About</h2>
            <ul className="text-sm">
              <li className="mb-2"><a href="#">About Us</a></li>
              <li className="mb-2"><a href="#">Contact Us</a></li>
              <li className="mb-2"><a href="#">Careers</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Help</h2>
            <ul className="text-sm">
              <li className="mb-2"><a href="#">Payments</a></li>
              <li className="mb-2"><a href="#">Shipping</a></li>
              <li className="mb-2"><a href="#">Cancellation & Returns</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Policy</h2>
            <ul className="text-sm">
              <li className="mb-2"><a href="#">Return Policy</a></li>
              <li className="mb-2"><a href="#">Terms Of Use</a></li>
              <li className="mb-2"><a href="#">Security</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-xl font-semibold mb-4">Social</h2>
            <ul className="text-sm">
              <li className="mb-2"><a href="#">Facebook</a></li>
              <li className="mb-2"><a href="#">Twitter</a></li>
              <li className="mb-2"><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
