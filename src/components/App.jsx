import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Middle from './Middle';
import Footer from './Footer';

class App extends React.Component {
  static propTypes = {
    mainAppStructure: PropTypes.array,
  }

  render() {
    const { mainAppStructure } = this.props;
    return (
      <div className="main">
        <div className="row">
          <div className="col-12">
            <Header mainAppStructure={mainAppStructure} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Middle contents={mainAppStructure} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <Footer />
          </div>
        </div>
      </div>
    );
  }
}

App.PropTypes = {
  mainAppStructure: PropTypes.array,
};

export default App;
