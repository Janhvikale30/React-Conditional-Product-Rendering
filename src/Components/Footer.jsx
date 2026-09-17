import React from "react";

function Footer() {
  return (
    <>
      <footer className="bg-body-tertiary text-center text-md-start py-4 mt-auto border-top">
        <div
          className="container d-md-flex justify-content-between align-items-center"
          style={{ backgroundColor: "steelblue" }}
        >
          <div className="text-muted mb-2 mb-md-0">
            &copy; 2026 Flipkart, Inc. All rights reserved.
          </div>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-muted">
                About
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </>
  );
}

export default Footer;
