const navbarToggleBtn = document.querySelector('.navbar-toggle-btn');
const navbarNav = document.querySelector('.navbar-nav');

const navbarToggleFunc = function() {
    navbarToggleBtn.classList.toggle('active');
    navbarNav.classList.toggle('active');
}

navbarToggleBtn.addEventListener('click', navbarToggleFunc);





"module" ="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
 nomodule ="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
