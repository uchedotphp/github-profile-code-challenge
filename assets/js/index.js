"use strict";

// for the navigation menus
const navigation = {
  openBurgerMenuDrawer() {
    var burger = document.getElementById("burger");
    var drawer = document.getElementById("drawer");
    burger.addEventListener("click", () => {
      drawer.classList.toggle("display-top-mobile-drawer");
      if (drawer.classList.contains("hide")) {
        drawer.classList.remove("hide");
      } else {
        drawer.classList.add("hide");
      }
    });
  }
};

navigation.openBurgerMenuDrawer();