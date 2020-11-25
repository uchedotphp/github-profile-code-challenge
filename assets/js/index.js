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
  },

  mobileNav() {
    const mobileNavbar = document.getElementById("mobileNavbar");
    const sticky = mobileNavbar.offsetTop;
    window.onscroll = function () {
      if (window.pageYOffset >= sticky) {
        mobileNavbar.classList.add("sticky");
      } else {
        mobileNavbar.classList.remove("sticky");
      }
    };
  },
};

navigation.openBurgerMenuDrawer();
navigation.mobileNav();