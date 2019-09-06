var container = document.querySelector('.grid-container');
var navbar = document.querySelector('.nav-bar');

container.addEventListener('scroll', function(){
    navbar.style.color = "red";
})