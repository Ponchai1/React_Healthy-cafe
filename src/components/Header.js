import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }
  componentDidUpdate() {}
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  tick() {
    this.setState({ date: new Date() });
  }
  render() {
    const height_img = { height: 70 };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-xs-8 col-md-8 text-left">
            <h1 className="text-success">
              <img style={height_img} src="/images/logo/logo.png"></img> Healthy
              Cafe
            </h1>
          </div>
          <div className="col-xs-4 col-md-4 text-right">
            <h5 className="text-muted mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>
            <ul className="list-inline">
              <li className="list-inline-item title">
                <Link to="/" className="text-success">
                  Home
                </Link>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item title">
                <Link to="/orders" className="text-success">
                  Order
                </Link>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item title">
                <Link to="/products" className="text-success">
                  Product
                </Link>
              </li>
              <li className="list-inline-item">|</li>
              <li className="list-inline-item title">
                <Link to="/about" className="text-success">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
