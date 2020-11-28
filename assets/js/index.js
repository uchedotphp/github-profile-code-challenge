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

  desktopNav() {
    const desktopNavbar = document.getElementById("desktopNavbar");
    const a = document.querySelector(".navigation-desktop");
    const style = getComputedStyle(a);
    const img = document.getElementById("img");
    const name = document.getElementById("name");
    const username = document.querySelector(".name");
    const vanish = name.offsetTop;
    const stickyDesktop = desktopNavbar.offsetTop;
    if (style.display != "none") {
      window.onscroll = function () {
        if (window.pageYOffset >= stickyDesktop) {
          desktopNavbar.classList.add("stickyDesktop");
        } else {
          desktopNavbar.classList.remove("stickyDesktop");
        }

        if (window.pageYOffset >= vanish + 80) {
          img.classList.remove("hideImage");
          username.classList.add("hideImage");
        } else {
          img.classList.add("hideImage");
          username.classList.remove("hideImage");
        }
      };
    }
  }
};

navigation.openBurgerMenuDrawer();
navigation.mobileNav();
navigation.desktopNav()