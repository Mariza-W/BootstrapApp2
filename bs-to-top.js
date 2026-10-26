document.addEventListener("DOMContentLoaded", function () {

    const button = document.createElement("button");

    button.id = "backToTop";
    button.type = "button";

    button.className =
        "btn btn-purple rounded-circle position-fixed";

    button.innerHTML = '<i class="bi bi-arrow-up"></i>';
    button.setAttribute("aria-label", "Back to top");

    document.body.appendChild(button);

    window.addEventListener("scroll", function () {

        if (window.scrollY > 0) {

            button.style.display = "block";

        } else {

            button.style.display = "none";

        }

    });

    button.addEventListener("click", function () {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    });

});