var HelloWorld = React.createClass({
    render: function() {
        return <div>
            Hello World
            </div>;
    }
});

document.addEventListener('DOMContentLoaded', function() {
    ReactDOM.render( < HelloWorld / > , document.getElementById('test'));
});
