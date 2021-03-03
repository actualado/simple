let navbar = document.querySelector(".nav");


function makeOption(text){
    let option=document.createElement("div");
    option.innerHTML=text;
    
    navbar.appendChild(option);
    option.className="yo";
}

let texts = ["monke","giraffe","wolf","tiger","lion"];

for(let i = 0; i<texts.length; i++){
    makeOption(texts[i]);
}