import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  constructor(props) {
    super(props);

    this.addCart = this.addCart.bind(this);
  }

  addCart({ target: { name } }) {
    const { listProduct, listCat } = this.props;
    const allProducts = listProduct || listCat;
    const productCart = allProducts.find((product) => (
      product.id === name
    ));
    localStorage.setItem('product', JSON.stringify(productCart));
  }

  render() {
    const { listProduct, listCat } = this.props;
    const products = listProduct || listCat;
    return (
      <div>
        <div>
          {products.length ? products.map(({ price, title, thumbnail, id }) => (
            <div data-testid="product" key={ id }>
              <h2>{title}</h2>
              <Link data-testid="product-detail-link" to={ `/product/${id}` }>
                <img
                  src={ thumbnail }
                  alt={ title }
                />
              </Link>
              <p>{price}</p>
              <button
                type="button"
                name={ id }
                data-testid="product-add-to-cart"
                onClick={ this.addCart }
              >
                Adicionar
              </button>
            </div>
          )) : 'Nenhum produto foi encontrado'}
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  listProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  listCat: PropTypes.arrayOf(PropTypes.object).isRequired,
};
