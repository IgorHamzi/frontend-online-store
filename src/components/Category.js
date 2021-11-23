import React, { Component } from 'react';
import { getCategories } from '../services/api';

export default class Category extends Component {
  constructor() {
    super();
    this.state = {
      categories: [],
    };

    this.getCategory = this.getCategory.bind(this);
  }

  componentDidMount() {
    this.getCategory();
  }

  /*   async handleButtonCategory(category) {
    const catProduct = await getProductsFromCategoryAndQuery('', category.name);
    this.setState({ listCategory: catProduct, categoryOn: true });
    return console.log(catProduct);
  } */

  async getCategory() {
    const requestCategory = await getCategories();
    this.setState({ categories: requestCategory });
  }

  render() {
    const { categories } = this.state;
    return (
      <div>
        <form>
          <ol>
            {categories.map((category) => (
              <li key={ category.id }>
                <button
                  data-testid="category"
                  type="button"
                  name="button-category"
                >
                  { category.name }
                </button>
              </li>
            ))}
          </ol>
        </form>
      </div>
    );
  }
}
