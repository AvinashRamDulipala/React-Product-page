var React = require('react');

/**
 * Carousel slide
 */
var CarouselSlide = React.createClass({


  /**
   * Checks to see if the index passed is the active (current) slide.
   * @param  {Number} index index of the active slide
   * @return {Boolean}
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
