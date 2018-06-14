var templatesList = [
    "Me"
];
window.onload = function(){
    // Footer Copyright Year
    (function(){
        let d = new Date();
        document.querySelector("footer").innerHTML += d.getFullYear();
    })();
        
}