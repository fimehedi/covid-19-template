// Mobile Menu Toggle Handler
function mobileMenuToggle() {
    document.getElementById('m-menu').classList.toggle('fa-times');
    document.getElementById('nav-menu').classList.toggle('nav-toggle');
}

// Mobile Menu Toggle
document.getElementById('m-menu').addEventListener('click', () => mobileMenuToggle());


// Nav link active
const navLink = document.querySelectorAll('#nav-menu ul li a');

document.getElementById('nav-menu').addEventListener('click', (event) => {
    navLink.forEach(n => n.classList.remove('active'));
    event.target.classList.add('active');

    mobileMenuToggle();
})


// Scroll Top Show
const scrollTop = document.getElementById('scroll-top')

document.addEventListener('scroll', () => {
    // console.log(pageYOffset)
    if (pageYOffset >= 675) {
        scrollTop.style.display = 'block'
    }
    else {
        scrollTop.style.display = 'none'
    }
})