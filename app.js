let taskbar = document.getElementsByClassName("taskbar")[0];
let startmenu = document.getElementsByClassName("startmenu")[0];

var chrome = document.getElementsByClassName("chrome")[0];

var vscode = document.getElementsByClassName("vscode")[0];
var vshome = document.getElementsByClassName("vshome")[0];

var github = document.getElementsByClassName("github")[0];

var gfg = document.getElementsByClassName("gfg")[0];

var codepen = document.getElementsByClassName("codepen")[0];

taskbar.addEventListener("click", () => {
  if (startmenu.style.bottom == "50px") {
    startmenu.style.bottom = "-650px";
  } else {
    startmenu.style.bottom = "50px";
  }
});

chrome.addEventListener("click", () => {
    MyPath = "https://www.google.com/";
    window.open(
      MyPath,
      "",
      "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657"
    );
  });

  codepen.addEventListener("click",()=>{
    MyPath = "https://codepen.io/pen/";
    window.open(
      MyPath,
      "",
      "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=800,width=800"
    );
})

gfg.addEventListener("click",()=>{
    MyPath = "https://ide.geeksforgeeks.org/";
    window.open(
      MyPath,
      "",
      "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657"
    );
})

github.addEventListener("click", () => {
    MyPath = "https://github.com/RishabhDevbanshi/Windows-11-UI-Clone";
    window.open(
      MyPath,
      "",
      "toolbar=no,status=no,menubar=no,location=center,scrollbars=no,resizable=no,height=500,width=657"
    );
  });

vscode.addEventListener("click", () => {
  if (vshome.style.bottom == "-650px") {
    vshome.style.bottom = "50px";
  } else {
    vshome.style.bottom = "-650px";
  }
});
