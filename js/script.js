// Smooth scroll for navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect for skills section
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const skillsBars = document.querySelectorAll('.progress');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        skillsBars.forEach(bar => {
            bar.style.transition = 'width 1s ease-in-out';
        });
    }
});
// Scroll animation for About section
window.addEventListener('scroll', () => {
    const aboutSection = document.querySelector('#about');
    const sectionPosition = aboutSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight;

    if (sectionPosition < screenPosition) {
        aboutSection.style.opacity = '1';
        aboutSection.style.transform = 'translateY(0)';
        aboutSection.style.transition = 'all 1s ease-out';
    }
});
// Animate skill bars when scrolling into the skills section
window.addEventListener('scroll', () => {
    const skillsSection = document.querySelector('#skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    const sectionPosition = skillsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        skillBars.forEach(bar => {
            const skillLevel = bar.getAttribute('data-skill-level');
            bar.style.width = skillLevel + '%';
        });
    }
});
// Animate social icons on page load
document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social-icon');
    socialIcons.forEach((icon, index) => {
        setTimeout(() => {
            icon.style.opacity = '1';
            icon.style.transform = 'translateY(0)';
        }, index * 200);
    });
});

// Initial setup for social icons (hidden at first)
const socialIcons = document.querySelectorAll('.social-icon');
socialIcons.forEach(icon => {
    icon.style.opacity = '0';
    icon.style.transform = 'translateY(20px)';
    icon.style.transition = 'all 0.5s ease-out';
});
// Animation on Scroll
window.addEventListener('scroll', () => {
    const homeContent = document.querySelector('.home-content');
    const homeImage = document.querySelector('.home-image');

    const contentPosition = homeContent.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (contentPosition < screenPosition) {
        homeContent.classList.add('active');
        homeImage.classList.add('active');
    }
});

// CSS for animation effects
document.styleSheets[0].insertRule(`
    .home-content.active, .home-image.active {
        opacity: 1;
        transform: translateY(0);
        transition: opacity 0.5s ease-out, transform 0.5s ease-out;
    }
`, 0);

document.styleSheets[0].insertRule(`
    .home-content, .home-image {
        opacity: 0;
        transform: translateY(30px);
    }
`, 0);


