async function mathCaptcha() {
    const operations = [
        {
            sign: "+",
            generate: () => {
                const a = Math.floor(Math.random() * 20) + 1;
                const b = Math.floor(Math.random() * 20) + 1;
                return { a, b, answer: a + b };
            },
        },
        {
            sign: "-",
            generate: () => {
                let a = Math.floor(Math.random() * 20) + 1;
                let b = Math.floor(Math.random() * 20) + 1;

                if (b > a) [a, b] = [b, a];

                return { a, b, answer: a - b };
            },
        },
        {
            sign: "×",
            generate: () => {
                const a = Math.floor(Math.random() * 10) + 1;
                const b = Math.floor(Math.random() * 10) + 1;
                return { a, b, answer: a * b };
            },
        },
        {
            sign: "/",
            generate: () => {
                const b = Math.floor(Math.random() * 10) + 1;
                const answer = Math.floor(Math.random() * 10) + 1;
                const a = b * answer;

                return { a, b, answer };
            },
        },
    ];

    while (true) {
        const operation =
            operations[Math.floor(Math.random() * operations.length)];

        const { a, b, answer: correctAnswer } = operation.generate();

        const answer = prompt(`Сколько будет ${a} ${operation.sign} ${b}?`);

        if (answer === null) {
            continue;
        }

        if (Number(answer) === correctAnswer) {
            document.body.style.visibility = "visible";
            return;
        }

        alert("Неверно. Попробуйте еще раз.");
    }
}

mathCaptcha();
