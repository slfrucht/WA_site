$(function () {
    var currentStyleChoice = -1;
    var currentFabricChoice = -1;

    var style = localStorage.getItem('currentStyle');
    var el = $("#place_fabric_image");
    el[0].setAttribute("src", style);
    var fabrics = document.querySelectorAll(".select-fabric");
    fabrics.forEach(function(element) {
    	element.addEventListener("click", function() {
            //element.classList.add("clickedFabric");
           // if(currentFabricChoice !== -1) {
           //     currentFabricChoice.classList.remove("clickedFabric");
           // }
            //currentFabricChoice = element;
            currentFabricChoice = $(this).find('img').attr('src');
            var el = $("#bottom-fabric");
            el[0].setAttribute("src", currentFabricChoice);
        
            
        });
    });
 
});
