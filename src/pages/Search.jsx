import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return (
      <form>
        <input type="text" />
        <h2 data-testid="home-initial-message">
          Digite algum termo de pesquisa ou escolha uma categoria.
        </h2>
      </form>
    );
  }
}
