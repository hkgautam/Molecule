// Smooth scrolling for navigation links
document.addEventListener('DOMContentLoaded', function() {
    // Snackbar close functionality
    const snackbar = document.querySelector('.snackbar');
    const snackbarClose = document.querySelector('.snackbar-close');
    const header = document.querySelector('.top-header');
    
    if (snackbarClose && snackbar && header) {
        snackbarClose.addEventListener('click', function() {
            snackbar.classList.add('hidden');
            // Update header position when snackbar is hidden
            header.style.top = '0';
        });
    }

    // Add smooth scroll behavior to all anchor links
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // Add click handlers for Apply Now buttons
    const applyButtons = document.querySelectorAll('.btn-apply-yellow, .btn-apply-hero');
    applyButtons.forEach(button => {
        button.addEventListener('click', function() {
            // You can add your application form logic here
            console.log('Apply Now clicked');
            // Example: window.location.href = '/apply';
        });
    });

    // Add click handler for Download Brochure button
    const downloadButton = document.querySelector('.btn-download');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            console.log('Download Brochure clicked');
            // You can add download logic here
            // Example: window.open('/brochure.pdf', '_blank');
        });
    }

    // Add click handler for Contact Us button
    const contactButton = document.querySelector('.btn-contact');
    if (contactButton) {
        contactButton.addEventListener('click', function() {
            console.log('Contact Us clicked');
            // You can add contact form logic here
            // Example: window.location.href = '/contact';
        });
    }

    // Header scroll effect (optional enhancement)
    let lastScroll = 0;
    const header = document.querySelector('.top-header');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        } else {
            header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
        }
        
        lastScroll = currentScroll;
    });

    // Mobile menu toggle (if needed for responsive design)
    // This can be expanded if you add a hamburger menu for mobile
    function handleMobileMenu() {
        // Add mobile menu logic here if needed
    }
});

