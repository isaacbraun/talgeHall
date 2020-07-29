function dropdown() {
    let menu = document.getElementsByClassName('dropdown-menu')[0];

    if (menu.style.display == 'none') {
        menu.style.display = 'block';
    }
    else {
        menu.style.display = 'none';
    }
};