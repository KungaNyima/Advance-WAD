export default function Footer(){
    return(
         <footer className="bg-dark text-white mt-auto">
      <div className="container py-4">
        <div className="row">
          {/* About Section */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-3">About Us</h5>
            <p className="text-white-50">
              Building modern web applications with React and Bootstrap.
              Creating beautiful, responsive designs for the web.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <a href="#" className="text-white-50 text-decoration-none">
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a href="#about" className="text-white-50 text-decoration-none">
                  About
                </a>
              </li>
              <li className="mb-2">
                <a href="#services" className="text-white-50 text-decoration-none">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#contact" className="text-white-50 text-decoration-none">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-md-4 mb-3">
            <h5 className="fw-bold mb-3">Contact Info</h5>
            <ul className="list-unstyled text-white-50">
              <li className="mb-2">
                <i className="bi bi-envelope me-2"></i>
                info@myreactapp.com
              </li>
              <li className="mb-2">
                <i className="bi bi-telephone me-2"></i>
                +1 234 567 8900
              </li>
              <li className="mb-2">
                <i className="bi bi-geo-alt me-2"></i>
                123 React Street, Web City
              </li>
            </ul>
            {/* Social Media Icons */}
            <div className="mt-3">
              <a href="#" className="text-white-50 me-3">
                <i className="bi bi-facebook fs-5"></i>
              </a>
              <a href="#" className="text-white-50 me-3">
                <i className="bi bi-twitter fs-5"></i>
              </a>
              <a href="#" className="text-white-50 me-3">
                <i className="bi bi-linkedin fs-5"></i>
              </a>
              <a href="#" className="text-white-50">
                <i className="bi bi-github fs-5"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <hr className="border-secondary" />
        <div className="row">
          <div className="col-12 text-center">
            <p className="mb-0 text-white-50">
              © 2024 MyReactApp. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
    );
}