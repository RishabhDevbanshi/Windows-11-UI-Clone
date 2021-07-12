let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

var chrome = document.getElementsByClassName("chrome")[0];
var googlehome = document.getElementsByClassName("googlehome")[0];

var vscode = document.getElementsByClassName("vscode")[0];
var vshome = document.getElementsByClassName("vshome")[0];

taskbar.addEventListener('click',()=>{
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-650px";
    }
    else{
        startmenu.style.bottom = "50px"
    }
})

chrome.addEventListener("click",()=>{
    if(googlehome.style.left == "-650px"){
        googlehome.style.left = "340px";
    }
    else{
        googlehome.style.left = "-650px";
    }
})

vscode.addEventListener("click",()=>{
    if(vshome.style.bottom == "-650px"){
        vshome.style.bottom = "50px";
    }
    else{
        vshome.style.bottom = "-650px";
    }
});