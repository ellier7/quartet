import React from 'react';

var QuestionOptions = React.createClass({

  getInitialState: function () {
    return {
      selection: ''
    };
  },

  onSelection: function (e) {
    this.setState({
      selection: e.currentTarget.id
      });
    setTimeout(this.submitSelection, 100);
  },

  isActive:function(id){
    return 'btn '+((id === this.state.selection) ? 'active' : 'default');
  },

  submitSelection: function() {
    this.props.handleNext(this.state.selection)
    this.setState({ selection: '' });
  },
  
  render: function(){
    return (
      <div id="question-options">
        <div id="0" className={this.isActive("0")} onClick={this.onSelection}> Not at all </div>
        <div id="1" className={this.isActive("1")} onClick={this.onSelection}> Several days </div>
        <div id="2" className={this.isActive("2")} onClick={this.onSelection}> More than half the days in the week </div>
        <div id="3" className={this.isActive("3")} onClick={this.onSelection}> Nearly every day </div>
      </div>
    )
  }
});

export default QuestionOptions;
