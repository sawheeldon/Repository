var React = require('react');
var ReactDOM = require('react-dom');

var HelloWorld = React.createClass({
    render() {
        return(
          <div>
            <h1>Hello World<h1>
            <p>Whats going on?</p>
          </div>;
          );
    }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render( < HelloWorld / > , document.getElementById('test'));
});
