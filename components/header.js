document.addEventListener('DOMContentLoaded', function() {
    const headerElement = document.getElementById('header');
    if (headerElement) {
        headerElement.innerHTML = `
            <header class="site-header">
                <nav class="navbar">
                    <div class="logo">Dev Portfolio</div>
                    <div class="nav-links">
                        <a href="index.html">Home</a>
                        <a href="skills.html">Skills</a>
                        <a href="projects.html">Projects</a>
                        <a href="contact.html">Contact</a>
                    </div>
                    <div class="menu-toggle">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </nav>
            </header>
        `;

        // Add active class to current page link
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav-links a');
        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('active');
            }
        });

        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navLinksContainer = document.querySelector('.nav-links');
        menuToggle.addEventListener('click', () => {
            navLinksContainer.classList.toggle('active');
        });
    }
});
