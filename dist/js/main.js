(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),l=document.getElementById("timer-seconds");let o=null;const c=()=>{let e=(()=>{let e=(new Date("29 april 2022").getTime()-(new Date).getTime())/1e3,t=Math.floor(e/60/60),n=Math.floor(e/60%60),l=Math.floor(e%60);return t=t<10?"0"+t:t,n=n<10?"0"+n:n,l=l<10?"0"+l:l,e<=0&&(clearInterval(o),t=0,n=0,l=0),{timeRemaining:e,hours:t,minutes:n,seconds:l}})();t.textContent=e.hours,n.textContent=e.minutes,l.textContent=e.seconds};c(),o=setInterval(c,1e3)})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),n=t.querySelector(".close-btn"),l=t.querySelectorAll("ul>li>a"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),n.addEventListener("click",o);for(let e=0;e<l.length;e++)l[e].addEventListener("click",o)})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-close");document.querySelectorAll(".popup-btn").forEach((t=>{t.addEventListener("click",(()=>{if(document.documentElement.clientWidth>768){let t=0;setTimeout((function n(){t>1||(e.style.opacity=t,t+=.1,e.style.display="block",setTimeout(n,50))}),50)}else e.style.display="block"}))})),t.addEventListener("click",(()=>{e.style.display="none"}))})()})();