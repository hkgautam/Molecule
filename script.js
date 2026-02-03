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

    // Apply Now buttons are now anchor tags that link directly to the Google Forms application

    // Download Brochure button is now an anchor tag that links directly to the Google Drive file

    // Contact Us button is now an anchor tag, so it's handled by the general anchor link handler above

    // Header scroll effect (optional enhancement)
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (header && currentScroll > 100) {
            header.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
        } else if (header) {
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

