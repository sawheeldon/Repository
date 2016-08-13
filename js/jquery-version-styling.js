function buttonStyle() {
    $("#test-button").css({
        "margin-left": "auto",
        "margin-right": "auto",
        "top": "10px",
        "width": "100%",
        "padding": "10px",
        "background-color": "#cfa1f6"
    });
}

function hiddenText() {
    $("#test-button-2").click(function () {
        //alert("Working ?");
        $("p").toggle(1);
    });
}

$(document).ready(function () {

    buttonStyle();
    hiddenText();


});
