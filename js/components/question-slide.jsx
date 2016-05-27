import React from 'react';
import QuestionOptions  from './question-options.jsx'


var QuestionSlide = React.createClass({
  //questions come from a separate file
  render: function(){
    return (
      <div id="question-slide">
        <h1>How often do you feel...</h1>
        <div className="current-question">{this.props.question} </div>
        <QuestionOptions handleNext={this.props.handleNext} />
      </div>
    )
  }
});

export default QuestionSlide;
