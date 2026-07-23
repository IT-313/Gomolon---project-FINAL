function showMessage() {
    alert("Welcome to Tyson 2nd Hand Laptops Enterprises!");
}

function toggleDarkMode() {
    const body = document.body;
    const button = document.getElementById("themeToggle");
    const isDark = body.classList.toggle("dark-mode");

    localStorage.setItem("gomolonDarkMode", String(isDark));

    if (button) {
        button.textContent = isDark ? "☀️ Light Mode" : "🌙 Dark Mode";
    }
}

function initializeTheme() {
    const savedTheme = localStorage.getItem("gomolonDarkMode") === "true";
    const button = document.getElementById("themeToggle");

    if (savedTheme) {
        document.body.classList.add("dark-mode");
    }

    if (button) {
        button.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌙 Dark Mode";
    }
}

function submitContactForm(event) {
    event.preventDefault();

    const name = document.getElementById("name")?.value.trim();
    const email = document.getElementById("email")?.value.trim();
    const message = document.getElementById("message")?.value.trim();

    if (!name || !email || !message) {
        return;
    }

    const subject = encodeURIComponent("New Contact Message from " + name);
    const body = encodeURIComponent(
        "Name: " + name + "\n" +
        "Email: " + email + "\n\n" +
        "Message:\n" + message
    );

    window.location.href = "mailto:contact@tysonlaptops.com?subject=" + subject + "&body=" + body;
}

function initializeRevealEffects() {
    const revealItems = document.querySelectorAll('.reveal');

    if (!revealItems.length) {
        return;
    }

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.15
    });

    revealItems.forEach((item) => observer.observe(item));
}

window.addEventListener("DOMContentLoaded", () => {
    initializeTheme();
    initializeRevealEffects();

    const themeButton = document.getElementById("themeToggle");
    if (themeButton) {
        themeButton.addEventListener("click", toggleDarkMode);
    }

    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", submitContactForm);
    }
});