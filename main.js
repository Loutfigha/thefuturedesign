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

// mobiel menu
document.querySelectorAll('.navtoggle').forEach(btn=>btn.addEventListener('click',()=>{
  const nav=btn.closest('nav'),open=nav.classList.toggle('open');
  btn.setAttribute('aria-expanded',open);
}));

// interesse-pills op contactpagina (meerdere mogelijk)
const interesseField=document.querySelector('#interesseField');
document.querySelectorAll('.popt').forEach(p=>p.addEventListener('click',()=>{
  p.classList.toggle('on');
  if(interesseField)interesseField.value=[...document.querySelectorAll('.popt.on')].map(o=>o.textContent).join(', ');
}));

// contactformulier -> stuurt naar info@thefuturedesign.nl via FormSubmit
const form=document.querySelector('form.contactform');
if(form)form.addEventListener('submit',async e=>{
  e.preventDefault();
  const errorEl=form.querySelector('.formerror');
  const sentEl=document.querySelector('.formsent');
  errorEl.hidden=true;
  try{
    const res=await fetch('https://formsubmit.co/ajax/info@thefuturedesign.nl',{
      method:'POST',
      headers:{'Accept':'application/json'},
      body:new FormData(form)
    });
    if(!res.ok)throw new Error('send failed');
    form.hidden=true;
    sentEl.hidden=false;
  }catch(err){
    errorEl.hidden=false;
  }
});

// e-book pop-up
(function(){
  const pop=document.querySelector('.ebookpop');
  if(!pop)return;
  const KEY='ebookPopupSeen';
  const closeBtn=pop.querySelector('.ebookclose');
  const intro=pop.querySelector('.ebookintro');
  const success=pop.querySelector('.ebooksuccess');
  const ebookForm=pop.querySelector('.ebookform');

  function dismiss(){pop.hidden=true;localStorage.setItem(KEY,'1')}
  closeBtn.addEventListener('click',dismiss);
  pop.addEventListener('click',e=>{if(e.target===pop)dismiss()});

  if(!localStorage.getItem(KEY)){
    setTimeout(()=>{pop.hidden=false},10000);
  }

  ebookForm.addEventListener('submit',e=>{
    e.preventDefault();
    fetch('https://formsubmit.co/ajax/info@thefuturedesign.nl',{
      method:'POST',
      headers:{'Accept':'application/json'},
      body:new FormData(ebookForm)
    }).catch(()=>{});
    localStorage.setItem(KEY,'1');
    intro.hidden=true;
    success.hidden=false;
    const a=document.createElement('a');
    a.href='downloads/3-tips-zichtbaarheid-thefuturedesign.pdf';
    a.download='';
    document.body.appendChild(a);
    a.click();
    a.remove();
  });
})();
