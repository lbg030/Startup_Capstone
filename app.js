const h1 = document.querySelector(".hello h1");

console.log(h1);


function HandleTitleClick(){
    h1.innerText = "Well Clicked!";
}

function HandleTitleMouseEnter(){
    h1.innerText = "Mouse Is here!";
}

function HandleTitleMouseLeave(){
    h1.innerText = "Mouse Is gone!";
}

function HandleWindowResize(){
    const randomColor = Math.floor(Math.random()*0xffffff).toString(16);
   document.body.style.backgroundColor = "#"+randomColor;;
}

function HandleWindowCopy(){
   alert("You copied this it's illigal");
}


h1.addEventListener("click",HandleTitleClick);
h1.addEventListener("mouseenter",HandleTitleMouseEnter);
h1.addEventListener("mouseleave",HandleTitleMouseLeave);

window.addEventListener("resize",HandleWindowResize);
window.addEventListener("copy",HandleWindowCopy);