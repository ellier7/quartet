import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link } from 'react-router'
import Assessment from './assessment.jsx'
import Results  from './results.jsx'
import ContactTherapist  from './contact-therapist.jsx'



var QuartetApp = React.createClass({
  render: function(){
    return (
      <div>
        <div className="title">Quartet PHQ-9 Depression Screener</div>
        <div id="begin-link">
          <Link to="assessment">Begin Assessment </Link>
        </div>
      </div>
    )
  }
});

ReactDOM.render((
  <Router>
    <Route path="/" component={QuartetApp} /> 
    <Route path="assessment" component={Assessment}/>
    <Route path="results" component={Results} />
    <Route path="contact/:name" component={ContactTherapist} />
  </Router>
), document.getElementById('app'));