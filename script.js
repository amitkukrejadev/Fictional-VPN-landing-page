document.addEventListener("DOMContentLoaded", function () {
    // Show loading overlay
    const loadingOverlay = document.getElementById("loading");
    if (loadingOverlay) {
        loadingOverlay.style.display = "none"; // Hide loading overlay after page load
    }

    // Menu Functionality
    const menuButton = document.querySelector('.menu-button');
    const menu = document.querySelector('.menu');

    if (menuButton && menu) {
        menuButton.addEventListener('click', function () {
            const isOpen = menu.classList.toggle('open');
            menuButton.setAttribute('aria-expanded', isOpen);
            menu.setAttribute('aria-hidden', !isOpen); // Update aria-hidden attribute
            
            // Debugging log
            console.log(`Menu is now ${isOpen ? 'open' : 'closed'}`);
        });
    } else {
        console.error("Menu button or menu element not found in the DOM.");
    }

    // FAQ Functionality
    const faqs = document.querySelectorAll('.faq h3');

    faqs.forEach(faq => {
        const answer = faq.nextElementSibling;

        faq.addEventListener('click', function () {
            const isActive = faq.getAttribute('aria-expanded') === 'true';

            // Close all FAQs
            faqs.forEach(f => f.setAttribute('aria-expanded', 'false'));
            document.querySelectorAll('.faq p').forEach(p => {
                p.style.maxHeight = null;
                p.style.opacity = '0';
            });

            // Toggle the clicked FAQ
            if (!isActive) {
                faq.setAttribute('aria-expanded', 'true');
                answer.style.maxHeight = answer.scrollHeight + "px";
                answer.style.opacity = '1';
            } else {
                faq.setAttribute('aria-expanded', 'false');
            }
        });
    });
});
