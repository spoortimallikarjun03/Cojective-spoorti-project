
/* =========================================================
   1. HERO VIDEO
========================================================= */

const heroVideo = document.querySelector(".tk-hero__video");

if (heroVideo) {
    heroVideo.muted = true;

    heroVideo.play().catch(function () {
        console.log("Hero video autoplay was blocked.");
    });
}


/* =========================================================
   2. SMOOTH SCROLLING
========================================================= */

const pageLinks = document.querySelectorAll(
    'a[href^="#"]'
);

pageLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        const targetId = link.getAttribute("href");

        if (!targetId || targetId === "#") {
            return;
        }

        const targetElement =
            document.querySelector(targetId);

        if (!targetElement) {
            return;
        }

        event.preventDefault();

        targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    });

});


/* =========================================================
   3. ACTIVE NAVIGATION
========================================================= */

const navigationLinks = document.querySelectorAll(
    ".tk-navigation__link"
);

const sections = document.querySelectorAll(
    "main section[id]"
);


function updateActiveNavigation() {

    let currentSection = "home";

    sections.forEach(function (section) {

        const sectionTop =
            section.getBoundingClientRect().top;

        if (sectionTop <= 180) {
            currentSection =
                section.getAttribute("id");
        }

    });


    navigationLinks.forEach(function (link) {

        const linkTarget =
            link.getAttribute("href");

        link.classList.remove("is-active");

        if (
            linkTarget ===
            "#" + currentSection
        ) {
            link.classList.add("is-active");
        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================================================
   4. INITIAL NAVIGATION STATE
========================================================= */

updateActiveNavigation();


/* =========================================================
   5. MOBILE MENU
   Uses your existing HTML only
========================================================= */

const menuButton =
    document.getElementById("menu-button");

const primaryNavigation =
    document.getElementById("primary-navigation");


if (menuButton && primaryNavigation) {

    menuButton.addEventListener(
        "click",
        function () {

            const isOpen =
                menuButton.getAttribute(
                    "aria-expanded"
                ) === "true";


            menuButton.setAttribute(
                "aria-expanded",
                String(!isOpen)
            );


            primaryNavigation.classList.toggle(
                "is-open"
            );

        }
    );

}


/* =========================================================
   6. CLOSE MENU AFTER NAVIGATION CLICK
========================================================= */

navigationLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function () {

            if (
                menuButton &&
                primaryNavigation
            ) {

                menuButton.setAttribute(
                    "aria-expanded",
                    "false"
                );

                primaryNavigation.classList.remove(
                    "is-open"
                );

            }

        }
    );

});


/* =========================================================
   7. HERO VIDEO ERROR HANDLING
========================================================= */

if (heroVideo) {

    heroVideo.addEventListener(
        "error",
        function () {

            console.log(
                "Hero video could not be loaded."
            );

        }
    );

}


/* =========================================================
   8. PREVENT EMPTY LINKS
========================================================= */

const emptyLinks =
    document.querySelectorAll('a[href="#"]');


emptyLinks.forEach(function (link) {

    link.addEventListener(
        "click",
        function (event) {

            event.preventDefault();

        }
    );

})