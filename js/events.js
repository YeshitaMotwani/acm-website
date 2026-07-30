
// =========================
// Magnetic Buttons
// =========================

const zones = document.querySelectorAll(".mag-zone");

const eventsMagStrength = 0.35;
const eventsLabelStrength = 0.18;

zones.forEach(zone=>{

    const btn = zone.querySelector(".mag-btn");
    const label = btn.querySelector(".label");

    zone.addEventListener("mousemove",(e)=>{

        const rect = zone.getBoundingClientRect();

        const x = gsap.utils.mapRange(
            rect.left,
            rect.right,
            -rect.width/2,
            rect.width/2,
            e.clientX
        );

        const y = gsap.utils.mapRange(
            rect.top,
            rect.bottom,
            -rect.height/2,
            rect.height/2,
            e.clientY
        );

        gsap.to(btn,{
            x:x*eventsMagStrength,
            y:y*eventsMagStrength,
            duration:.35,
            ease:"power3.out",
            overwrite:"auto"
        });

        gsap.to(label,{
            x:x*eventsLabelStrength,
            y:y*eventsLabelStrength,
            duration:.35,
            ease:"power3.out",
            overwrite:"auto"
        });

    });

    zone.addEventListener("mouseleave",()=>{

        gsap.to(btn,{
            x:0,
            y:0,
            duration:.8,
            ease:"elastic.out(1,0.45)"
        });

        gsap.to(label,{
            x:0,
            y:0,
            duration:.8,
            ease:"elastic.out(1,0.45)"
        });

    });

});

gsap.registerPlugin(ScrollTrigger);

gsap.utils.toArray(".option-card").forEach((card, i) => {
    gsap.fromTo(card,
        { opacity: 0, x: i % 2 === 0 ? -60 : 60 },
        {
            opacity: 1, x: 0,
            duration: 0.8,
            delay: i * 0.15,
            ease: "power3.out",
            scrollTrigger: {
                trigger: ".options-grid",
                start: "top 85%"
            }
        }
    );
});