var React = require('react');

/**
 * Slide
 */
var CarouselSlide = React.createClass({

  /**
   * [isActiveSlide description]
   * @return {Boolean} [description]
   */
  isActiveSlide: function(){
    return this.props.index === this.props.currentSlide
  },

  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {
    let activeClassName = (this.isActiveSlide() ? 'is-active' : null)
    return (
      <li className={activeClassName}>
        <img src={this.props.image} />
      </li>
    )

  }
});

module.exports = CarouselSlide;
