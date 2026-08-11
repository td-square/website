import "./captcha.css";

let captchaText = "";

function createCaptchaUI() {
    const wrapper = document.createElement("div");

    wrapper.id = "captcha-wrapper";

    wrapper.innerHTML = `
        <canvas id="captcha" width="260" height="100"></canvas>

        <br>

        <input id="captchaInput" placeholder="Введите код">

        <div id="captchaActions">
            <button id="captchaButton">
                Проверить
            </button>

            <button id="captchaRefresh">
                ↻
            </button>
        </div>


    `;

    document.body.prepend(wrapper);
}

function random(min, max) {
    return Math.random() * (max - min) + min;
}

function generateCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    captchaText = "";

    for (let i = 0; i < 5; i++) {
        captchaText += chars[Math.floor(Math.random() * chars.length)];
    }

    const canvas = document.getElementById("captcha");
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // фон
    ctx.fillStyle = "#f2f2f2";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    /*
        шумовые точки
    */
    for (let i = 0; i < 400; i++) {
        ctx.beginPath();

        ctx.arc(random(0, 260), random(0, 100), random(0.5, 2), 0, Math.PI * 2);

        ctx.fillStyle = `rgba(0,0,0,${random(0.1, 0.5)})`;

        ctx.fill();
    }

    /*
        волны
    */
    for (let i = 0; i < 8; i++) {
        ctx.beginPath();

        ctx.moveTo(random(0, 260), random(0, 100));

        for (let x = 0; x < 260; x += 20) {
            ctx.lineTo(x, 50 + Math.sin(x * 0.05 + i) * random(10, 30));
        }

        ctx.strokeStyle = `rgba(0,0,0,${random(0.1, 0.4)})`;

        ctx.lineWidth = random(1, 3);

        ctx.stroke();
    }

    /*
        символы
    */
    for (let i = 0; i < captchaText.length; i++) {
        ctx.save();

        let x = 35 + i * 40;
        let y = random(60, 75);

        ctx.translate(x, y);

        // вращение
        ctx.rotate(random(-0.5, 0.5));

        // масштаб
        ctx.scale(random(0.8, 1.3), random(0.8, 1.3));

        ctx.font = `${random(35, 55)}px Arial Black`;

        ctx.fillStyle = `rgb(
                ${random(0, 80)},
                ${random(0, 80)},
                ${random(0, 80)}
            )`;

        ctx.fillText(captchaText[i], 0, 0);

        ctx.restore();
    }

    /*
        линии поверх текста
    */
    for (let i = 0; i < 15; i++) {
        ctx.beginPath();

        ctx.moveTo(random(0, 260), random(0, 100));

        ctx.lineTo(random(0, 260), random(0, 100));

        ctx.strokeStyle = `rgba(0,0,0,${random(0.2, 0.7)})`;

        ctx.lineWidth = random(1, 3);

        ctx.stroke();
    }

    /*
        дополнительные окружности
    */
    for (let i = 0; i < 20; i++) {
        ctx.beginPath();

        ctx.arc(random(0, 260), random(0, 100), random(3, 15), 0, Math.PI * 2);

        ctx.strokeStyle = "rgba(100,100,100,.3)";

        ctx.stroke();
    }
}

function checkCaptcha() {
    const input = document.getElementById("captchaInput");
    const value = input.value.toUpperCase();

    if (value === captchaText) {
        document.getElementById("captcha-wrapper").remove();

        window.dispatchEvent(new Event("captchaPassed"));
    } else {
        alert("Неверный код");
        input.value = "";
        input.focus();
        generateCaptcha();
    }
}

function initCaptcha() {
    createCaptchaUI();

    generateCaptcha();

    document.getElementById("captchaButton").onclick = checkCaptcha;

    document.getElementById("captchaRefresh").onclick = generateCaptcha;

    document
        .getElementById("captchaInput")
        .addEventListener("keydown", (event) => {
            if (event.key === "Enter") {
                checkCaptcha();
            }
        });
}

initCaptcha();
