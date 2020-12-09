let enabled = false;

function toggleNav() {
    const menu = document.getElementById("mobile-drawer");
    if (enabled == false) {
        menu.style.transform = "translateX(0%)";
        document.getElementsByTagName('html')[0].style.overflowY = "hidden";
        enabled = true;
    }
    else {
        menu.style.transform = "translateX(-200%)";
        document.getElementsByTagName('html')[0].style.overflowY = "initial";
        enabled = false;
    }
}

let open = false;
let lastClicked = "";

function toggleDropdown(parent) {
    if (lastClicked == parent.id) {
        let buttons = document.getElementsByClassName('dropdown-button');
        for (var i = 0; buttons.length > i; i++) {
            let element = buttons[i];
            element.getElementsByTagName('svg')[0].style.transform = "rotate(0deg)";
            const dropdown = element.getElementsByClassName('inline-dropdown-menu')[0];
            dropdown.style.display = "none";
            dropdown.style.maxHeight = "0px";
        }
        lastClicked = "";
    }
    else {
        lastClicked = parent.id;
        let buttons = document.getElementsByClassName('dropdown-button');
        for (var i = 0; buttons.length > i; i++) {
            let element = buttons[i];
            element.getElementsByTagName('svg')[0].style.transform = "rotate(0deg)";
            const dropdown = element.getElementsByClassName('inline-dropdown-menu')[0];
            dropdown.style.display = "none";
            dropdown.style.maxHeight = "0px";
        }
    
        const dropdown = parent.getElementsByClassName('inline-dropdown-menu')[0];
        const chevron = parent.getElementsByClassName('chevron')[0].getElementsByTagName('svg')[0];
        chevron.style.transform = "rotate(90deg)";
        dropdown.style.display = "block";
        dropdown.style.maxHeight = "fit-content";
    }
}