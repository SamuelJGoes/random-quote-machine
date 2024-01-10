import React from 'react';

import QuoteContainer from './components/QuoteContainer';

import AssetsQuotes from './assets/quotes'
import AssetsColors from './assets/colors'

import './styles/styles.scss'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: '',
      author: '',
      color: 'whitesmoke',
      opacity: 1.0,
    };

    this.onNewQuote = this.onNewQuote.bind(this);
  }

  componentDidMount() {
    this.onNewQuote();
  }

  getRandomIndex(arrayLength) {
    return Math.floor(Math.random() * arrayLength);
  }

  onNewQuote() {
    const quoteIndex = this.getRandomIndex(AssetsQuotes.quotes.length);
    const colorIndex = this.getRandomIndex(AssetsColors.colors.length);
    this.setState({
      color: AssetsColors.colors[colorIndex],
      opacity: 0.0,
    });

    setTimeout(() => {
      this.setState({
        ...AssetsQuotes.quotes[quoteIndex],
        opacity: 1.0
      });
    }, 500);
  }

  render() {
    const mainDivStyle = {
      backgroundColor: this.state.color,
      color: this.state.color,
      borderColor: this.state.color,
    }
    return (
      <>
        <div id="main-div" style={mainDivStyle}>
          <div className="background-lines" style={{top: '-15%', left: '0'}}/>
          <div className="background-lines" style={{top: '15%', left: '-30%'}}/>
          <div className="background-lines" style={{top: '50%', left: '-5%'}}/>
          <div className="background-lines" style={{top: '70%', left: '0%'}}/>
          <div className="background-lines" style={{top: '30%', left: '50%'}}/>
          <div style={{zIndex: 1}}>
            <QuoteContainer
              author={this.state.author}
              quote={this.state.quote}
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