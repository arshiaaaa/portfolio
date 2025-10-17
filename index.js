// Mobile menu toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const mobileToggle = document.querySelector('.mobile-toggle');
    const mainNav = document.querySelector('.main-nav ul');
    const navLinks = document.querySelectorAll('.main-nav ul li a');

    // Toggle mobile menu
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Change hamburger icon to X when open
            if (mainNav.classList.contains('active')) {
                mobileToggle.innerHTML = '&times;';
                mobileToggle.style.fontSize = '32px';
            } else {
                mobileToggle.innerHTML = '&#9776;';
                mobileToggle.style.fontSize = '28px';
            }
        });

        // Close menu when clicking on a link
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                mainNav.classList.remove('active');
                mobileToggle.innerHTML = '&#9776;';
                mobileToggle.style.fontSize = '28px';
            });
        });

        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            const isClickInsideNav = mainNav.contains(event.target);
            const isClickOnToggle = mobileToggle.contains(event.target);
            
            if (!isClickInsideNav && !isClickOnToggle && mainNav.classList.contains('active')) {
                mainNav.classList.remove('active');
                mobileToggle.innerHTML = '&#9776;';
                mobileToggle.style.fontSize = '28px';
            }
        });
    }

    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                e.preventDefault();
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add resize listener to handle menu state on window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            mainNav.classList.remove('active'); // ERROR if mainNav is null
            if (mobileToggle) {
                mobileToggle.innerHTML = '&#9776;'; // ERROR if mobileToggle is null
                mobileToggle.style.fontSize = '28px';
            }
        }
    });

    // Initialize AOS (Animate On Scroll) if available
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            offset: 50,
            once: true
        });
    }
});