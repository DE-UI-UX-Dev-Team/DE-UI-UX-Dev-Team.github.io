!function(){"use strict";!function(){const t=document.getElementById("contrast"),r=document.querySelectorAll("section");let a={active:0},e=["none","bg--primary-base","bg--primary-light-1","bg--primary-light-2","bg--primary-light-3","bg--primary-dark-1","bg--primary-dark-2","bg--secondary-base","bg--secondary-light-1","bg--secondary-light-2","bg--secondary-light-3","bg--secondary-dark-1","bg--secondary-dark-2","bg--tertiary-base","bg--tertiary-light-1","bg--tertiary-light-2","bg--tertiary-dark-1","bg--tertiary-dark-2","bg--error-background","bg--success-background","bg--warning-background","bg--info-background"];for(let t=0;t<r.length;t++)r[t].classList.add(e[a.active]);t.addEventListener("click",(t=>{let g=a.active;a.active=a.active<e.length-1?a.active+1:0;for(let t=0;t<r.length;t++)0!==r[t].classList.length?r[t].classList.replace(e[g],e[a.active]):r[t].classList.add(e[a.active])}))}()}();
//# sourceMappingURL=buttons\index.html.js.map