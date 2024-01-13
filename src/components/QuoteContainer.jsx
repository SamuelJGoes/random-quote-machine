import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

import '../styles/styles.scss';

export function QuoteContainer(props) {
  const { t } = useTranslation();
  const quote = t(`quotes.${props.quoteIndex}.quote`);
  const author = t(`quotes.${props.quoteIndex}.author`);

  return (
    <div id="quote-box">
      <h4 id="text" className="text-center" style={{ opacity: props.opacity }}>
        <i className="fa fa-quote-left"></i>
        {quote}
      </h4>
      <p id="author" className="text-right" style={{ opacity: props.opacity }}>
        - {author}
      </p>
      <div id="buttons-div">
        <button className="btn custom-button" id="tweet-quote">
          <div className="inside-button-div">
            <a
              style={{ color: 'inherit' }}
              href="https://twitter.com/intent/tweet"
              rel="noreferrer"
              target="_blank">
              <i className="fa fa-twitter"></i>
            </a>
          </div>
        </button>
        <button className="btn custom-button" id="new-quote" onClick={props.onNewQuote}>
          <div className="inside-button-div">{t('new_quote')}</div>
        </button>
      </div>
    </div>
  );
}

QuoteContainer.propTypes = {
  quoteIndex: PropTypes.number.isRequired,
  onNewQuote: PropTypes.func.isRequired,
  opacity: PropTypes.number
};

export default QuoteContainer;
