// 1) Active Navbar Link// 
const navLinks = document.querySelectorAll("nav a");

navLinks.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#3D7C8C";
        link.style.fontWeight = "bold";
    }
});

// 2) Typing Effect (Home Page)// 
const heading = document.querySelector(".right h1");

if (heading) {
    const text = heading.innerText;
    heading.innerText = "";

    let i = 0;

    function typing() {
        if (i < text.length) {
            heading.innerText += text.charAt(i);
            i++;
            setTimeout(typing, 80);
        }
    }

    typing();
}

// 3) Project Card Hover// 
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-10px)";
        card.style.transition = "0.3s";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });
});

// 4) Contact Form Validation// 
const form = document.querySelector(".contact-form");

if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const inputs = form.querySelectorAll("input, textarea");
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === "") {
                isValid = false;
                input.style.border = "2px solid red";
            } else {
                input.style.border = "none";
            }
        });

        if (isValid) {
            alert("Message sent successfully!");
            form.reset();
        } else {
            alert("Please fill all fields.");
        }
    });
}