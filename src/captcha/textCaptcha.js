async function textCaptcha() {
    const chars = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    while (true) {
        let captcha = "";

        for (let i = 0; i < 5; i++) {
            captcha += chars[Math.floor(Math.random() * chars.length)];
        }

        const answer = prompt(`Введите код: ${captcha}`);

        if (answer === null) {
            continue;
        }

        if (answer.toUpperCase() === captcha) {
            document.body.style.visibility = "visible";
            return;
        }

        alert("Неверный код. Попробуйте еще раз.");
    }
}

textCaptcha();
