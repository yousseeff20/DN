document.addEventListener('DOMContentLoaded', function() {
    const footerElement = document.getElementById('footer');
    if (footerElement) {
        footerElement.innerHTML = `
            <footer class="site-footer">
                <div class="footer-content">
                    <div class="social-links">
                        <a href="#" class="social-icon"><i class="fas fa-envelope"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-linkedin"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-github"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                    </div>
                    <p>&copy; ${new Date().getFullYear()} Dev Portfolio. All rights reserved.</p>
                </div>
            </footer>
        `;

        // Add hover effects to social icons
        const socialIcons = document.querySelectorAll('.social-icon');
        socialIcons.forEach(icon => {
            icon.addEventListener('mouseenter', () => {
                icon.style.transform = 'scale(1.2)';
            });
            icon.addEventListener('mouseleave', () => {
                icon.style.transform = 'scale(1)';
            });
        });
    }
});
