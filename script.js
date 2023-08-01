// Copy menu for mobile view
function copyMenu() {
    // Copy departments
    let fromDepartments = document.querySelector(".dpt-cat");
    let toDepartments = document.querySelector(".departments");
    toDepartments.innerHTML = fromDepartments.innerHTML;

    // Copy nav menu
    let fromNav = document.querySelector(".header-nav nav");
    let toNav = document.querySelector(".off-canvas nav");
    toNav.innerHTML = fromNav.innerHTML;

    // Copy Top-nav
    let fromHeaderTop = document.querySelector(".header-top .wrapper");
    let toTopNav = document.querySelector(".off-canvas .thetop-nav");
    toTopNav.innerHTML = fromHeaderTop.innerHTML;
}
copyMenu();

// show menu for mobile
const showMenu = document.querySelector(".trigger"),
    closeMenu = document.querySelector(".t-close"),
    addSite = document.querySelector(".site");
showMenu.addEventListener("click", function () {
    addSite.classList.toggle("show-menu");
});
closeMenu.addEventListener("click", function () {
    addSite.classList.remove("show-menu");
});

// expand submenu for mobile view on click
const submenu = document.querySelectorAll(".has-child .icon-sm");
submenu.forEach((menu) => menu.addEventListener("click", toggle));

function toggle(e) {
    e.preventDefault();
    submenu.forEach((item) =>
        item != this ? item.closest(".has-child").classList.remove("expand") : null
    );
    // if(this.closest('.has-child').classList != 'expand');
    this.closest(".has-child").classList.toggle("expand");
}

// Slider
const swiper = new Swiper('.swiper', {
    
    loop: true,
  
    
    pagination: {
      el: '.swiper-pagination',
    }
    
  });