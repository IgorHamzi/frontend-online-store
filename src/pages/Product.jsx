import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productDetails: [],
    };

    // this.getProductDetails = this.getProductDetails.bind(this);
  }

  componentDidMount() {
    this.getProductDetails();
  }

  getProductDetails = async () => {
    const { match: { params: { id } } } = this.props;
    const productApi = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const responseProduct = productApi.json();
    console.log(responseProduct);
    this.setState({
      productDetails: responseProduct,
    });
  }

  render() {
    const { productDetails } = this.state;
    return (
      <div>
        <img src={ productDetails.thumbnail } alt={ productDetails.title } />
      </div>
    );
  }
}

Product.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.objectOf(PropTypes.string) }).isRequired,
};
