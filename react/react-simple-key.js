// <ul>
//   <li key="li-01">Example1</li>
//   <li key="li-02">Example2</li>
//   <li key="li-03">Example3</li>
// </ul>


var React = require('react');
var ReactDOM = require('react-dom');

var people = ['Rowe', 'Prevost', 'Gare'];

var peopleLIs = people.map(function(person, i){
  // return statement goes here:
		return <li key={'person_' + i}></li>;
});

// ReactDOM.render goes here:
ReactDOM.render(<ul>{peopleLIs}</ul>, document.getElementById('app'));
