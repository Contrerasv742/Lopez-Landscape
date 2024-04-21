function openMenu(){
  var menu  = document.getElementById("menu");
  var menubtn  = document.getElementById("menu-btn");
  var nav   = document.getElementById("nav");
  var title = document.getElementById("header-title");
  var left  = document.getElementById("header-left-col");
  var right = document.getElementById("header-right-col");
  
  /*
  if(window.innerWidth >= 630 && left.style.display == "none"){
    left.style.display = "grid";
    right.style.display = "grid";
    nav.style.display = "fixed"; 
    menubtn.style.display = "none";
    title.style.position = "static";
    nav.style.display = "flex"
  } else {
    title.style.position = "relative";
    title.style.top = "22%";
    title.style.left = "2%";
    menubtn.style.display = "block";
    left.style.display = "none";
    right.style.display = "none";
    
  }*/
  
  if(menu.style.display == "block") {
    menu.style.display = "none";
    nav.style.borderBottomLeftRadius   = "20px";
    nav.style.borderBottomRightRadius  = "20px";
  } else {
    nav.style.borderBottomLeftRadius    = "0px";
    nav.style.borderBottomRightRadius   = "0px";
    nav.style.display = "block";

    menu.style.display = "block";
  }
  return null; 
}
