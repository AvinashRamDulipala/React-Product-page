var React = require('react');

/**
 * Component that allows the user to interact with the carousel. Provides
 * Previous, Next Buttons as well as clickable thumbnails
 */
var CarouselControl = React.createClass({

  /**
   * [getInitialState description]
   * @return {[type]} [description]
   */
  getInitialState: function() {
    return {
      controlWidth: '',
      controlOffset: 0
    }
  },

  /**
   * [thumbWidth description]
   * @return {[type]} [description]
   */
  thumbWidth: function(){
      return 66;
  },

  /**
   * [componentWillReceiveProps description]
   * @param  {[type]} newProps [description]
   * @return {[type]}          [description]
   */
  componentWillReceiveProps: function(newProps){
    let width = (newProps.totalSlides * this.thumbWidth());
    this.setState({
      controlWidth: width
    });
  },


  /**
   * [getControlOffset description]
   */
  getControlOffset: function(index) {
    let thumbWidth = this.thumbWidth();
    let offset = -(index * thumbWidth);
    let isSecondToFirst = (index === -1);
    let isSecondToLast = (index === this.props.totalSlides - 2);
    console.log({
      index: index,
      totalSlides: this.props.totalSlides,
      isSecondToFirst: isSecondToFirst,
      isSecondToLast: isSecondToLast
    })

    if (isSecondToFirst || isSecondToLast) {
      return false;
    }

    return offset;
  },


  /**
   * Checks to see if the index passed is the active (current) slide.
   * @param  {Boolean} index index of the active slide
   * @return {Boolean}
   */
  isActiveSlide: function(index){
    return index === this.props.currentSlide
  },


  /**
   * Add class to control thumbnail if conditions are met.
   * @param  {Boolean} index index of the active slide
   * @return {String} className the class name to be used
   */
  className: function(index){
    if (this.isActiveSlide(index))
      return 'is-active'
  },


  /**
   * Go to the next slide
   */
  slideNext: function(){
    this.slideChange(this.props.currentSlide + 1);
  },


  /**
   * Go to the previous slide
   */
  slidePrev: function(){
    this.slideChange(this.props.currentSlide - 1);
  },


  /**
   * [slideChange description]
   * @param  {[type]} index [description]
   * @return {[type]}       [description]
   */
  slideChange: function(index){

    this.props.handleSlideChange(index);

    this.setState({
      controlOffset: this.getControlOffset(index - 1)
    });

  },


  /**
   * Renders the component
   * @return {String} HTML markup for the component
   */
  render: function() {

    let images = this.props.images;
    let firstClassName = this.props.isLeftDisabled ? 'is-first' : '';
    let lastClassName = this.props.isRightDisabled ? 'is-last' : '';

    let className = ['controls', firstClassName, lastClassName].join(' ')

    let style = {
          width: this.state.controlWidth,
          transform: `translateX(${this.state.controlOffset}px)`,
          WebkitTransition: 'transform .25s ease-in-out'
        }

    return(
      <div className="slide-control list-inline">
        <button
          className="btn btn-direction"
          disabled={this.props.isLeftDisabled}
          onClick={this.slidePrev}>
            &lsaquo;
        </button>
        <div className="controls-wrapper">
          <ul className={className} style={style}>
            {images.map(function(image, index) {
              return(
                <li key={'slide-' + index} className={this.className(index)}>
                  <a
                    href="javascript:void(0)"
                    onClick={this.slideChange.bind(null, index)}>
                    <img
                      src={image.image} />
                  </a>
                </li>
              )
            }, this)}
          </ul>
        </div>
        <button
          className="btn btn-direction"
          disabled={this.props.isRightDisabled}
          onClick={this.slideNext}>
            &rsaquo;
        </button>
      </div>
    )
  }
});

module.exports = CarouselControl;
