let cube = document.querySelector(".cube");
let vertikal = 0;
let horizontal = 0;

document.onkeydown = function(e) {
    if(e.keyCode === 38){
        ++vertikal;
    }
    if(e.keyCode === 40){
        --vertikal;
    }
    if(e.keyCode === 39){
        ++horizontal;
    }
    if(e.keyCode === 37){
        --horizontal;
    }

    cube.style.transform = `rotateX(${vertikal}deg) rotateY(${horizontal}deg)`;
    
    // console.log(e.keyCode);
    console.log(vertikal);
    console.log(horizontal);
    
}