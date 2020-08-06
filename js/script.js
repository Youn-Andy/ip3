function myFunction() {
    alert("** John Doe we have received your message. Thank you for reaching out to us. **");
}

$(document).ready(function () {
    $(".design").click(function () {
        $("#design-desc").toggle();
        $("#fig-des").slideToggle(1000);
    });
});
$(document).ready(function () {
    $(".development").click(function () {
        $("#dev-paragraph").toggle();
        $("#fig-dev").slideToggle(1000);
    });
});
$(document).ready(function () {
    $(".product-mgmt").click(function () {
        $("#prod-paragragh").toggle();
        $("#fig-prod").slideToggle(1000);
    });
});


$(document).ready(function () {
    $(".work-portfolio1").mouseenter(function () {
        $("#lay1").show();
    });
    $(".work-portfolio1").mouseleave(function () {
        $("#lay1").hide();
    });
    $(".work-portfolio2").mouseenter(function () {
        $("#lay2").show();
    });
    $(".work-portfolio2").mouseleave(function () {
        $("#lay2").hide();
    });
    $(".work-portfolio3").mouseenter(function () {
        $("#lay3").show();
    });
    $(".work-portfolio3").mouseleave(function () {
        $("#lay3").hide();
    });
    $(".work-portfolio4").mouseenter(function () {
        $("#lay4").show();
    });
    $(".work-portfolio4").mouseleave(function () {
        $("#lay4").hide();
    });
    $(".work-portfolio5").mouseenter(function () {
        $("#lay5").show();
    });
    $(".work-portfolio5").mouseleave(function () {
        $("#lay5").hide();
    });
    $(".work-portfolio6").mouseenter(function () {
        $("#lay6").show();
    });
    $(".work-portfolio6").mouseleave(function () {
        $("#lay6").hide();
    });
    $(".work-portfolio7").mouseenter(function () {
        $("#lay7").show();
    });
    $(".work-portfolio7").mouseleave(function () {
        $("#lay7").hide();
    });
    $(".work-portfolio8").mouseenter(function () {
        $("#lay8").show();
    });
    $(".work-portfolio8").mouseleave(function () {
        $("#lay8").hide();
    });
})



























/* function myFunction() {
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
}) */