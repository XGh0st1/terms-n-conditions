// script.js (same as before)
document.addEventListener('DOMContentLoaded', function() {
    // Set current dates
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    document.getElementById('current-date').textContent = today;
    document.getElementById('current-date-terms').textContent = today;
    
    // Tab switching functionality
    const links = document.querySelectorAll('.sidebar a');
    const sections = document.querySelectorAll('.policy-section');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.hash) {
                e.preventDefault();
                
                // Update active link
                links.forEach(l => l.classList.remove('active'));
                this.classList.add('active');
                
                // Show corresponding section
                const targetId = this.hash.substring(1);
                sections.forEach(section => {
                    section.style.display = section.id === targetId ? 'block' : 'none';
                });
                
                // Smooth scroll
                document.getElementById(targetId).scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});
