$(function () {
    var currentStyleChoice = -1;

    var btns = document.querySelectorAll(".select-cards");
    btns.forEach(function(element) {
    	element.addEventListener("click", function() {
            currentStyleChoice = $(this).find('img').attr('src');
           // $("#place_fabric_image").attr("src") = currentStyleChoice;
           localStorage.setItem('currentStyle', currentStyleChoice);
            window.location.assign("./select_fabric.html");
        });
    });

    

});
