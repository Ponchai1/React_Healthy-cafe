import React, { Component } from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import ProductList from "../../components/Product/ProductList";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { productsFetch, productDelete } from "../../actions/index";

class Product extends Component {
  constructor(props) {
    super(props);
    this.delProduct = this.delProduct.bind(this);
    this.editProduct = this.editProduct.bind(this);
  }

  componentDidMount() {
    this.props.productsFetch();
  }
  delProduct(product) {
    this.props.productDelete(product.id);
  }
  editProduct(product) {
    //redirect page
    this.props.history.push("/products/edit/" + product.id);
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <h1>Products</h1>
            </div>
            <div className="col-md-6 text-right">
              <button
                className="btn btn-success title"
                onClick={() => this.props.history.push("/products/add")}
              >
                ADD
              </button>
            </div>
          </div>
          <ProductList
            products={this.props.products}
            onDelProduct={this.delProduct}
            onEditProduct={this.editProduct}
          />
        </div>
        <Footer />
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { products: state.products };
};

export default withRouter(
  connect(mapStateToProps, { productsFetch, productDelete })(Product)
);
