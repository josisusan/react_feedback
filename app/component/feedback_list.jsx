import React, { Component } from 'react';
import axios from 'axios';

class FeedbackListComponent extends Component {
  constructor() {
    super();
    this.state = {
      feedbacks: []
    };
  }

  componentWillMount() {
    this.state.feedbacks = this.fetchFeebacks(1, 10);
  }

  fetchFeebacks(page = 1, per_page = 10){
    let feedbackData;
    feedbackData = [
      {id: '123', message: 'First Hello World'},
      {id: '234', message: 'Second Hello World'},
      {id: '345', message: 'Third Hello World'},
    ];
    // feedbackData = axios.get(`/feedbacks?page=${page}&per_page=${per_page}`);
    this.state.feedbacks.push(feedbackData);
    return feedbackData;
  }

  render (){
    const feedbackLists = this.state.feedbacks;
    const displayData = feedbackLists.map(function(item, index){
      // let { id, message, sender, rating, seen } = item;
      var { id, message, sender, rating, seen } = item;
      return (<li>{ message }</li>);
    });
    return (
      <ul id="feedbackLists">
        { displayData }
      </ul>
    )
  }
}

export default FeedbackListComponent;