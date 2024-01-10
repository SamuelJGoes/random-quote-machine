import React from 'react';
import PropTypes from 'prop-types';

import '../styles/styles.scss'

class QuoteContainer extends React.Component {

  render() {
    return (
      <div id="quote-box">
        <h4 id="text" className="text-center" style={{opacity: this.props.opacity}}><i className="fa fa-quote-left"></i> {this.props.quote}</h4>
        <p id="author" className="text-right" style={{opacity: this.props.opacity}}>- {this.props.author}</p>
        <div id='buttons-div'>
          <button className="btn custom-button" id="tweet-quote"><div className="inside-button-div"><a style={{color: 'inherit'}} href='https://twitter.com/intent/tweet' target="_blank"><i className="fa fa-twitter"></i></a></div></button>
          <button className="btn custom-button" id="new-quote" onClick={this.props.onNewQuote}><div className="inside-button-div">New quote</div></button>
        </div>
      </div>

    );
  }
}

QuoteContainer.propTypes = {
  quote: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  onNewQuote: PropTypes.func.isRequired,
}

export default QuoteContainer;