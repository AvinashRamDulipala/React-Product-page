var React = require('react');

/**
 * [ProductPrice description]
 * @type {[type]}
 */
var ProductPrice = React.createClass({

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    return (
      <div className="product-price">
        <h3>{this.props.price} <span className="lead">online price</span></h3>
      </div>
    )
  }
});

module.exports = ProductPrice;
