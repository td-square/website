import "./reports.css";

const content = document.getElementById("content");

const API_URL =
    "https://script.google.com/macros/s/AKfycbxJmMEKUBy-cnmyapX5snIfX9re_sPsNzISnAqaUcPE0UDtkOitZ9xm1ESNwo1QWCeI8w/exec?token=war6TgcA7JDVzrzhTFoi82oadGSHHAneOWaGlITZsgs";

async function loadReports() {
    showLoader();

    try {
        const response = await fetch(API_URL);

        const reports = await response.json();

        renderReports(reports);
    } catch (error) {
        console.error(error);
        showError();
    } finally {
        hideLoader();
    }
}

function renderReports(reports) {
    content.innerHTML = "";

    const title = document.createElement("h1");
    title.textContent = "Отчеты";
    content.appendChild(title);

    const list = document.createElement("ul");

    reports.forEach((report) => {
        const li = document.createElement("li");
        const textSpan = document.createElement("span");
        textSpan.textContent = report.name;
        li.appendChild(textSpan);

        const link = document.createElement("a");
        link.innerHTML = `
            <svg 
                width="24" 
                height="24" 
                viewBox="0 0 24 24" 
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                <path 
                    d="M5 12H19M13 6L19 12L13 18" 
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                />
            </svg>
        `;
        link.href = report.url;
        link.target = "_blank";

        li.appendChild(link);
        list.appendChild(li);
    });

    content.appendChild(list);
}

function showLoader() {
    content.innerHTML = `
        <div id="loader">
            <p>Загрузка отчетов</p>
        </div>
    `;
}

function hideLoader() {
    const loader = document.getElementById("loader");

    if (loader) {
        loader.remove();
    }
}

function showError() {
    content.innerHTML = `
        <p>
            Не удалось загрузить отчеты. Попробуйте позже.
        </p>
    `;
}

window.addEventListener("captchaPassed", loadReports);
