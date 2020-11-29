"use strict";
console.log(document.body.clientWidth);

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
  },

  openProfile() {
    const openProfile = document.getElementById("openProfile");
    const viewProfile = document.getElementById("viewProfile");

    openProfile.addEventListener("click", (e) => {
      e.preventDefault();
      viewProfile.classList.toggle("hide");
    });

    openProfile.addEventListener("blur", () => {
      viewProfile.classList.add("hide");
    });
  },

  openProjects() {
    const openProjects = document.getElementById("openProjects");
    const viewProjects = document.getElementById("viewProjects");

    openProjects.addEventListener("click", (e) => {
      e.preventDefault();
      viewProjects.classList.toggle("hide");
    });

    openProjects.addEventListener("blur", () => {
      viewProjects.classList.add("hide");
    });
  },

  openLanguages() {
    const openLanguages = document.getElementById("openLanguage");
    const showLanguages = document.getElementById("showLanguages");

    // if (document.body.clientWidth > 768) {
      openLanguages.addEventListener("click", () => {
        if (document.body.clientWidth > 768) {
        showLanguages.classList.toggle("hide");
        }
      });

      openLanguages.addEventListener("blur", () => {
        showLanguages.classList.add("hide");
      });
    // }
  },

  openTypes() {
    const openTypes = document.getElementById("openTypes");
    const showTypes = document.getElementById("showTypes");

    // if (document.body.clientWidth > 768) {
      openTypes.addEventListener("click", () => {
        if (document.body.clientWidth > 768) {
        showTypes.classList.toggle("hide");

        }
      });

      openTypes.addEventListener("blur", () => {
        showTypes.classList.add("hide");
      });
    // }
  },

  modalLang() {
    const modalLang = document.getElementById("modalLang");
    const btn = document.getElementById("openLanguage");
    const closeBtn = document.querySelectorAll(".modal-content")[1].children[0]
      .children[1];

    
      btn.addEventListener("click", () => {
        if (document.body.clientWidth <= 768) {
        modalLang.style.display = "block";
        }
      });
      window.onclick = function (e) {
        if (e.target == modalLang) {
          modalLang.style.display = "none";
        }
      };

    closeBtn.onclick = function () {
      modalLang.style.display = "none";
    };
  },

  modalType() {
    const modalType = document.getElementById("modalType");
    const btn = document.getElementById("openTypes");
    const closeBtn = document.querySelectorAll(".modal-content")[0].children[0]
      .children[1];

    
      btn.addEventListener("click", () => {
        if (document.body.clientWidth <= 768) {
          modalType.style.display = "block";

        }
      });
      window.onclick = function (e) {
        if (e.target == modalType) {
          modalType.style.display = "none";
        }
      };

    closeBtn.onclick = function () {
      modalType.style.display = "none";
    };
  },
};
navigation.openBurgerMenuDrawer();
navigation.mobileNav();
navigation.desktopNav();
navigation.openLanguages();
navigation.openTypes();
navigation.openProfile();
navigation.openProjects();
navigation.modalLang();
navigation.modalType();
