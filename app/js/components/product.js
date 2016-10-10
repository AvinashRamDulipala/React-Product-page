var React = require('react');
var ProductImageCarousel = require('./product-detail/carousel');
var ProductPrice = require('./product-detail/product-price');
var ProductName = require('./product-detail/product-name');
var ProductOffers = require('./product-detail/product-offers');
var ProductQuantity = require('./product-detail/product-quantity');
var ProductBuyActions = require('./product-detail/product-buy-actions');
var ProductSecondaryActions = require('./product-detail/product-secondary-actions');
var ProductDetail = require('./product-detail/product-detail');

/**
* Product Detail Component
*/
  var Product = React.createClass({


  /**
   * Called before the render method is executed. Fetches data and sets it.
   */
  componentWillMount: function() {
    let self = this;

    this.serverRequest = fetch('data.json').then(
      (response) => response.json()
    ).then(function(data){

      let product = data.CatalogEntryView[0];

      this.setState({
        name: product.title,
        images: product.Images[0].AlternateImages,
        price: product.Offers[0].OfferPrice[0].formattedPriceValue,
        offers: product.Promotions,
        availabilityCode: product.purchasingChannelCode,
        features: product.ItemDescription[0].features
      })

    }.bind(this)).catch(function(err) {
      console.error(err);
    });

  },


  /**
   * Invoked immediately before component is unmounted from the DOM.
   * Abort data fetch.
   */
  componentWillUnmount: function() {
    this.serverRequest.abort(); // trigger fetch cancellation
  },


  /**
   * Set initial state properties
   *
   * @return {Object} state initial props used throughout all other
   *                        child components
   */
  getInitialState: function() {
    return {
      name: '',
      images: [],
      price: '',
      offers: [],
      availabilityCode: '',
      features: []
    }
  },
  

  /**
  * Renders the component
  * @return {String} HTML markup for the component
  */
  render: function() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <ProductName name={this.state.name}/>
            <ProductImageCarousel images={this.state.images} />
          </div>
          <div className="col-xs-12 col-sm-6">
            <ProductPrice price={this.state.price} />
            <ProductOffers promotions={this.state.offers} />
            <ProductQuantity minQuantity={1} maxQuantity={10} />
            <ProductBuyActions availabilityCode={this.state.availabilityCode} />
            <ProductSecondaryActions />
            <ProductDetail features={this.state.features} />
          </div>
        </div>
      </div>
    )
  }

})

module.exports = Product;
