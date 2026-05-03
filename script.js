document.addEventListener("DOMContentLoaded",function(){
// Loader
const loader=document.getElementById("loader");if(loader){setTimeout(()=>loader.classList.add("hidden"),1200);setTimeout(()=>loader.style.display="none",1800)}

// Header scroll
const header=document.getElementById("header"),topBar=document.getElementById("topBar");window.addEventListener("scroll",()=>{window.scrollY>60?header.classList.add("scrolled"):header.classList.remove("scrolled");window.scrollY>200&&topBar?topBar.classList.add("hide"):topBar&&topBar.classList.remove("hide")});

// Back to top
const btt=document.getElementById("backToTop");window.addEventListener("scroll",()=>{btt&&(window.scrollY>500?btt.classList.add("visible"):btt.classList.remove("visible"))});

// Burger menu
const burger=document.getElementById("burger"),navLinks=document.getElementById("nav-links");burger&&burger.addEventListener("click",()=>{burger.classList.toggle("active");navLinks&&navLinks.classList.toggle("active")});document.querySelectorAll(".nav-links a").forEach(a=>a.addEventListener("click",()=>{burger&&burger.classList.remove("active");navLinks&&navLinks.classList.remove("active")}));

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(a=>a.addEventListener("click",function(e){e.preventDefault();const t=this.getAttribute("href");if(t&&t!=="#"){const el=document.querySelector(t);el&&el.scrollIntoView({behavior:"smooth",block:"start"})}}));

// Language toggle
const langBtn=document.getElementById("lang-btn");let cur="ar";langBtn&&langBtn.addEventListener("click",()=>{cur=cur==="ar"?"en":"ar";document.documentElement.lang=cur;document.documentElement.dir=cur==="ar"?"rtl":"ltr";const sp=langBtn.querySelector("span");sp&&(sp.textContent=cur==="ar"?"English":"العربية");const dataEls=[...document.querySelectorAll("[data-ar]")];dataEls.sort((a,b)=>b.querySelectorAll("[data-ar]").length-a.querySelectorAll("[data-ar]").length).forEach(el=>{const v=el.getAttribute("data-"+cur);if(!v)return;if(el.children.length===0){el.textContent=v}else{const inner=el.querySelector("[data-ar]");if(inner){const iv=inner.getAttribute("data-"+cur);iv&&(inner.textContent=iv)}else{const tn=Array.from(el.childNodes).find(n=>n.nodeType===3&&n.textContent.trim());if(tn)tn.textContent=v}}})});

// Scroll reveal
const reveals=document.querySelectorAll(".reveal-up,.reveal-left,.reveal-right"),io=new IntersectionObserver((entries)=>{entries.forEach(e=>{e.isIntersecting&&e.target.classList.add("active")})},{threshold:.12});reveals.forEach(el=>io.observe(el));

// Counters
const counters=document.querySelectorAll(".counter[data-target]"),cio=new IntersectionObserver((entries)=>{entries.forEach(e=>{if(e.isIntersecting){const t=e.target,goal=parseInt(t.getAttribute("data-target")),dur=2000,step=Math.ceil(goal/(dur/16));let cur=0,iv=setInterval(()=>{cur+=step;cur>=goal?(cur=goal,clearInterval(iv),t.textContent=cur):t.textContent=cur},16);cio.unobserve(t)}})},{threshold:.5});counters.forEach(c=>cio.observe(c));

// News Slider
const nsw=document.getElementById("newsSliderWrapper"),nsd=document.getElementById("newsSliderDots");if(nsw&&nsd){const slides=nsw.querySelectorAll(".news-slide"),total=slides.length;let idx=0,timer;function nu(){nsw.style.transform="translateX("+(idx*-100)+"%)";nsd.querySelectorAll(".news-slider-dot").forEach((d,i)=>d.classList.toggle("active",i===idx))}function nn(){idx=(idx+1)%total;nu()}function np(){idx=(idx-1+total)%total;nu()}function ng(i){idx=i;nu()}for(let i=0;i<total;i++){const d=document.createElement("button");d.className="news-slider-dot";d.ariaLabel="Slide "+(i+1);d.addEventListener("click",()=>{ng(i);nr()});nsd.appendChild(d)}nsd.children[0].classList.add("active");function nr(){clearInterval(timer);timer=setInterval(nn,6000)}window.moveNewsSlide=function(d){d>0?np():nn();nr()};timer=setInterval(nn,6000);nsw.parentElement.addEventListener("mouseenter",()=>clearInterval(timer));nsw.parentElement.addEventListener("mouseleave",nr);let ts=0;nsw.addEventListener("touchstart",e=>ts=e.changedTouches[0].screenX);nsw.addEventListener("touchend",e=>{const te=e.changedTouches[0].screenX;ts-te>50?(nn(),nr()):te-ts>50&&(np(),nr())})}

// Canvas particles
const cv=document.getElementById("heroCanvas");if(cv){const ctx=cv.getContext("2d"),resize=()=>{cv.width=window.innerWidth;cv.height=window.innerHeight};resize();window.addEventListener("resize",resize);const particles=[];for(let i=0;i<40;i++)particles.push({x:Math.random()*cv.width,y:Math.random()*cv.height,r:Math.random()*2+1,dx:(Math.random()-.5)*.5,dy:(Math.random()-.5)*.5,o:Math.random()*.5+.2});function animate(){ctx.clearRect(0,0,cv.width,cv.height);particles.forEach(p=>{p.x+=p.dx;p.y+=p.dy;if(p.x<0||p.x>cv.width)p.dx*=-1;if(p.y<0||p.y>cv.height)p.dy*=-1;ctx.beginPath();ctx.arc(p.x,p.y,p.r,0,Math.PI*2);ctx.fillStyle="rgba(247,214,24,"+p.o+")";ctx.fill()});requestAnimationFrame(animate)}animate()}

// Lightbox
window.openLightbox=function(src){const lb=document.getElementById("lightbox"),img=document.getElementById("lightbox-img");if(lb&&img){img.src=src;lb.classList.add("active")}};
window.closeLightbox=function(){const lb=document.getElementById("lightbox");lb&&lb.classList.remove("active")};
document.addEventListener("keydown",e=>{if(e.key==="Escape")closeLightbox()});
});
