// Main JavaScript File
document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP animations
    gsap.registerPlugin(ScrollTrigger);
    
    // Animate sections on scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            opacity: 0,
            y: 50,
            duration: 1
        });
    });
    
    // Initialize tilt.js for 3D effects
    $('[data-tilt]').tilt({
        glare: true,
        maxGlare: 0.1,
        maxTilt: 5,
        perspective: 1000
    });
    
    // Matrix background animation
    initMatrixBackground();
    
    // 3D profile image effect
    init3DProfile();
    
    // Animated form
    initAnimatedForm();
    
    // Project 3D previews
    initProjectPreviews();
    
    // Skill bars animation
    animateSkillBars();
});

function initMatrixBackground() {
    const canvas = document.getElementById('matrix');
    const ctx = canvas.getContext('2d');
    
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    
    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const nums = '0123456789';
    const symbols = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    
    const alphabet = katakana + latin + nums + symbols;
    
    const fontSize = 22;
    const columns = Math.floor(canvas.width / fontSize);
    
    const rainDrops = [];
    
    for (let x = 0; x < columns; x++) {
        rainDrops[x] = 1;
    }
    
    const draw = () => {
        ctx.fillStyle = 'rgba(0, 0, 0, 0.04)';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        
        ctx.fillStyle = '#00a8ff';
        ctx.font = fontSize + 'px monospace';
        
        for (let i = 0; i < rainDrops.length; i++) {
            const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
            ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);
            
            if (rainDrops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                rainDrops[i] = 0;
            }
            rainDrops[i]++;
        }
    };
    
    setInterval(draw, 40);
    
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
}

function init3DProfile() {
    const profile = document.getElementById('profile-3d');
    
    document.addEventListener('mousemove', (e) => {
        const xAxis = (window.innerWidth / 2 - e.pageX) / 10;
        const yAxis = (window.innerHeight / 2 - e.pageY) / 10;
        profile.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    });
    
    // Reset when mouse leaves
    document.addEventListener('mouseleave', () => {
        profile.style.transform = 'rotateY(0deg) rotateX(0deg)';
    });
}

function initAnimatedForm() {
    const form = document.getElementById('animated-form');
    const inputs = form.querySelectorAll('input, textarea');
    
    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            gsap.to(input, {
                duration: 0.3,
                boxShadow: '0 0 15px rgba(0, 168, 255, 0.5)',
                ease: 'power2.out'
            });
        });
        
        input.addEventListener('blur', () => {
            gsap.to(input, {
                duration: 0.3,
                boxShadow: 'none',
                ease: 'power2.out'
            });
        });
    });
}

function initProjectPreviews() {
    // This would be replaced with actual Three.js implementations for each project
    // For demo purposes, we'll just add some basic hover effects
    
    const projects = document.querySelectorAll('.project-3d');
    
    projects.forEach(project => {
        project.addEventListener('mouseenter', () => {
            gsap.to(project, {
                duration: 0.5,
                scale: 1.1,
                ease: 'power2.out'
            });
        });
        
        project.addEventListener('mouseleave', () => {
            gsap.to(project, {
                duration: 0.5,
                scale: 1,
                ease: 'power2.out'
            });
        });
    });
}

function animateSkillBars() {
    const skillBars = document.querySelectorAll('.skill-progress');
    
    skillBars.forEach(bar => {
        const width = bar.getAttribute('data-width');
        gsap.to(bar, {
            scrollTrigger: {
                trigger: bar,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            width: width,
            duration: 1.5,
            ease: 'power3.out'
        });
    });
}