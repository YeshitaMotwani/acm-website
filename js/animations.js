// ======================================
// Universal Text Reveal
// ======================================

gsap.registerPlugin(ScrollTrigger);

document.querySelectorAll(".split-reveal").forEach((heading) => {

    const split = new SplitType(heading, {
        types: "chars"
    });

    gsap.set(split.chars, {
        yPercent: 110,
        opacity: 0
    });

    ScrollTrigger.create({
        trigger: heading,
        start: "top 85%",

        onEnter: () => reveal(split),
        onEnterBack: () => reveal(split)
    });

    function reveal(splitInstance) {

        gsap.killTweensOf(splitInstance.chars);

        gsap.set(splitInstance.chars, {
            yPercent: 110,
            opacity: 0
        });

        gsap.to(splitInstance.chars, {
            yPercent: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.03,
            ease: "power4.out"
        });

    }

});
/* ==========================================================
   PHASE 7 — BACKGROUND NOISE + FAR PARTICLES
========================================================== */

document.addEventListener("DOMContentLoaded", () => {

    const bgField = document.querySelector(".bg-field");
    if (!bgField) return;

    const noise = document.createElement("div");
    noise.className = "bg-noise";
    bgField.appendChild(noise);

    const particleLayer = document.createElement("div");
    particleLayer.className = "bg-particle-layer";
    bgField.appendChild(particleLayer);

    const count = 25;

    for (let i = 0; i < count; i++) {
        const p = document.createElement("span");
        p.className = "bg-far-particle";
        const size = Math.random() * 2 + 1;
        p.style.width = size + "px";
        p.style.height = size + "px";
        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";
        particleLayer.appendChild(p);

        if (window.gsap) {
            gsap.to(p, {
                y: -40 - Math.random() * 60,
                x: (Math.random() - 0.5) * 40,
                opacity: 0.05 + Math.random() * 0.15,
                duration: 8 + Math.random() * 10,
                repeat: -1,
                yoyo: true,
                ease: "sine.inOut",
                delay: Math.random() * 5
            });
        }
    }

});