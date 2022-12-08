const images = document.querySelectorAll(".image-container img");
let i = 0; // current slide
let j = 4; // total slides
function next() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i + 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}

function prev() {
    document.getElementById("content" + (i + 1)).classList.remove("active");
    i = (j + i - 1) % j;
    document.getElementById("content" + (i + 1)).classList.add("active");
    indicator(i + 1);
}
// окраска дива
function clickablediv(){
document.getElementById("div1").style.background="green";
}



