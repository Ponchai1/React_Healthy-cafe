import React, { Component } from "react";

class Calculator extends Component {
  showOrders(orders) {
    if (!orders || orders.length == 0) {
      return <li className="text-right text-muted title"> ไม่มีสินค้า </li>;
    } else {
      return orders.map((order) => {
        return (
          <li className="text-right text-success title">
            {order.product.productName} x {order.quantity} ={" "}
            {order.quantity * order.product.unitPrice}
            <button
              className="btn btn-light btn-sm"
              onClick={() => this.props.onDelOrder(order.product)}
            >
              X
            </button>
          </li>
        );
      });
    }
  }
  render() {
    const { totalPrice, orders } = this.props;

    return (
      <div className="">
        <h1 className="text-right">{totalPrice}</h1>
        <hr />
        <ul className="list-unstyled">{this.showOrders(orders)}</ul>
        <hr />
        <button
          className="btn btn-block btn-danger title"
          onClick={this.props.onConfirmOrder}
        >
          Confirm
        </button>
        <button
          className="btn btn-block btn-secondary title"
          onClick={this.props.onCancelOrder}
        >
          Cancel
        </button>
      </div>
    );
  }
}

export default Calculator;
