document.addEventListener("DOMContentLoaded", function() {
    const flyInElements = document.querySelectorAll(".fly-in");
    flyInElements.forEach(function(element) {
        element.classList.add("active");
    });
});
