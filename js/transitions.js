document.addEventListener("DOMContentLoaded", () => {

    const overlay = document.createElement("div");
    overlay.className = "page-transition-overlay";
    overlay.innerHTML = `<div class="page-transition-grid"></div>`;
    document.body.appendChild(overlay);

    const grid = overlay.querySelector(".page-transition-grid");

    const links = document.querySelectorAll('a[href$=".html"], a[href^="index.html"]');

    links.forEach(link => {
        link.addEventListener("click", (e) => {
            const href = link.getAttribute("href");
            if (link.target === "_blank" || href.startsWith("#")) return;

            e.preventDefault();

            overlay.classList.add("is-active");

            if (window.gsap) {
                const tl = gsap.timeline({
                    onComplete: () => {
                        window.location.href = href;
                    }
                });

                tl.to("body", {
                    scale: 1.04,
                    filter: "blur(6px)",
                    duration: 0.4,
                    ease: "power2.inOut"
                })
                .to(overlay, {
                    opacity: 1,
                    duration: 0.4,
                    ease: "power2.inOut"
                }, "<")
                .to(grid, {
                    scale: 1.4,
                    rotation: 8,
                    duration: 0.5,
                    ease: "power2.inOut"
                }, "<");

            } else {
                window.location.href = href;
            }
        });
    });

});