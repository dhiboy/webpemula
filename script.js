function openNav() {
    document.getElementById("sidebar").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidebar").style.width = "0";
}

function showSection(sectionId) {
    let sections = document.querySelectorAll(".content-section");
    sections.forEach(section => section.classList.add("hidden"));

    document.getElementById(sectionId).classList.remove("hidden");
    closeNav();
}

document.addEventListener("DOMContentLoaded", function () {
    showSection('profil');
});