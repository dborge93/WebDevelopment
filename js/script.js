function updateYear() {
    const yearElement = document.getElementById('currentYear');
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
}

// Run when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', updateYear);