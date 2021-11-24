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
    if (localStorage.getItem('product').length > 0) {
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
        <h1 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h1>
        <div>
          {[listProduct].map(({ id, title, thumbnail, price }) => (
            <div key={ id }>
              <h1 data-testid="product-detail-name">
                { title }
              </h1>
              <img src={ thumbnail } alt={ title } />
              <p>{ `R$${price}` }</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
