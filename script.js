document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });


    const form = document.querySelector("form");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        const name = document.querySelector("input[type='text']").value.trim();
        const email = document.querySelector("input[type='email']").value.trim();
        const message = document.querySelector("textarea").value.trim();
        
        if (name === "" || email === "" || message === "") {
            alert("Please fill out all fields before submitting.");
            return;
        }
        
        alert("Message sent successfully!");
        form.reset();
    });
});
