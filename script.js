const cursorDot = document.querySelector(".cursor-dot");
const cursorOutline = document.querySelector(".cursor-outline");

window.addEventListener("mousemove", (e) => {
    const posX = e.clientX;
    const posY = e.clientY;

    // The dot follows the mouse exactly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // The outline follows with a smooth animation
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Expand cursor on hoverable elements
const hoverables = document.querySelectorAll('a, button, .project-card, .contact-card');
hoverables.forEach((item) => {
    item.addEventListener("mouseover", () => {
        cursorOutline.classList.add("cursor-hover");
    });
    item.addEventListener("mouseleave", () => {
        cursorOutline.classList.remove("cursor-hover");
    });
});

document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Typing Effect Logic
    const typingElement = document.getElementById('typing');
    const textToType = "SOC Analyst | Threat Hunter | CS Student";
    let index = 0;

    function playTyping() {
        if (index < textToType.length) {
            typingElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(playTyping, 70);
        }
    }
    playTyping();

    // 2. Scroll Revelation (Fading text as you scroll)
    const revealElements = document.querySelectorAll('.reveal');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;
        
        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;
            if (elTop < triggerBottom) {
                el.classList.add('active');
            }
        });
    };

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Initial check

    // 3. Mouse Follower Effect (Cool Background Detail)
    const glow = document.createElement('div');
    glow.className = 'cursor-glow';
    document.body.appendChild(glow);

    document.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });
});

// Toggle Function for the Case Study Dropdown
function toggleCaseStudy() {
    const studyPanel = document.getElementById("conti-case-study");
    if (studyPanel.classList.contains("hidden")) {
        studyPanel.classList.remove("hidden");
        // Smoothly scroll the user to the panel view space
        setTimeout(() => {
            studyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    } else {
        studyPanel.classList.add("hidden");
    }
}

// Toggle Function for the Phishing Case Study Dropdown
function togglePhishingCaseStudy() {
    const phishingPanel = document.getElementById("phishing-case-study");
    if (phishingPanel.classList.contains("hidden")) {
        phishingPanel.classList.remove("hidden");
        // Smoothly scroll the user to the panel view space
        setTimeout(() => {
            phishingPanel.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
    } else {
        phishingPanel.classList.add("hidden");
    }
}

function toggleVoltTyphoonCaseStudy() {
    const container = document.getElementById('volttyphoon-case-study');
    if (container.classList.contains('hidden')) {
        container.classList.remove('hidden');
        container.scrollIntoView({ behavior: 'smooth' });
    } else {
        container.classList.add('hidden');
    }
}