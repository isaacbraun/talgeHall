function dropdown() {
    let menu = document.getElementsByClassName('dropdown-menu')[0];

    menu.classList.toggle('transition');

    if (menu.style.display == 'none') {
        menu.style.display = 'block';
        menu.style.height = 'auto';
    }
    else {
        menu.style.display = 'none';
    }
};



