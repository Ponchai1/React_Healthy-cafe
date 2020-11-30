import React, { Component } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Monitor from "../components/monitor/Monitor";
import { connect } from "react-redux";
import { productsFetch } from "../actions/index";

class Home extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.productsFetch();
  }
  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products} />
        <Footer company="Ponchai" email="pang@gmail.com" />
      </div>
    );
  }
}
//function นี้ คือ นำ state ที่อยุ่ใน store มาใส่ใน props ของ component นี้
const mapStatetoProps = (state) => {
  return { products: state.products };
  // console.log(state);
};

export default connect(mapStatetoProps, { productsFetch })(Home);
