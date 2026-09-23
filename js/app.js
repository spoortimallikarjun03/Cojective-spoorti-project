document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector(".tk-header");
    const hero = document.querySelector(".tk-hero");
    const heroVideo = document.querySelector(".tk-hero__video");
    const journeyImage = document.getElementById("journey-image");

    if (header && hero) {
        const observer = new IntersectionObserver(function (entries) {
            if (entries[0].isIntersecting) {
                header.classList.remove("is-scrolled");
            } else {
                header.classList.add("is-scrolled");
            }
        });

        observer.observe(hero);
    }

    if (heroVideo) {
        heroVideo.play().catch(function () {
            heroVideo.classList.add("tk-video-fallback");
        });

        heroVideo.addEventListener("error", function () {
            heroVideo.classList.add("tk-video-fallback");
        });
    }

    const journeyImages = [
        "assets/images/figma-asset-26.jpg",
        "assets/images/figma-asset-27.jpg",
        "assets/images/figma-asset-37.jpg",
        "assets/images/figma-asset-41.jpg",
        "assets/images/figma-asset-5.jpg"
    ];

    let currentImage = 0;

    if (journeyImage) {
        setInterval(function () {
            currentImage++;

            if (currentImage >= journeyImages.length) {
                currentImage = 0;
            }

            journeyImage.src = journeyImages[currentImage];
        }, 500);
    }
});