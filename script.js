document.addEventListener('DOMContentLoaded', function() {
    // Initialize AOS (Animate on Scroll)
    initAOS();
    
    // Sticky Header
    initStickyHeader();
    
    // Mobile Menu Toggle
    initMobileMenu();
    
    // Smooth Scrolling for Navigation Links
    initSmoothScroll();
    
    // Testimonial Slider
    initTestimonialSlider();
    
    // Service Card Hover Effects
    initServiceCardEffects();
    
    // Contact Form Submission
    initContactForm();
});

// Initialize AOS (Animate on Scroll)
function initAOS() {
    // Simulate AOS library functionality
    const aosElements = document.querySelectorAll('[data-aos]');
    
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.75 &&
            rect.bottom >= 0
        );
    };
    
    const checkAOS = () => {
        aosElements.forEach(element => {
            if (isElementInViewport(element) && !element.classList.contains('aos-animate')) {
                element.classList.add('aos-animate');
            }
        });
    };
    
    // Initial check
    setTimeout(checkAOS, 100);
    
    // Check on scroll
    window.addEventListener('scroll', checkAOS);
}

// Sticky Header
function initStickyHeader() {
    const header = document.getElementById('header');
    const scrollThreshold = 50;
    
    const handleScroll = () => {
        if (window.scrollY > scrollThreshold) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    };
    
    // Initial check
    handleScroll();
    
    // Check on scroll
    window.addEventListener('scroll', handleScroll);
}

// Mobile Menu Toggle
function initMobileMenu() {
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav = document.getElementById('mobile-nav');
    
    menuToggle.addEventListener('click', () => {
        mobileNav.classList.toggle('active');
        
        // Change icon based on menu state
        const icon = menuToggle.querySelector('i');
        if (mobileNav.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileNav.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Smooth Scrolling for Navigation Links
function initSmoothScroll() {
    const navLinks = document.querySelectorAll('#navbar a, .mobile-nav a, .footer-links a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                // Update active link
                navLinks.forEach(link => link.classList.remove('active'));
                this.classList.add('active');
                
                // Scroll to section
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Update active link on scroll
    const sections = document.querySelectorAll('section');
    
    const updateActiveLink = () => {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.clientHeight;
            
            if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
                current = '#' + section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === current) {
                link.classList.add('active');
            }
        });
    };
    
    window.addEventListener('scroll', updateActiveLink);
}

// Testimonial Slider
function initTestimonialSlider() {
    const slides = document.querySelectorAll('.testimonial-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let slideInterval;
    
    const showSlide = (index) => {
        // Hide all slides
        slides.forEach(slide => {
            slide.classList.remove('active');
        });
        
        // Remove active class from all dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });
        
        // Show the current slide and activate the corresponding dot
        slides[index].classList.add('active');
        dots[index].classList.add('active');
    };
    
    const nextSlide = () => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    };
    
    const prevSlide = () => {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    };
    
    // Initialize slider
    showSlide(currentSlide);
    
    // Start automatic slideshow
    const startSlideshow = () => {
        slideInterval = setInterval(nextSlide, 5000);
    };
    
    // Stop automatic slideshow
    const stopSlideshow = () => {
        clearInterval(slideInterval);
    };
    
    // Event listeners
    prevBtn.addEventListener('click', () => {
        prevSlide();
        stopSlideshow();
        startSlideshow();
    });
    
    nextBtn.addEventListener('click', () => {
        nextSlide();
        stopSlideshow();
        startSlideshow();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
            stopSlideshow();
            startSlideshow();
        });
    });
    
    // Start slideshow
    startSlideshow();
    
    // Pause slideshow on hover
    const sliderContainer = document.querySelector('.testimonial-slider');
    sliderContainer.addEventListener('mouseenter', stopSlideshow);
    sliderContainer.addEventListener('mouseleave', startSlideshow);
}

// Service Card Hover Effects
function initServiceCardEffects() {
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.1)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 3px 10px rgba(0, 0, 0, 0.05)';
        });
        
        // Make the entire card clickable
        card.addEventListener('click', function() {
            const priceBtn = this.querySelector('.price-btn');
            if (priceBtn) {
                // Simulate button click animation
                priceBtn.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    priceBtn.style.transform = 'scale(1)';
                }, 100);
                
                // In a real implementation, this would navigate to a booking page
                console.log('Booking for:', this.querySelector('h3').textContent);
            }
        });
    });
    
    // Filter buttons functionality
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // In a real implementation, this would filter the services
            console.log('Filter selected:', this.textContent);
        });
    });
}

// Contact Form Submission
function initContactForm() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                subject: document.getElementById('subject').value,
                message: document.getElementById('message').value
            };
            
            // Simulate form submission
            console.log('Form submitted:', formData);
            
            // Show success message
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.textContent;
            
            submitBtn.textContent = 'Message Sent!';
            submitBtn.style.backgroundColor = '#4CAF50';
            
            // Reset form
            this.reset();
            
            // Reset button after 3 seconds
            setTimeout(() => {
                submitBtn.textContent = originalText;
                submitBtn.style.backgroundColor = '';
            }, 3000);
        });
    }
    
    // Show all reviews button functionality
    const showAllBtn = document.querySelector('.show-all-btn');
    
    if (showAllBtn) {
        showAllBtn.addEventListener('click', function() {
            // In a real implementation, this would show all reviews
            console.log('Show all reviews clicked');
            
            // Simulate button click animation
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.textContent = 'Loading...';
            }, 100);
            
            // Simulate loading delay
            setTimeout(() => {
                this.textContent = 'All Reviews Loaded';
                this.style.backgroundColor = '#4CAF50';
                this.style.color = 'white';
                this.style.borderColor = '#4CAF50';
            }, 1500);
        });
    }
}