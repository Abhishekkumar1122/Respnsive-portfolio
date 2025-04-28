
//new java script code  -----------------------------------------

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');

// // Toggle navbar and icon on click
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// // Scroll sections and add animations
// let navLinks = document.querySelectorAll('header nav a');
// let sections = document.querySelectorAll('section');

// window.onscroll = () => {
//     navLinks.forEach(link => {
//         link.addEventListener('click', function(e) {
//             e.preventDefault();
//             let id = this.getAttribute('href').slice(1);
//             let section = document.getElementById(id);
//             let headerHeight = document.querySelector('header').offsetHeight;    
//             let sectionTop = section.offsetTop - headerHeight;
//             window.scrollTo({ top: sectionTop, behavior: 'smooth' });
//         });
//     });

//     sections.forEach(section => {
//         let sectionTop = section.offsetTop - window.innerHeight;
//         let sectionBottom = section.offsetTop + section.offsetHeight;
//         if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
//             section.classList.add('show-animate');
//         } else {
//             section.classList.remove('show-animate');
            
//         }
//     });

//     // Sticky header
//     let header = document.querySelector('header');
//     header.classList.toggle('sticky', window.scrollY > 100);

//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };








// date 21 apr 2025

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let navLinks = document.querySelectorAll('header nav a');
// let sections = document.querySelectorAll('section');
// let header = document.querySelector('header');

// // Toggle navbar and icon on click
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// // Smooth scroll to section on nav link click
// navLinks.forEach(link => {
//     link.addEventListener('click', function(e) {
//         e.preventDefault();
//         let id = this.getAttribute('href').slice(1);
//         let section = document.getElementById(id);
//         let headerHeight = header.offsetHeight;
//         let sectionTop = section.offsetTop - headerHeight;

//         window.scrollTo({ top: sectionTop, behavior: 'smooth' });
//     });
// });

// // Scroll behavior
// window.onscroll = () => {
//     // Animate sections on scroll
//     sections.forEach(section => {
//         let sectionTop = section.offsetTop - window.innerHeight;
//         let sectionBottom = section.offsetTop + section.offsetHeight;

//         if (window.scrollY > sectionTop && window.scrollY < sectionBottom) {
//             section.classList.add('show-animate');
//         } else {
//             section.classList.remove('show-animate');
//         }
//     });

//     // Sticky header
//     header.classList.toggle('sticky', window.scrollY > 100);

//     // Remove navbar and icon toggle when scrolling
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };




// //----------trial2.0
// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let navLinks = document.querySelectorAll('header nav a');
// let sections = document.querySelectorAll('section');
// let header = document.querySelector('header');

// // Toggle navbar and icon on click
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// // Smooth scroll to section on nav link click
// navLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         let id = this.getAttribute('href').slice(1);
//         let section = document.getElementById(id);

//         if (section) {
//             let headerHeight = header.offsetHeight;
//             let sectionTop = section.offsetTop - headerHeight;

//             window.scrollTo({
//                 top: sectionTop,
//                 behavior: 'smooth'
//             });
//         }

//         // Close the navbar on link click
//         menuIcon.classList.remove('bx-x');
//         navbar.classList.remove('active');
//     });
// });

// // Scroll behavior
// window.onscroll = () => {
//     let scrollY = window.scrollY;

//     // Animate sections on scroll
//     sections.forEach(section => {
//         let sectionTop = section.offsetTop - 300;
//         let sectionBottom = section.offsetTop + section.offsetHeight;

//         if (scrollY >= sectionTop && scrollY < sectionBottom) {
//             section.classList.add('show-animate');
//         } else {
//             section.classList.remove('show-animate');
//         }
//     });

//     // Sticky header
//     header.classList.toggle('sticky', scrollY > 100);

//     // Scrollspy for active nav link
//     sections.forEach(section => {
//         let offset = section.offsetTop - 100;
//         let height = section.offsetHeight;
//         let id = section.getAttribute('id');

//         if (scrollY >= offset && scrollY < offset + height) {
//             navLinks.forEach(link => {
//                 link.classList.remove('active');
//                 let activeLink = document.querySelector(`header nav a[href="#${id}"]`);
//                 if (activeLink) {
//                     activeLink.classList.add('active');
//                 }
//             });
//         }
//     });

//     // Remove navbar when scrolling
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// };

// // Trigger scroll event on page load to animate #home
// window.dispatchEvent(new Event('scroll'));

// let menuIcon = document.querySelector('#menu-icon');
// let navbar = document.querySelector('.navbar');
// let navLinks = document.querySelectorAll('header nav a');
// let sections = document.querySelectorAll('section');
// let header = document.querySelector('header');

// // Toggle navbar and icon on click
// menuIcon.onclick = () => {
//     menuIcon.classList.toggle('bx-x');
//     navbar.classList.toggle('active');
// };

// // Smooth scroll for nav links
// navLinks.forEach(link => {
//     link.addEventListener('click', function (e) {
//         e.preventDefault();
//         let id = this.getAttribute('href').slice(1);
//         let section = document.getElementById(id);
//         let headerHeight = header.offsetHeight;
//         let sectionTop = section.offsetTop - headerHeight;

//         window.scrollTo({ top: sectionTop, behavior: 'smooth' });
//     });
// });

// // Scroll, Animate, Sticky Header & Active Link Highlight
// function handleScroll() {
//     // Sticky header
//     header.classList.toggle('sticky', window.scrollY > 100);

//     let currentSectionId = "";

//     sections.forEach(section => {
//         const sectionTop = section.offsetTop - header.offsetHeight - 150;
//         const sectionHeight = section.offsetHeight;

//         if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//             currentSectionId = section.getAttribute('id');
//         }

//         // Animate sections
//         if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
//             section.classList.add('show-animate');
//         } else {
//             section.classList.remove('show-animate');
//         }
//     });

//     // Highlight active nav link
//     navLinks.forEach(link => {
//         link.classList.remove('active');
//         if (link.getAttribute('href') === `#${currentSectionId}`) {
//             link.classList.add('active');
//         }
//     });

//     // Close navbar on scroll
//     menuIcon.classList.remove('bx-x');
//     navbar.classList.remove('active');
// }


// // Run on scroll and page load
// window.addEventListener('scroll', handleScroll);
// window.addEventListener('load', handleScroll);


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let navLinks = document.querySelectorAll('header nav a');
let sections = document.querySelectorAll('section');
let header = document.querySelector('header');

// Toggle navbar and icon on click
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

// Smooth scroll for nav links
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        let id = this.getAttribute('href').slice(1);
        let section = document.getElementById(id);
        let headerHeight = header.offsetHeight;
        let sectionTop = section.offsetTop - headerHeight;
        window.scrollTo({ top: sectionTop, behavior: 'smooth' });
    });
});

// Handle scroll + sticky + active nav + animation
function handleScroll() {
    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Active nav link + section animation
    sections.forEach(sec => {
        const sectionTop = sec.offsetTop - header.offsetHeight;
        const sectionBottom = sec.offsetTop + sec.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
            // Remove 'active' from all nav links
            navLinks.forEach(link => link.classList.remove('active'));

            // Add 'active' to the current section link
            let currentId = sec.getAttribute('id');
            document.querySelector('header nav a[href*=' + currentId + ']').classList.add('active');

            // Show section animation
            sec.classList.add('show-animate');
        } else {
            sec.classList.remove('show-animate');
        }
    });

    // Show animation if home is in view (for page load)
    let homeSection = document.querySelector('.home');
    if (window.scrollY < homeSection.offsetHeight) {
        homeSection.classList.add('show-animate');
        document.querySelector('header nav a[href*="home"]').classList.add('active');
    }

    // Auto-close navbar on scroll
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
}

// Listen to scroll and page load
window.addEventListener('scroll', handleScroll);
window.addEventListener('load', handleScroll); // important for initial animation
