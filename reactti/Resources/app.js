import React, { Component } from 'react';
import { render } from 'react-titanium';

class App extends Component {
  state = { counter: 0 };

  increment = () => this.setState({
    counter: this.state.counter + 1
  });

  open = window => {
    if (this.opened || !window) return;

    this.opened = true;
    window.open();
  }

  render() {
    return (
      <window
        onClick={ this.increment }
        ref={ this.open }
      >
        <label color="#09f">
          We got to: { this.state.counter }
        </label>
      </window>
    );
  }
}

render(<App />);
