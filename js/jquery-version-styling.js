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
        $("#test-button-2").text("Wow you actually click me!");
        window.setTimeout(function () {
            $("#test-button-2").html("Button Two (Press Me) !!");
        }, 5000);
    });
}

function hideHeader() {
    $("#test-button-3").click(function () {
        //alert("working");
        $("h1").hide(1);
        $("#test-button-4").css({
            "width": "100%",
            "height": "80px",
            "background-color": "#00ffa4",
            "font-size": "30px",
        });
    });
}

function showHeader() {
    $("#test-button-4").click(function () {
        //alert("working");
        $("h1").show(1);
        $("#test-button-4").css({
            "width": "20%",
            "height": "30px",
            "background-color": "darkseagreen",
            "color": "white",
            "font-size": "10px",
        });

    });
}

$(document).ready(function () {

    buttonStyle();
    hiddenText();
    hideHeader();
    showHeader();


});
