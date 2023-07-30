// Copy menu for mobile view
function copyMenu() {
    // Copy departments
    let fromDepartments = document.querySelector('.dpt-cat');
    let toDepartments = document.querySelector('.departments');
    toDepartments.innerHTML = fromDepartments.innerHTML; 

    // Copy nav menu
    let fromNav = document.querySelector('.header-nav nav');
    let toNav = document.querySelector('.off-canvas nav');
    toNav.innerHTML = fromNav.innerHTML;

    // Copy Top-nav
    let fromHeaderTop = document.querySelector('.header-top .wrapper');
    let toTopNav = document.querySelector('.off-canvas .thetop-nav');
    toTopNav.innerHTML = fromHeaderTop.innerHTML;
}
copyMenu();