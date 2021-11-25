import React, { Component } from 'react';

export default class Cart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listProduct: [],
    };

    this.saveState = this.saveState.bind(this);
  }

  componentDidMount() {
    const { saveState } = this;
    if (localStorage.getItem('product') !== null) {
      const getProduct = JSON.parse(localStorage.getItem('product'));
      saveState(getProduct);
    }
  }

  saveState(getPro) {
    this.setState({ listProduct: getPro });
  }

  render() {
    const { listProduct } = this.state;

    return (
      <div>
        <p>
          {`Itens: ${listProduct.length}` }
        </p>
        {listProduct.length ? (
          <div>
            {listProduct.map((product) => (
              <div key={ product.id }>
                <h1 data-testid="shopping-cart-product-name">
                  { product.title }
                </h1>
                <img src={ product.thumbnail } alt={ product.title } />
                <p>{ `R$${product.price}` }</p>
                <p data-testid="shopping-cart-product-quantity">
                  1
                </p>
              </div>
            ))}
          </div>
        ) : (
          <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>)}
      </div>
    );
  }
}
