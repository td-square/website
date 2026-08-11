import"./main-IPJdHBB0.js";var e=``;function t(){let e=document.createElement(`div`);e.id=`captcha-wrapper`,e.innerHTML=`
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


    `,document.body.prepend(e)}function n(e,t){return Math.random()*(t-e)+e}function r(){e=``;for(let t=0;t<5;t++)e+=`ABCDEFGHJKLMNPQRSTUVWXYZ23456789`[Math.floor(Math.random()*32)];let t=document.getElementById(`captcha`),r=t.getContext(`2d`);r.clearRect(0,0,t.width,t.height),r.fillStyle=`#f2f2f2`,r.fillRect(0,0,t.width,t.height);for(let e=0;e<400;e++)r.beginPath(),r.arc(n(0,260),n(0,100),n(.5,2),0,Math.PI*2),r.fillStyle=`rgba(0,0,0,${n(.1,.5)})`,r.fill();for(let e=0;e<8;e++){r.beginPath(),r.moveTo(n(0,260),n(0,100));for(let t=0;t<260;t+=20)r.lineTo(t,50+Math.sin(t*.05+e)*n(10,30));r.strokeStyle=`rgba(0,0,0,${n(.1,.4)})`,r.lineWidth=n(1,3),r.stroke()}for(let t=0;t<e.length;t++){r.save();let i=35+t*40,a=n(60,75);r.translate(i,a),r.rotate(n(-.5,.5)),r.scale(n(.8,1.3),n(.8,1.3)),r.font=`${n(35,55)}px Arial Black`,r.fillStyle=`rgb(
                ${n(0,80)},
                ${n(0,80)},
                ${n(0,80)}
            )`,r.fillText(e[t],0,0),r.restore()}for(let e=0;e<15;e++)r.beginPath(),r.moveTo(n(0,260),n(0,100)),r.lineTo(n(0,260),n(0,100)),r.strokeStyle=`rgba(0,0,0,${n(.2,.7)})`,r.lineWidth=n(1,3),r.stroke();for(let e=0;e<20;e++)r.beginPath(),r.arc(n(0,260),n(0,100),n(3,15),0,Math.PI*2),r.strokeStyle=`rgba(100,100,100,.3)`,r.stroke()}function i(){let t=document.getElementById(`captchaInput`);t.value.toUpperCase()===e?(document.getElementById(`captcha-wrapper`).remove(),window.dispatchEvent(new Event(`captchaPassed`))):(alert(`Неверный код`),t.value=``,t.focus(),r())}function a(){t(),r(),document.getElementById(`captchaButton`).onclick=i,document.getElementById(`captchaRefresh`).onclick=r,document.getElementById(`captchaInput`).addEventListener(`keydown`,e=>{e.key===`Enter`&&i()})}a();var o=document.getElementById(`content`),s=`https://script.google.com/macros/s/AKfycbxJmMEKUBy-cnmyapX5snIfX9re_sPsNzISnAqaUcPE0UDtkOitZ9xm1ESNwo1QWCeI8w/exec?token=war6TgcA7JDVzrzhTFoi82oadGSHHAneOWaGlITZsgs`;async function c(){u();try{l(await(await fetch(s)).json())}catch(e){console.error(e),f()}finally{d()}}function l(e){o.innerHTML=``;let t=document.createElement(`h1`);t.textContent=`Отчеты`,o.appendChild(t);let n=document.createElement(`ul`);e.forEach(e=>{let t=document.createElement(`li`),r=document.createElement(`span`);r.textContent=e.name,t.appendChild(r);let i=document.createElement(`a`);i.innerHTML=`
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
        `,i.href=e.url,i.target=`_blank`,t.appendChild(i),n.appendChild(t)}),o.appendChild(n)}function u(){o.innerHTML=`
        <div id="loader">
            <p>Загрузка отчетов</p>
        </div>
    `}function d(){let e=document.getElementById(`loader`);e&&e.remove()}function f(){o.innerHTML=`
        <p>
            Не удалось загрузить отчеты. Попробуйте позже.
        </p>
    `}window.addEventListener(`captchaPassed`,c);