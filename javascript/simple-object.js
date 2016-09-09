var log = {
    s1: "You",
    s2: "are",
    s3: "awesome",
    s4: "blue"
};


var logName = function () {
    var button = document.getElementById("test-button");

    button.onclick = function () {
        alert(log.s1);
        alert(log.s2);
        alert(log.s3);
    }
};

$(document).ready(function () {

    logName();

});
