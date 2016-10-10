var React = require('react');

/**
 * Component that displays the product name
 */
var ProductName = React.createClass({

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {

      return (
        <div className="product-name">
          <h1 className='title text-center'>{this.props.name}</h1>
        </div>
      )

  }
});

module.exports = ProductName;
