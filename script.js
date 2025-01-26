document.addEventListener('DOMContentLoaded', function() {
    // Close banner
    document.querySelector('.close-btn').addEventListener('click', function() {
        this.parentElement.style.display = 'none';
    });

    // Smooth scrolling for nav links and handling Home button
    document.querySelector('nav ul').addEventListener('click', function(event) {
        if (event.target.tagName === 'A') {
            event.preventDefault();
            const href = event.target.getAttribute('href');
            if (href === "#") {
                window.location.href = 'index.html';  // Redirect to homepage
            } else {
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                } else {
                    window.location.href = href; // Redirect to other pages
                }
            }
        }
    });

    // Redirect to product page for CTA buttons in index.html only
    document.querySelectorAll('.gallery .cta-button').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            const productLink = event.target.closest('.gallery-item').querySelector('a').getAttribute('href');
            window.location.href = productLink;
        });
    });

    // Example other nav link handling if needed
    document.querySelectorAll('.cta-button-practimax').forEach(function(button) {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            alert('This feature is not available yet. Stay tuned!');
        });
    });

    // Social media links
    document.querySelector('.social-icons').addEventListener('click', function(event) {
        event.preventDefault();
        if (event.target.tagName === 'IMG') {
            let url = '';
            if (event.target.alt === 'Facebook') url = 'https://www.facebook.com/PractiPhone';
            if (event.target.alt === 'Twitter') url = 'https://www.twitter.com/PraciPhone';
            if (event.target.alt === 'Instagram') url = 'https://www.instagram.com/PractiPhone';
            window.open(url, '_blank');
        }
    });
});
