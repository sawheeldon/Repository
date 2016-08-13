var human = {
    type: "man",
    age: "50",
    skinColor: "white",
    eyeColor: "blue"
};


var humanName = function () {
    var button = document.getElementById("test-button");

    button.onclick = function () {
        alert(human.type);
        alert(human.age);
        alert(human.skinColor);
    }
};

$(document).ready(function () {

    humanName();

});
