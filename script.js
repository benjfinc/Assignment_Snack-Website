document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('waitlistForm');
    const emailInput = document.getElementById('email');
    const formMessage = document.getElementById('formMessage');

    // Smooth scroll for CTA button
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // Form submission
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const email = emailInput.value.trim();
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!email) {
            showMessage('Please enter your email.');
            return;
        }
        
        if (!emailRegex.test(email)) {
            showMessage('Please enter a valid email address.');
            return;
        }
        
        console.log('Waitlist signup:', email);
        showMessage('Thanks! You\'re on the waitlist.');
        emailInput.value = '';
        
        setTimeout(() => {
            formMessage.textContent = '';
        }, 5000);
    });
    
    function showMessage(message) {
        formMessage.textContent = message;
        formMessage.className = 'form-message success';
    }
});
