const bgImageElem = document.getElementById("bg-image");
window.addEventListener("scroll",()=>{f1() });
function f1(){
    bgImageElem.style.opacity = 1 - window.pageYOffset / 800;
    bgImageElem.style.backgroundSize =200 - window.pageYOffset / 12 + "%";
}