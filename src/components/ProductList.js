import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class ProductList extends Component {
  render() {
    const { listProduct } = this.props;
    return (
      <div>
        <div>
          {listProduct.length > 0 ? listProduct.map(({ price, title, thumbnail, id }) => (
            <div data-testid="product" key={ id }>
              <h2>{ title }</h2>
              <img src={ thumbnail } alt={ title } />
              <p>{ price }</p>
            </div>
          )) : 'Nenhum produto foi encontrado' }
        </div>
      </div>
    );
  }
}

ProductList.propTypes = {
  listProduct: PropTypes.arrayOf(PropTypes.object).isRequired,
};
