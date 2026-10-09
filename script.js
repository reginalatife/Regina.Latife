/* Navegación y filtros — Regina Latife */
(()=>{'use strict';
 const pages=[...document.querySelectorAll('[data-page]')];
 const links=[...document.querySelectorAll('[data-route]')];
 const filters=[...document.querySelectorAll('[data-filter]')];
 const artworks=[...document.querySelectorAll('#shopGrid .product')];
 function route(){const hash=decodeURIComponent(location.hash.slice(1));const page=pages.some(p=>p.dataset.page===hash)?hash:'home';pages.forEach(p=>{const active=p.dataset.page===page;p.classList.toggle('is-active',active);p.setAttribute('aria-hidden',String(!active))});links.forEach(l=>{const active=l.dataset.route===page;l.classList.toggle('is-active',active);if(l.classList.contains('nav__link')){if(active)l.setAttribute('aria-current','page');else l.removeAttribute('aria-current')}});window.scrollTo({top:0,behavior:'instant'});}
 function filter(value){filters.forEach(b=>{const active=b.dataset.filter===value;b.classList.toggle('is-active',active);b.setAttribute('aria-pressed',String(active))});artworks.forEach(a=>{a.hidden=value!=='all'&&a.dataset.type!==value});}
 filters.forEach(b=>b.addEventListener('click',()=>filter(b.dataset.filter)));
 const cue=document.querySelector('[data-scroll-next]');if(cue)cue.addEventListener('click',()=>{const next=document.querySelector('.editorial');if(next)next.scrollIntoView({behavior:'smooth'})});
 window.addEventListener('hashchange',route);route();filter('all');
})();
