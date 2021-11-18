import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Category from '../components/Category';

export default class Search extends Component {
  render() {
    return (
      <div>
        <form>
          <input type="text" />
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
          <Link data-testid="shopping-cart-button" to="/cart">
            cart
          </Link>
        </form>
        <Category />
      </div>
    );
  }
}
