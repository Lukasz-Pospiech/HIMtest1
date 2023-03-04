window.addEventListener('resize', () => {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
});

const get = id => document.getElementById(id);


if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
  }

window.addEventListener("load", function() {


    const burger = get('containerHamburger');
    burger.addEventListener("touchstart", function(event) {
      if (event.changedTouches[0]) {
          burger.classList.toggle("change");
      }
  }, false);

    let menuState = "closed";
    const menuItems = document.querySelectorAll(".menuItems");
    const menuDiv = get('menuDiv');
    burger.addEventListener("touchstart", function(event) {
        if (event.changedTouches[0]) {
            if (menuState === "closed") {
              // menuDiv.classList.remove("opacityZero");
              // menuDiv.classList.add("opacityOne");
              menuDiv.style.opacity = '1';
              for (let i = 0, j = 0; i < menuItems.length; i++, j+=150) {
                setTimeout(() => {
                  menuItems[i].classList.remove("closeMenu");
                  menuItems[i].classList.add("openMenu");
                }, j);
              }
                menuState = "open";
            }
            else if (menuState === "open") {
              // menuDiv.classList.remove("opacityOne");
              // menuDiv.classList.add("opacityZero");
              menuDiv.style.opacity = '0';
              for (let i = 0; i < menuItems.length; i++) {
                setTimeout(() => {
                  menuItems[i].classList.remove("openMenu");
                  menuItems[i].classList.add("closeMenu");
                }, 0);
              }
                menuState = "closed";
            }
        }
    }, false);







});


