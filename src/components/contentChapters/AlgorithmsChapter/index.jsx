import React from 'react';
import { Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import { uniqueId } from 'lodash';
import LeftSideMenu from '../../Middle/LeftSideMenu';
import SearchAlgorithms from './SearchAlgorithms';
import SortAlgorithms from './SortAlgorithms';
import DinamicProgAlgorithms from './DinfmicProgAlgorithms';

export default class AlgorithmsChapter extends React.Component {
  static propTypes = {
    match: PropTypes.object,
  }

  algorithmsList = [
    { name: 'Search Algorithms', path: `${this.props.match.url}/search`, component: SearchAlgorithms },
    { name: 'Sort Algorithms', path: `${this.props.match.url}/sort`, component: SortAlgorithms },
    { name: 'Dinamic Programming', path: `${this.props.match.url}/dinamicprog`, component: DinamicProgAlgorithms },
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
            <LeftSideMenu parentUrl={this.props.match.url} items={this.algorithmsList} />
          </div>
          <div className="col-9">
            {this.makeContentsList(this.algorithmsList)}
          </div>
        </div>
      </div>
    );
  }
}
