// reveal met stagger per sectie
document.querySelectorAll('section,header,footer').forEach(sec=>{
  sec.querySelectorAll('.rv').forEach((el,i)=>el.style.setProperty('--d',i%6));
});
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}}),{threshold:.12});
document.querySelectorAll('.rv').forEach(el=>io.observe(el));

// cijfers tellen op
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches;
const co=new IntersectionObserver(es=>es.forEach(e=>{
  if(!e.isIntersecting)return;co.unobserve(e.target);
  const el=e.target,m=el.textContent.trim().match(/^([€]?)(\d[\d.]*)(.*)$/);
  if(!m||reduce)return;
  const pre=m[1],end=parseFloat(m[2].replace(/\./g,'')),suf=m[3],hasDots=m[2].includes('.'),t0=performance.now();
  const fmt=n=>hasDots?n.toLocaleString('nl-NL'):String(n);
  const tick=t=>{const p=Math.min((t-t0)/1300,1);el.textContent=pre+fmt(Math.round(end*(1-Math.pow(1-p,3))))+suf;if(p<1)requestAnimationFrame(tick)};
  requestAnimationFrame(tick);
}),{threshold:.7});
document.querySelectorAll('.stat b, .mstat b').forEach(el=>co.observe(el));

// tijdslots
document.querySelectorAll('.slot').forEach(s=>s.addEventListener('click',()=>{document.querySelectorAll('.slot').forEach(x=>x.classList.remove('on'));s.classList.add('on')}));

// interesse-pills op contactpagina (meerdere mogelijk)
document.querySelectorAll('.popt').forEach(p=>p.addEventListener('click',()=>p.classList.toggle('on')));

// formulier (placeholder, koppel aan eigen endpoint)
const form=document.querySelector('form.contactform');
if(form)form.addEventListener('submit',e=>{
  e.preventDefault();
  alert('Bedankt! Dit formulier is nog niet gekoppeld, verbind het met je eigen e-mail of CRM.');
});
