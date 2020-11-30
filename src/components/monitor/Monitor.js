import React, { Component } from "react";
import Cal from "./Calculator";
import ProductList from "../Product/ProductList";
import Axios from "axios";

class Monitor extends Component {
  constructor(props) {
    super(props);
    this.state = { totalPrice: 0, orders: [], confirm: false, meg: "" };
    this.addOrder = this.addOrder.bind(this);
    this.delOrder = this.delOrder.bind(this);
    this.cancelOrder = this.cancelOrder.bind(this);
    this.confirmOrder = this.confirmOrder.bind(this);
  }
  addOrder(product) {
    let findOrder = this.state.orders.find(
      (order) => order.product.productId == product.productId
    );
    if (findOrder) {
      findOrder.quantity++;
    } else {
      this.state.orders.push({ product: product, quantity: 1 });
    }
    const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
    this.setState({
      totalPrice: totalPrice,
      orders: this.state.orders,
      confirm: false,
    });
  }
  delOrder(product) {
    // หาตัวที่จะลบ
    let findOrder = this.state.orders.find(
      (order) => order.product.productId == product.productId
    );
    //เหลือตัวที่ไม่ได้ลบ
    let resultOrder = this.state.orders.filter(
      (order) => order.product.productId != product.productId
    );
    //หา totalPrice ใหม่
    const totalPrice =
      this.state.totalPrice -
      findOrder.quantity * parseInt(findOrder.product.unitPrice);
    this.setState({
      totalPrice: totalPrice,
      orders: resultOrder,
      confirm: false,
    });
  }

  confirmOrder() {
    const { totalPrice, orders } = this.state;
    if (orders && orders.length > 0) {
      Axios.post("http://localhost:3001/orders", {
        orderedDate: new Date(),
        totalPrice,
        orders,
      }).then((res) => {
        this.setState({
          totalPrice: 0,
          orders: [],
          confirm: true,
          msg: "The order has been saved",
        });
      });
    } else {
      this.setState({
        totalPrice: 0,
        orders: [],
        confirm: true,
        msg: "Please select a product",
      });
    }
  }

  cancelOrder() {
    //clear order
    this.setState({ totalPrice: 0, orders: [], confirm: false });
  }

  render() {
    return (
      <div className="container-fluid">
        {this.state.confirm && (
          <div className="alert alert-secondary title text-right" role="alert">
            {this.state.msg}
          </div>
        )}

        <div className="row">
          <div className="col-md-9">
            <ProductList
              products={this.props.products}
              onAddOrder={this.addOrder}
            />
          </div>
          <div className="col-md-3">
            <Cal
              totalPrice={this.state.totalPrice}
              orders={this.state.orders}
              onDelOrder={this.delOrder}
              onCancelOrder={this.cancelOrder}
              onConfirmOrder={this.confirmOrder}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
