document.addEventListener('DOMContentLoaded', function() {

    const hamburger = document.querySelector(".hamburger");
    const navLinks = document.querySelector(".navbar");
    const links = document.querySelectorAll(".navbar li");
    const logo = document.querySelector(".logo");

    hamburger.addEventListener('click', ()=>{
    //Animate Links
        navLinks.classList.toggle("open");
        logo.classList.toggle('logo-on');
        links.forEach(link => {
            link.classList.toggle("fade");
        });

        //Hamburger Animation
        hamburger.classList.toggle("toggle");
    });

});
