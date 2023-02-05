const menuIcon = document.querySelector('.menu-icon');
const menuBody = document.querySelector('.menu-body');

const menuLinks = document.querySelectorAll('.menu-link');

if (menuIcon) {
  menuIcon.addEventListener("click", function (e) {
    document.body.classList.toggle('_lock');
    menuIcon.classList.toggle('_active');
    menuBody.classList.toggle('_active');
  });
}

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onClickLinkMenu);
    menuLink.classList.toggle("_active");
  });
}


function onClickLinkMenu() {
  document.body.classList.remove('_lock');
  menuIcon.classList.remove('_active');
  menuBody.classList.remove('_active');
}