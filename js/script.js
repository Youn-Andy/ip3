function myFunction() {
    alert("** John Doe we have received your message. Thank you for reaching out to us. **");
}

$(document).ready(function () {
    $("#des").click(function () {
        $("p#design").toggle();
    })
    $("div#dev").click(function () {
        $("p#development").toggle();
    })
    $("#product").click(function () {
        $("p#prod").toggle();
    })
});
$(document).ready(function () {
    $("#work4").hover(function () {
        $("#text4").append()
    })
})