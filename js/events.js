
// =========================
// Magnetic Buttons
// =========================

const zones = document.querySelectorAll(".mag-zone");

const strength = 0.35;
const labelStrength = 0.18;

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
            x:x*strength,
            y:y*strength,
            duration:.35,
            ease:"power3.out",
            overwrite:"auto"
        });

        gsap.to(label,{
            x:x*labelStrength,
            y:y*labelStrength,
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

