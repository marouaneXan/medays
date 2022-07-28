const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white py-3 shadow-sm">
        <div className="container">
          <a  className="navbar-brand">
            <img src={require("../../assets/images/medays.jpg")} alt="medays logo" id="logo-title"/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <h5>SOUS LE HAUT PATRONAGE DE SA MAJESTÉ LE ROI MOHAMMED VI</h5>
            </ul>

            <div className="btn">
              <a className="btn btn-outline-dark ms-2">
                <i className="fa fa-sign-in me-1" aria-hidden="true"></i>Login
              </a>
              <a className="btn btn-outline-dark ms-2">
                <i className="fa fa-user-plus me-1"></i>Register
              </a>
              <button className="btn ms-2">
                <i
                  className="fa-solid fa-cart-shopping"
                  
                ></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
