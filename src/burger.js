const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");

const sidebar = document.getElementById("sidebar");

function openMenu() {
    sidebar.classList.add("active");
    document.body.style.overflow = "hidden";
}

function closeMenu() {
    sidebar.classList.remove("active");
    document.body.style.overflow = "";
}

menuBtn.addEventListener("click", openMenu);

closeBtn.addEventListener("click", closeMenu);

document.querySelectorAll(".sidebar a").forEach((link) => {
    link.addEventListener("click", closeMenu);
});
