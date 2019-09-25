//run main only when document is ready
$(document).ready(main);

//in a modern browser it would be something like this
//document.addEventListener('DOMContentLoaded', main, false);
//but jQuery also supports older browsers with onload etc handlers




function main() {
    console.log("Running Main!");
    $("h1").css("background-color", "green");
    $(".my-txt").css("background-color", "aqua");
    
    $("p").removeClass("my-txt");
    $("p").css("color", "brown");

    $("#b2").prop("disabled", true);
    $("#b1").prop("disabled", false);
    
    // $("p").remove();
    $("p").after("<p> more text </p>");
    $("p").after("<p> Even more text </p>");
    
    //add listeners to buttons
    $(".my-btn").click(function(event) {
        console.log("My ID is" + $(this).attr('id'));

        //we could use standard Javasript DOM api to get id
        console.log("Target is: "+ event.target.id);

        console.log("Testing this", this.id);
    });

}
