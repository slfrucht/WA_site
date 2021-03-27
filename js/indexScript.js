$(function () {
    var currentOpacity = [];
    const numPicts = 6;
    var op = 0;
    for(let i = 0;i < numPicts; ++i) {
        currentOpacity[i] = 1;
    }
    
    setInterval(function(){ 
        let nPicts = numPicts;
        let theX = $("#image-row div:nth-child(" + nPicts + ")").find(".top-image");
        console.log(theX[0].x);
        while($("#image-row div:nth-child(" + nPicts + ")").find(".top-image")[0].x > window.innerWidth) {
            nPicts--;
        }
        let pictIndex = Math.floor(Math.random() * nPicts) + 1;

        let oldOpacity = currentOpacity[pictIndex-1];       
        let newOpacity = currentOpacity[pictIndex-1] === 1.0 ? 0 : 1;       

        $("#image-row div:nth-child(" + pictIndex + ")").find(".top-image").css( "opacity", newOpacity);
        $("#image-row div:nth-child(" + pictIndex + ")").find(".bottom-image").css( "opacity", oldOpacity);
        currentOpacity[pictIndex-1] = newOpacity;

    }, 1500);
/*
    var btns = document.querySelectorAll(".select-cards");
    btns.forEach(function(element) {
    	element.addEventListener("click", function() {
            currentStyleChoice = $(this).find('img').attr('src');
           // $("#place_fabric_image").attr("src") = currentStyleChoice;
           localStorage.setItem('currentStyle', currentStyleChoice);
            window.location.assign("./select_fabric.html");
        });
    });

    var style = localStorage.getItem('currentStyle');
    $("#place_fabric_image").setAttribute("src", style);
    var fabrics = document.querySelectorAll(".select-fabric");
    fabrics.forEach(function(element) {
    	element.addEventListener("click", function() {
            element.classList.add("clickedFabric");
            if(currentFabricChoice !== -1) {
                currentFabricChoice.classList.remove("clickedFabric");
            }
            currentFabricChoice = element;
        });
    });
*/    

});
