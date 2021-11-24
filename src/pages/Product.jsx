import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: [],
    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const productApi = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const responseProduct = await productApi.json();
    this.setState({
      productDetails: responseProduct,
    });
  }

  render() {
    const { productDetails } = this.state;
    return (
      <div>
        <h1 data-testid="product-detail-name">
          { productDetails.title }
        </h1>
        <img src={ productDetails.thumbnail } alt={ productDetails.title } />
        <p>{ `R$${productDetails.price}` }</p>
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string) }).isRequired,
};
