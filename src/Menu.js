import React from "react";

const Menu = () => {
  return (
    <div>
      <nav className="nav">
        <div className="nav-left">
          <a className="nav-item is-brand" href="#">
            <img src="http://bulma.io/images/bulma-type.png" alt="Bulma logo" />
          </a>
        </div>

        <div className="nav-center">
          <a className="nav-item" href="#">
            <span className="icon">
              <i className="fa fa-github" />
            </span>
          </a>
          <a className="nav-item" href="#">
            <span className="icon">
              <i className="fa fa-twitter" />
            </span>
          </a>
        </div>

        <label className="nav-toggle" htmlFor="nav-toggle-state">
          <span />
          <span />
          <span />
        </label>

        <input type="checkbox" id="nav-toggle-state" />

        <div className="nav-right nav-menu">
          <a className="nav-item" href="#">
            Home
          </a>
          <a className="nav-item" href="#">
            Documentation
          </a>
          <a className="nav-item" href="#">
            Blog
          </a>

          <span className="nav-item">
            <a className="button">
              <span className="icon">
                <i className="fa fa-twitter" />
              </span>
              <span>Tweet</span>
            </a>
            <a className="button is-primary" href="#">
              <span className="icon">
                <i className="fa fa-download" />
              </span>
              <span>Download</span>
            </a>
          </span>
        </div>
      </nav>
    </div>
  );
}

export default Menu;
