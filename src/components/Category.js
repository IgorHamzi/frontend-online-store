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
            {categories.map(({ id, name }) => (
              <li key={ id }>
                <button data-testid="category" type="button">
                  { name }
                </button>
              </li>
            ))}
          </ol>
        </form>
      </div>
    );
  }
}
