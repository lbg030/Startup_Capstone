const h1 = document.querySelector(".hello h1");
const h2 = document.querySelector(".hello h2");


function HandleTitleClick(){
    h1.innerText = "Well Clicked!";
}

function HandleTitleClick2(){
    const currentColor = h2.style.color;
    let newColor;

    if (h2.style.color === "blue"){
        newColor = "tomato"
    }
    else{
        newColor = "blue"
    }
    h2.style.color = newColor;
    ;
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

function HandleWindowOnline(){
    alert("All good");
 }

 function HandleWindowOffline(){
    alert("SOS there is no connection");
 }

h1.addEventListener("click",HandleTitleClick);
h1.addEventListener("mouseenter",HandleTitleMouseEnter);
h1.addEventListener("mouseleave",HandleTitleMouseLeave);

h2.addEventListener("click",HandleTitleClick2);


window.addEventListener("resize",HandleWindowResize);
window.addEventListener("copy",HandleWindowCopy);
window.addEventListener("online",HandleWindowOnline);
window.addEventListener("offline",HandleWindowOffline);