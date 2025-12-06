document.querySelectorAll('a[href^="#"]').forEach(function(a){a.addEventListener('click',function(e){var id=a.getAttribute('href').slice(1);var el=document.getElementById(id);if(el){e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});}})});
var menuBtn=document.querySelector('.nav .menu');
if(menuBtn){menuBtn.addEventListener('click',function(){var nav=document.querySelector('.nav');var expanded=menuBtn.getAttribute('aria-expanded')==='true';menuBtn.setAttribute('aria-expanded',String(!expanded));nav.classList.toggle('open');});}
var form=document.querySelector('.contact-form');
if(form){form.addEventListener('submit',function(e){e.preventDefault();var name=form.querySelector('input[name="name"]').value.trim();var email=form.querySelector('input[name="email"]').value.trim();var message=form.querySelector('textarea[name="message"]').value.trim();var subject=encodeURIComponent('Kebutuhan Layanan BIIXCODE');var body=encodeURIComponent('Nama: '+name+'%0AEmail: '+email+'%0A%0A'+message);var mailto='mailto:hello@biixcode.local?subject='+subject+'&body='+body;window.location.href=mailto;});}
var themeBtn=document.querySelector('.nav .theme');
var root=document.documentElement;
var savedTheme=localStorage.getItem('theme');
if(savedTheme){root.setAttribute('data-theme',savedTheme);if(themeBtn){themeBtn.textContent=savedTheme==='light'?'🌙':'☀️';}}
if(themeBtn){themeBtn.addEventListener('click',function(){var cur=root.getAttribute('data-theme');var next=cur==='light'?null:'light';if(next){root.setAttribute('data-theme','light');localStorage.setItem('theme','light');themeBtn.textContent='🌙';}else{root.removeAttribute('data-theme');localStorage.removeItem('theme');themeBtn.textContent='☀️';}})}
var observer=new IntersectionObserver(function(entries){entries.forEach(function(entry){if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.1});
document.querySelectorAll('.reveal').forEach(function(el){observer.observe(el);});
var faqItems=document.querySelectorAll('.faq-item');
faqItems.forEach(function(item){var q=item.querySelector('.faq-q');if(q){q.addEventListener('click',function(){item.classList.toggle('open');});}});
var slides=document.querySelectorAll('#testimoni .slide');
var idx=0;
function showSlide(i){slides.forEach(function(s){s.classList.remove('active')});slides[i].classList.add('active');}
function next(){idx=(idx+1)%slides.length;showSlide(idx)}
function prev(){idx=(idx-1+slides.length)%slides.length;showSlide(idx)}
var nextBtn=document.querySelector('#testimoni .next');
var prevBtn=document.querySelector('#testimoni .prev');
if(nextBtn)nextBtn.addEventListener('click',next);
if(prevBtn)prevBtn.addEventListener('click',prev);
var reduceMotion=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if(!reduceMotion){setInterval(next,5000);}else{showSlide(idx);}
var backTop=document.querySelector('.back-to-top');
window.addEventListener('scroll',function(){if(window.scrollY>300){backTop&&backTop.classList.add('show')}else{backTop&&backTop.classList.remove('show')}});
if(backTop){backTop.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})})}
