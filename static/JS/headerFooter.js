function stickyMenu() {
    var sticky = document.getElementById('sticky');
    if (window.pageYOffset > 10) {
        sticky.classList.add('sticky');

    }
    else {
        sticky.classList.remove('sticky');
    }
}

window.onscroll = function () {
    stickyMenu();
}