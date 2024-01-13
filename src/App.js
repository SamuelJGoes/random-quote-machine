import React from 'react';

import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import { BackgroundLines } from './components/BackgroundLines';
import { LanguageSwitcher } from './components/LanguageSwitcher';
import QuoteContainer from './components/QuoteContainer';

import translationEN from './locales/en/translation.json';
import translationPT from './locales/pt-br/translation.json';

import AssetsColors from './assets/colors';

import './styles/styles.scss';

const resources = {
  en: {
    translation: translationEN
  },
  pt: {
    translation: translationPT
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false
  }
});

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quoteIndex: 0,
      colorIndex: 0,
      opacity: 1.0
    };

    this.numberOfQuotes = resources.en.translation.quotes.length;
    this.onNewQuote = this.onNewQuote.bind(this);
  }

  componentDidMount() {
    this.onNewQuote();
  }

  getNewRandomIndex(arrayLength, oldIndex) {
    const randomIndex = Math.floor(Math.random() * arrayLength);
    if (randomIndex !== oldIndex) {
      return randomIndex;
    }
    if (oldIndex < arrayLength - 1) {
      return oldIndex + 1;
    }
    if (oldIndex > 0) {
      return oldIndex - 1;
    }
    return oldIndex;
  }

  onNewQuote() {
    this.setState((state) => ({
      colorIndex: this.getNewRandomIndex(AssetsColors.colors.length, state.colorIndex),
      opacity: 0.0
    }));

    setTimeout(() => {
      this.setState((state) => ({
        quoteIndex: this.getNewRandomIndex(this.numberOfQuotes, state.quoteIndex),
        opacity: 1.0
      }));
    }, 500);
  }

  render() {
    const color = AssetsColors.colors[this.state.colorIndex];
    const mainDivStyle = {
      backgroundColor: color,
      color: color,
      borderColor: color
    };

    return (
      <>
        <div id="main-div" style={mainDivStyle}>
          <LanguageSwitcher />
          <BackgroundLines />
          <div style={{ zIndex: 1 }}>
            <QuoteContainer
              quoteIndex={this.state.quoteIndex}
              onNewQuote={this.onNewQuote}
              color={this.state.color}
              opacity={this.state.opacity}
            />
          </div>
        </div>
      </>
    );
  }
}

export default App;
