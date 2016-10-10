var React = require('react');
var ReactDOM = require('react-dom');
var Product = require('./product')

/**
 * Main Application component
 */
var Main = React.createClass({

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    return (
      <div className="container">
        <Product />
      </div>
    )
  }
})

ReactDOM.render(<Main />, document.getElementById('app'))
