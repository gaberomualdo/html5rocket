var templatesList = [
    ["Me","Me","#1F3845"],
    ["Soon","Soon","#0D1E35"],
    ["Carbon","Carbon","#0F0F0E"]
];
window.onload = function(){
    // Footer Copyright Year
    (function(){
        let d = new Date();
        document.querySelector("footer").innerHTML += d.getFullYear();
    })();
    
    // Add Template Links
    (function(){
        templatesList.forEach(function(item,index){
            document.querySelector("div.mainDownloadArea").innerHTML += "<div class='template' style='--main-color: " + item[2] + ";'><a class='imageLink' href='https://html5rocket.github.io/" + item[1] + "'><img src='assets/img/templateHeroImages/" + item[1] + ".png'></a><div class='mainArea'><h1>" + item[0] + "</h1><ul class='links'><a class='demo' href='https://html5rocket.github.io/" + item[1] + "'>Live Demo</a><a href='assets/downloads/" + item[1] + ".zip' download><span>Free</span> Download</a></ul></div></div>";
        });
    })();
}