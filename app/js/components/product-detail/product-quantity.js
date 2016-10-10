var React = require('react');

/**
 * [ProductQuantity description]
 * @type {[type]}
 */
var ProductQuantity = React.createClass({

  /**
   * [getInitialState description]
   * @return {[type]} [description]
   */
  getInitialState: function() {
    return {
      quantity: 0,
      isMinQuantity: true
    }
  },

  /**
   * [isMinQuantity description]
   * @return {Boolean} [description]
   */
  isMinQuantity: function(){
    return (this.state.quantity - 1 === this.props.minQuantity)
  },

  /**
   * [isMaxQuantity description]
   * @return {Boolean} [description]
   */
  isMaxQuantity: function(){
    return (this.state.quantity + 1 === this.props.maxQuantity)
  },

  /**
   * [addQuantity description]
   */
  addQuantity: function() {
      this.setState({
        quantity: this.state.quantity + 1,
        isMinQuantity: this.isMinQuantity(),
        isMaxQuantity: this.isMaxQuantity()
      });
  },

  /**
   * [decQuantity description]
   * @return {[type]} [description]
   */
  decQuantity: function() {
    let quantity = this.state.quantity;

    this.setState({
      quantity: quantity - 1,
      isMinQuantity: this.isMinQuantity(),
      isMaxQuantity: this.isMaxQuantity()
    })

  },

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    return (
      <div className="product-quantity">
        <div className="label">Quantity</div>
        <div className="controls">
          <button
          disabled={this.state.isMinQuantity}
          onClick={this.decQuantity}>
            &#8722;
          </button>
          <strong>{this.state.quantity}</strong>
          <button
          disabled={this.state.isMaxQuantity}
          onClick={this.addQuantity}>
            &#43;
          </button>
        </div>
      </div>
    )
  }
});

module.exports = ProductQuantity;
