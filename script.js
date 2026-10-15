// Cursor light effect
document.addEventListener('DOMContentLoaded', () => {
    const cursorLight = document.querySelector('.cursor-light');

    // Only enable on desktop devices
    if (!('ontouchstart' in window) && window.innerWidth > 768) {
        document.addEventListener('mousemove', (e) => {
            cursorLight.style.left = e.clientX + 'px';
            cursorLight.style.top = e.clientY + 'px';
        });
    } else {
        cursorLight.style.display = 'none';
    }

    // Handle resize
    window.addEventListener('resize', () => {
        if (window.innerWidth <= 768 || 'ontouchstart' in window) {
            cursorLight.style.display = 'none';
        }
    });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Enhanced navbar on scroll
const nav = document.querySelector('.nav');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 100) {
        nav.style.background = 'rgba(0, 0, 0, 0.85)';
        nav.style.boxShadow = '0 4px 24px rgba(0, 0, 0, 0.5)';
    } else {
        nav.style.background = 'rgba(0, 0, 0, 0.6)';
        nav.style.boxShadow = 'none';
    }
});

// FAQ Accordion
document.querySelectorAll('.faq-item-new').forEach(item => {
    const questionWrap = item.querySelector('.faq-question-wrap');

    questionWrap.addEventListener('click', () => {
        const isActive = item.classList.contains('active');

        // Close all other items
        document.querySelectorAll('.faq-item-new').forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('active');
            }
        });

        // Toggle current item
        if (isActive) {
            item.classList.remove('active');
        } else {
            item.classList.add('active');
        }
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe animated elements
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.service-card-compact, .advantage-card, .income-card, .cta-big-card');

    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)';
        observer.observe(el);
    });

    // Stagger animation for grids
    const grids = document.querySelectorAll('.services-grid-compact, .advantages-grid');
    grids.forEach(grid => {
        const items = grid.querySelectorAll('.service-card-compact, .advantage-card');
        items.forEach((item, index) => {
            setTimeout(() => {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });
});

// Marquee animation enhancement
document.querySelectorAll('.marquee-content').forEach(marquee => {
    const clone = marquee.cloneNode(true);
    marquee.parentElement.appendChild(clone);
});

// Add hover effects to cards
document.querySelectorAll('.service-card-compact, .advantage-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// Button hover effects
document.querySelectorAll('.hero-cta, .nav-cta, .faq-cta, .cta-big-button').forEach(button => {
    button.addEventListener('mouseenter', function(e) {
        const ripple = document.createElement('span');
        ripple.classList.add('ripple-effect');
        this.appendChild(ripple);

        setTimeout(() => ripple.remove(), 600);
    });
});

// Smooth reveal on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.75;

        if (isVisible) {
            section.style.opacity = '1';
        }
    });
});

// Navigation active state
const sections = document.querySelectorAll('.section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.style.color = 'var(--ink-gray)';
        if (link.getAttribute('href') === `#${current}`) {
            link.style.color = 'var(--ink-white)';
        }
    });
});

// Add ripple effect CSS
const style = document.createElement('style');
style.textContent = `
    .ripple-effect {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s ease-out;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Reduce motion for accessibility
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

if (prefersReducedMotion.matches) {
    document.documentElement.style.scrollBehavior = 'auto';
    document.querySelectorAll('*').forEach(el => {
        el.style.animation = 'none !important';
        el.style.transition = 'none !important';
    });
}

// Performance optimization
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Console message
console.log('%c✨ Dark Minimalist Design', 'color: #38BDF8; font-size: 20px; font-weight: bold;');
console.log('%c🎨 Cursor Light Effect Active', 'color: #34D399; font-size: 14px; font-weight: bold;');
console.log('%c⚡ Built with Attention to Details', 'color: #9CA3AF; font-size: 12px;');

// Loading complete
window.addEventListener('load', () => {
    document.body.style.opacity = '1';
    console.log('%c✓ Website Loaded', 'color: #34D399; font-size: 14px; font-weight: bold;');
});
