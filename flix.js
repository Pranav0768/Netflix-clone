window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// FAQ Accordion
document.querySelectorAll('.accordion-header').forEach(button => {
    button.addEventListener('click', () => {
        const accordionItem = button.parentElement;
        const isActive = accordionItem.classList.contains('active');
        
        // Close all accordion items
        document.querySelectorAll('.accordion-item').forEach(item => {
            item.classList.remove('active');
        });

        // Open clicked item if it wasn't already open
        if (!isActive) {
            accordionItem.classList.add('active');
        }
    });
});

// Email validation
const emailSignup = document.querySelector('.email-signup');
const emailInput = emailSignup.querySelector('input');
const submitButton = emailSignup.querySelector('button');

submitButton.addEventListener('click', () => {
    const email = emailInput.value;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    // Here you would typically handle the form submission
    alert('Thank you for signing up!');
    emailInput.value = '';
});

// Language selector
document.querySelectorAll('.language-select').forEach(select => {
    select.addEventListener('change', (e) => {
        const language = e.target.value;
        // Here you would typically handle language change
        console.log(Language changed to ${language});
    });
});

// Sign in button
document.querySelector('.sign-in-btn').addEventListener('click', () => {
    // Here you would typically handle sign in
    alert('Sign in functionality would go here');
});

// Add smooth scrolling for all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add hover effect for feature sections
document.querySelectorAll('.feature').forEach(feature => {
    feature.addEventListener('mouseenter', () => {
        feature.style.transform = 'scale(1.02)';
        feature.style.transition = 'transform 0.3s ease';
    });
    
    feature.addEventListener('mouseleave', () => {
        feature.style.transform = 'scale(1)';
    });
});