//big O notation


//sum is set once no matter what the size of the array and so takes constant time.
var sum = function(array) {
    var sum = 0;
    //i also is totally independent of length of the array and so takes constant time.
    for (var i=0; i<array.length; i++) {
        sum += array[i];
    }
    // the loop then checks the arrays length accessing the array[i] and then adds it to the sum incrementing i
    //if you had 1 in the array it would happen 1 time, if you had 100 it would happen 100 times etc.

    return sum;

    //then you return the sum, which happens once and only once so it tkes constant time.
};

//If you were to express the amount of operations the function takes in term of the length of the array,
//n, you could say that it takes a * n + b operations,
//where a and b are arbitrary constants.
//The a * n term covers everything which happens in the loop,
//and the b term covers the variable initialization and returning.

//O(1) - Constant time. How long it takes is independent of how many items. The holy grail of complexity.
//O(log(n)) - Logarithmic time. Very long inputs don't take much longer than fairly short inputs.
//O(log(n)) - Logarithmic time. Very long inputs don't take much longer than fairly short inputs.
//O(n log n) - n*log(n) time. Common in sorting algorithms.
//O(n^2) - Polynomial time. As n increases, things start to get slow pretty quickly.
//O(2^n) - Exponential time. As n increases, things start to get slow incredibly quickly.
//O(n!) - Factorial time. Everything bad about exponential time. But worse.


var App = React.createClass({
    getInitialState: function() {
        return {
            showResults: false,
            articles: [ ]
        };

    },

    constructor: function() {
        super();
        this.state = {
                        showResults: false,
,
            articles: [showResults: false,]
        }
    }
    componentDidMount: function(){
       fetch('https://newsapi.org/v1/articles?source=techcrunch&sortBy=top&apiKey=9e6d16842a6b4368b4937a31ccf54035')
            .then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    })
    .then(function(data) {
        console.log(data);
        this.setState({ articles: [{id: 1, name:'Ray'}, {id:2, text:"AAAAAA"}]});
    });
    },
    onClick: function() {
        this.setState({ showResults: true });
        $('.titlePage').hide();
        $('.submitButton').hide();
    },

    render: function() {
        return (
            <div>
                <div> <TitlePage/> </div>
                <div className="col-xs-12">
                <input type="submit" className="btn btn-primary submitButton" onClick={this.onClick} />
                </div>
                { this.state.showResults ? <MainPage /> : null }
                {this.renderData}
                {this.state.articles}
            </div>
        );
    }
});
