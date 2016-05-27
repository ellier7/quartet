import React from 'react';
import therapists from '../therapists.js'
import ContactTherapist  from './contact-therapist.jsx'

import { Router, Route, Link } from 'react-router'


var Results = React.createClass({
  scoreCategory: function() {
    var score = this.props.score.reduce((a, b) => a + b, 0);
    if (score > 19) {
      return "severe";
    } else if (score > 14 && score < 20) {
      return "moderately severe";
    } else if (score > 9 && score < 15) {
      return "moderate";
    }else if (score > 3 && score < 10) {
      return "mild";
    } else {
      return "none";
    }
  },

  contactTherapist: function(therapist) {
    return (
      <ContactTherapist therapist={therapist}></ContactTherapist>
      )
  },

  therapyOptions: function() {
    var score = this.props.score.reduce((a, b) => a + b, 0);

    if (score > 14) {
     return (therapists.map((therapist) => {
        return (
          <div className="therapist-card">
            <img src={therapist.image} />
            <div className="therapist-info">
              <div>{therapist.name}</div>
              <div>{therapist.phone}</div>
              <div><Link to={`/contact/${therapist.name}`}>Contact this therapist</Link></div>
            </div>
          </div>
        )
      })
     )
    }
  },

  render: function(){
    var score = this.props.score.reduce((a, b) => a + b, 0);
    return (

      <div>
        <h1 id="score"> Your score is: {score} - {this.scoreCategory()}</h1>
        <h3 id="guide">Depression Severity: 0-4 none, 5-9 mild, 10-14 moderate, 15-19 moderately severe, 20-27 severe.</h3>
        {this.therapyOptions()}
        <div className="start-over"><Link to="/">Start over </Link></div>
      </div>
    )
  }
});

export default Results;