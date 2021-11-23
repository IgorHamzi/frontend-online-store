import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class ProductList extends Component {
  render() {
    const { listProduct, listCat } = this.props;
    const products = listProduct || listCat;
    return (
      <div>
        <div>
          {products.length ? products.map(({ price, title, thumbnail, id }) => (
            <div data-testid="product" key={ id }>
              <h2>{title}</h2>
              <Link to={ `/product/${id}` }>
                <img
                  src={ thumbnail }
                  alt={ title }
                  data-testid="product-detail-link"
                />
              </Link>
              <p>{price}</p>
            </div>
          )) : 'Nenhum produto foi encontrado'}
        </div>
        {console.log(listProduct)}
      </div>
    );
  }
}

ProductList.propTypes = {
  listProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
  listCat: PropTypes.arrayOf(PropTypes.object).isRequired,
};
