var yearSpan = document.querySelector('#current-year');

var navlinks = document.getElementById("navlinks");
function showMenu(){
    navlinks.style.right = "0";
}
function hideMenu(){
    navlinks.style.right = "-100%";
}

// Current year
let currentYear = new Date();
yearSpan.innerHTML = currentYear.getFullYear();