// toggle icon nav bar
let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.nav-bar');

menuIcon.onclick =()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('action');

};






// scroll selction active links


// slection opd sections and section links
let sections=document.querySelectorAll('section');
let navLinks=document.querySelectorAll('header nav a');

window.onscroll= () =>{
    sections.forEach( sec =>{
        let top = window.scrollY;
        let offset= sec.offsetTop - 150;
        let height= sec.offsetHeight;
        let id= sec.getAttribute('id');

        if (top>=offset && top< offset+height){
            navLinks.forEach(links=>{
                links.classList.remove('action');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('action');
            });
        };
    });

    // remove toggle icon ad navbar when click navbar list 
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('action');
};


// scroll reveal
ScrollReveal({
     reset: true,
     distance:'80px',
     duration:2000,
     delay:200
}); 

ScrollReveal().reveal('.home-content, .heading ', { origin:'top'});
ScrollReveal().reveal('.image,.image2,.services-container,.portfolio-box, .contact form', { origin:'bottom'});
ScrollReveal().reveal('.about-content p', { origin:'left'});

