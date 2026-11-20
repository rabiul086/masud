/* Md. Masud Rana — portfolio scripts: routing, preloader, cursor dot, card tilt, reveal, contact form */
(function(){
var views=["home","resume","works","contact"],io=null;
function reveal(root){
 var els=document.querySelectorAll("#br .rv, #"+root.id+" .rv");
 els.forEach(function(e){e.classList.remove("in")});
 if(!("IntersectionObserver" in window)){els.forEach(function(e){e.classList.add("in")});return}
 if(io)io.disconnect();
 io=new IntersectionObserver(function(es){es.forEach(function(x){if(x.isIntersecting){x.target.classList.add("in");io.unobserve(x.target)}})},{threshold:.12,rootMargin:"0px 0px -6% 0px"});
 els.forEach(function(e){io.observe(e)});
}
function route(){
 var h=(location.hash||"#home").slice(1);if(views.indexOf(h)<0)h="home";
 views.forEach(function(v){document.getElementById("v-"+v).classList.toggle("on",v===h)});
 document.querySelectorAll("nav a").forEach(function(a){a.classList.toggle("on",a.getAttribute("data-v")===h)});
 document.getElementById("br").hidden=(h==="contact");window.scrollTo(0,0);
 requestAnimationFrame(function(){reveal(document.getElementById("v-"+h))});
}
addEventListener("hashchange",route);route();
/* preloader */
var pre=document.getElementById("pre"),cnt=document.getElementById("cnt"),t0=null,D=2300;
var rm=matchMedia("(prefers-reduced-motion:reduce)").matches;
function finish(){pre.classList.add("done");document.body.classList.add("ready");setTimeout(function(){pre.remove()},1100)}
if(rm){finish()}else{
 (function tick(t){if(!t0)t0=t;var p=Math.min(1,(t-t0)/D),v=Math.round(100*(1-Math.pow(1-p,2)));
  cnt.textContent=String(v).padStart(3,"0");if(p<1)requestAnimationFrame(tick);else setTimeout(finish,350)})(performance.now());
}
/* cursor dot */
var dot=document.getElementById("dot"),x=0,y=0,tx=0,ty=0;
addEventListener("mousemove",function(e){tx=e.clientX;ty=e.clientY});
(function f(){x+=(tx-x)*.18;y+=(ty-y)*.18;dot.style.transform="translate("+(x-5)+"px,"+(y-5)+"px)";requestAnimationFrame(f)})();
/* 3D card + white glow */
if(!rm){document.querySelectorAll(".stage").forEach(function(st){var cd=st.querySelector(".card");if(!cd)return;
 st.addEventListener("mousemove",function(e){var r=cd.getBoundingClientRect(),px=(e.clientX-r.left)/r.width,py=(e.clientY-r.top)/r.height;
  cd.classList.add("hov");cd.style.setProperty("--mx",(px*100)+"%");cd.style.setProperty("--my",(py*100)+"%");
  cd.style.transform="rotateY("+((px-.5)*12)+"deg) rotateX("+((.5-py)*10)+"deg) translateZ(14px)"});
 st.addEventListener("mouseleave",function(){cd.classList.remove("hov");cd.style.transform=""})})}
/* contact form */
function copyText(t,btn){var ok=function(){if(btn){var o=btn.textContent;btn.textContent="COPIED";setTimeout(function(){btn.textContent=o},1600)}};
 try{navigator.clipboard.writeText(t).then(ok,function(){fb()})}catch(e){fb()}
 function fb(){var a=document.createElement("textarea");a.value=t;a.style.position="fixed";a.style.opacity="0";document.body.appendChild(a);a.select();try{document.execCommand("copy");ok()}catch(e){}a.remove()}}
var cp=document.getElementById("cp");if(cp)cp.addEventListener("click",function(){copyText("masud905868@gmail.com",cp)});
function clk(){var el=document.getElementById("clk");if(el)el.textContent=new Intl.DateTimeFormat("en-GB",{timeZone:"Asia/Dhaka",hour:"2-digit",minute:"2-digit",hour12:false}).format(new Date())}
clk();setInterval(clk,30000);
var fm=document.getElementById("fm");
if(fm){fm.addEventListener("submit",function(e){e.preventDefault();
 var d=new FormData(fm),msg=document.getElementById("fmsg"),n=(d.get("name")||"").trim(),em=(d.get("email")||"").trim(),m=(d.get("msg")||"").trim(),t=d.get("type")||"Other";
 if(!n||!em||!m){msg.textContent="Please fill in your name, email and message.";return}
 if(!/^\S+@\S+\.\S+$/.test(em)){msg.textContent="Please enter a valid email address.";return}
 msg.textContent="";
 var sub=(d.get("subject")||"").trim()||("Enquiry: "+t);
 var body="Type of enquiry: "+t+"\nName: "+n+"\nCompany: "+((d.get("firm")||"").trim())+"\nEmail: "+em+"\n\n"+m;
 var url="mailto:masud905868@gmail.com?subject="+encodeURIComponent(sub)+"&body="+encodeURIComponent(body);
 var ag=document.getElementById("again");ag.href=url;
 var dn=document.getElementById("done"),dp=dn.querySelector("p"),rw=dn.querySelector(".row2");
 document.getElementById("cpm").onclick=function(){copyText("To: masud905868@gmail.com\nSubject: "+sub+"\n\n"+body,this)};
 function fallback(){dp.textContent="Your email app should now open with the message filled in. Press send there to deliver it.";rw.style.display="";dn.hidden=false;ag.click()}
 function sent(){dp.textContent="Thank you. Your message has been sent to Masud, who will reply by email.";rw.style.display="none";dn.hidden=false;fm.reset()}
 if(/^https?:/.test(location.protocol)){
  msg.textContent="Sending…";
  fetch("/",{method:"POST",headers:{"Content-Type":"application/x-www-form-urlencoded"},body:new URLSearchParams(d).toString()})
   .then(function(r){msg.textContent="";if(r.ok){sent()}else{fallback()}})
   .catch(function(){msg.textContent="";fallback()});
 }else{fallback()}
})}

})();
