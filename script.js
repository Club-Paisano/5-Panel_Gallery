//jshint esversion: 6

/*
Author: Anthony Noel
Future Development:
-Make it so the area around the anchor tags arent clickable, just the anchor tag
-Add a panel of images
-Fix where the page jumps during scrolling (FIXED)
*/

const hamburger = document.querySelector("a[data-name=hamburger]");
const nav = document.querySelector("nav");
//Around this number on the screen the menu should be completely gone
const MENU_POS = 140;




//When the user scrolls I want the nav to change to the partial nav
const onScroll = () => {
  //Get the position of the user on the document
  let scrollPos = Math.ceil(window.scrollY || window.scrollTop || document.getElementsByTagName("html")[0].scrollTop);
  console.log(scrollPos);

  //Toogle the active class for the hamburger and the partial-menu class for the nav if the user scrolls pass the full Menu, otherwise change it to the full menu
  if(scrollPos >= MENU_POS) {
      addMiniMenu();
      console.log("It's more!");
  } else {
      removeMiniMenu();

  }

};

const addMiniMenu = () => {
  //If the elements already have the classes for the minimenu return
    // if(!nav.classList.contains("partial-menu") && hamburger.classList.contains("active"))
  if(!hamburger.classList.contains("active") && !nav.classList.contains("partial-menu")) {
    nav.classList.add("partial-menu");
    hamburger.classList.add("active");
  }


};

const removeMiniMenu = () => {
  //If the elements already dont have the classes for the minimenu return
  if(hamburger.classList.contains("active") && nav.classList.contains("partial-menu")) {
    nav.classList.remove("partial-menu");
    hamburger.classList.remove("active");

  }

};





document.addEventListener("scroll", onScroll);
