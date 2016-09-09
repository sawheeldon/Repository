console.log('Console log starting');
//global var

var i = 1;
var err = '';
//master function

function start(err, i) {
    if (err) {
        console.log("This hasn't worked");
    } else {
        onStart(i);
    }
}

//make counter function

function onStart(i) {
    for (i = 1; i <= 100; i++) {
        //console.log("I am inside onStart function", i);
        onProgress(i);
        end(i);
    }
}


// make on Progress function
function onProgress(i) {
    if ((i === 10) || (i === 20) || (i === 30) || (i === 40) || (i === 50) || (i === 60) || (i === 70) || (i === 80) || (i === 90)) {
        console.log("Progressing", (i + "%"));
    }
}

// end function

function end(i) {
    if (i == 100) {
        console.log("Done");
    }
}

console.log(start(err, 1));

console.log('Console log ending');
