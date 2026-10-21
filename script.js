const burger=document.getElementById('burger'),nav=document.getElementById('nav');
burger.addEventListener('click',()=>{const o=nav.classList.toggle('open');burger.setAttribute('aria-expanded',o);burger.setAttribute('aria-label',o?'Close menu':'Open menu')});
nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');burger.setAttribute('aria-expanded',false)}));
document.getElementById('yr').textContent=new Date().getFullYear();
const words=['HTML','CSS','Web Development'],el=document.getElementById('typed');
if(matchMedia('(prefers-reduced-motion: reduce)').matches){el.textContent=words.join(', ')}
else{let w=0,c=0,del=false;(function tick(){const t=words[w];c+=del?-1:1;el.textContent=t.slice(0,c);let d=del?45:90;
if(!del&&c===t.length){del=true;d=1400}else if(del&&c===0){del=false;w=(w+1)%words.length;d=300}setTimeout(tick,d)})()}
document.querySelectorAll('.sec').forEach(s=>s.classList.add('reveal'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');e.target.querySelectorAll('.meter').forEach(m=>m.classList.add('go'));io.unobserve(e.target)}}),{threshold:.15});
document.querySelectorAll('.reveal').forEach(s=>io.observe(s));
const copy=document.getElementById('copy');
copy.addEventListener('click',async()=>{const m=document.getElementById('msg');
try{await navigator.clipboard.writeText('labasan323@gmail.com');m.textContent='Email address copied.'}
catch(e){m.textContent='Copy failed. Please copy the address shown below.'}});
