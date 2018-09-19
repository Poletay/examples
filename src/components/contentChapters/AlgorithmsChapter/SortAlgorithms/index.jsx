import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import Menu from '../../../Menu';
import BubbleSort from './BubbleSort';
import CocktailSort from './CocktailSort';
import InsertionSort from './InsertionSort';

export default class SortAlgorithms extends React.Component {
  static propTypes = {
    match: PropTypes.object,
  }

  algorithmsList = [
    { name: 'Bubble Sort', path: `${this.props.match.url}/bubble`, component: BubbleSort },
    { name: 'Cocktail Sort', path: `${this.props.match.url}/cocktail`, component: CocktailSort },
    { name: 'Insertion Sort', path: `${this.props.match.url}/insertion`, component: InsertionSort },
  ];

  makeContentsList = (elements) => {
    const elementsList = elements.map(el => (
        <Route key={uniqueId()} path={el.path} component={el.component} />
    ));
    return elementsList;
  }

  render() {
    return (
      <div className="chapter-algorithms">
        <div className="row">
          <div className="col-3">
            <Menu items={this.algorithmsList} menuName='right-side-menu' menuType='flex-column' />
          </div>
          <div className="col-9">
            {this.makeContentsList(this.algorithmsList)}
          </div>
        </div>
      </div>
    );
  }
}
