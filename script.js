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