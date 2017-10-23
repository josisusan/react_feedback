import React, { Component } from 'react';
import { render } from 'react-dom';
import FeedbackListComponent from './component/feedback_list.jsx'

class App extends Component {
  render() {
    return (
      <FeedbackListComponent />
    )
  }
}

window.addEventListener('load', () => {
  render(<App />, document.getElementById('app'));
});