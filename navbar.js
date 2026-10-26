document.addEventListener("DOMContentLoaded", function () {

    const navbar = `
        <nav class="navbar navbar-expand-sm crochet-navbar sticky-top">

            <div class="container-fluid">

                <ul class="navbar-nav">

                    <li class="nav-item">
                        <a class="nav-link" href="index.html">
                            Home
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="ai-patterns.html">
                            Spotting AI Patterns
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="learn-crochet.html">
                            Learning Crochet
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="markets.html">
                            Markets
                        </a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">
                            <i>Coming soon</i>
                        </a>
                    </li>

                </ul>

            </div>

        </nav>
    `;

    document.getElementById("navbar-placeholder").innerHTML = navbar;

});