import "./style.css";

document.querySelectorAll("[data-home]").forEach((link) => {
    link.href = import.meta.env.BASE_URL;
});
