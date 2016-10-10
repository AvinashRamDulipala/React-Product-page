var React = require('react');

/**
 * [ProductBuyActions description]
 * @type {[type]}
 */
var ProductBuyActions = React.createClass({


  /**
   * Determine wether or not hte product is available in store.
   * @return {Boolean}
   */
  isAvailableRetail: function() {
    let availability = this.props.availabilityCode;
    return (availability === "0" || availability === "2")
  },


  /**
   * Determine wether or not hte product is available online.
   * @return {Boolean}
   */
  isAvailableOnline: function() {
    let availability = this.props.availabilityCode;
    return (availability === "0" || availability === "1")
  },


  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    let showRetailButton = this.isAvailableRetail();
    let showOnlineButton = this.isAvailableOnline();

    return (
      <div className="product-buy-actions">
        <div className="row no-gutter">
            {showRetailButton &&
              <div className="col-xs-12 col-sm-6">
              <button className="btn btn-secondary btn-lg btn-full">
                Pickup in Store
              </button>
              <div className="caption">Find in a Store</div></div>}
            {showOnlineButton &&
              <div className="col-xs-12 col-sm-6">
                <button className="btn btn-primary btn-lg btn-full">Add to Cart</button>
              </div>}
        </div>
      </div>
    )
  }
});

module.exports = ProductBuyActions;
