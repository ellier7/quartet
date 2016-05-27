import React from 'react';
import { Router, Route, Link } from 'react-router'

var ContactTherapist = React.createClass({
  
  render: function(){
    return (
      <div id="contact-confirmation">
        <h1>{this.props.params.name} will contact you shortly!</h1>
        <h3>Thank you</h3>
        <div className="start-over"><Link to="/">Start over</Link></div>
      </div>
    )
  }
});

export default ContactTherapist;
