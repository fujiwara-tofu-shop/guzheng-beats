(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&l(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function l(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const h="modulepreload",k=function(s){return"/guzheng-beats/"+s},m={},w=function(r,n,l){let e=Promise.resolve();if(n&&n.length>0){let b=function(o){return Promise.all(o.map(d=>Promise.resolve(d).then(u=>({status:"fulfilled",value:u}),u=>({status:"rejected",reason:u}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),i=a?.nonce||a?.getAttribute("nonce");e=b(n.map(o=>{if(o=k(o),o in m)return;m[o]=!0;const d=o.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${u}`))return;const c=document.createElement("link");if(c.rel=d?"stylesheet":h,d||(c.as="script"),c.crossOrigin="",c.href=o,i&&c.setAttribute("nonce",i),document.head.appendChild(c),d)return new Promise((y,g)=>{c.addEventListener("load",y),c.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${o}`)))})}))}function t(a){const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=a,window.dispatchEvent(i),!i.defaultPrevented)throw a}return e.then(a=>{for(const i of a||[])i.status==="rejected"&&t(i.reason);return r().catch(t)})},v=[{title:"Jade Garden",chinese:"翡翠花园",bpm:75,key:"Am",code:`setcps(75/60/4)
stack(
  // Dusty drums
  s("bd*2, ~ sd, hh*8")
    .bank("RolandTR808")
    .gain(.8)
    .lpf(2000),
  // Pentatonic bass
  note("<a1 c2 d2 e2>*2")
    .s("sawtooth")
    .lpf(400)
    .decay(.2)
    .sustain(0)
    .gain(.6),
  // Guzheng-style melody (pentatonic)
  note("a4 c5 d5 e5 g5 e5 d5 c5".slow(2))
    .s("sine")
    .delay(.3)
    .delaytime(.375)
    .lpf(1500)
    .gain(.3)
)`},{title:"Temple Fog",chinese:"寺院晨雾",bpm:68,key:"Dm",code:`setcps(68/60/4)
stack(
  // Lo-fi drums with swing
  s("bd [~ bd] sd ~, [hh hh:1]*4")
    .bank("RolandTR808")
    .gain(.7)
    .lpf(1800)
    .room(.3),
  // Deep sub bass
  note("<d1 [d1 f1] g1 a1>")
    .s("square")
    .lpf(200)
    .decay(.3)
    .sustain(.1)
    .gain(.5),
  // Ethereal pad
  note("<d3,f3,a3> <a3,c4,e4>".slow(4))
    .s("sine")
    .attack(.5)
    .decay(2)
    .sustain(.3)
    .lpf(800)
    .gain(.2)
    .delay(.4)
)`},{title:"Silk Road",chinese:"丝绸之路",bpm:82,key:"Em",code:`setcps(82/60/4)
stack(
  // Boom bap drums
  s("[bd ~] [~ bd] sd ~, hh*8")
    .bank("RolandTR909")
    .gain(.8)
    .lpf(2500),
  // Walking bass
  note("e2 g2 a2 b2 d3 b2 a2 g2".slow(2))
    .s("sawtooth")
    .lpf(500)
    .decay(.15)
    .sustain(0)
    .gain(.5),
  // Plucky pentatonic lead
  note("[e4 g4] [a4 ~] [b4 d5] [~ e5]")
    .s("triangle")
    .decay(.1)
    .sustain(0)
    .delay(.25)
    .delaytime(.25)
    .lpf(2000)
    .gain(.35)
)`},{title:"Bamboo Rain",chinese:"竹林听雨",bpm:70,key:"Gm",code:`setcps(70/60/4)
stack(
  // Minimal drums
  s("bd ~ ~ bd, ~ sd ~ sd:1, hh*16")
    .bank("RolandTR808")
    .gain(".8 .6 .7 .6")
    .lpf(1600),
  // Mellow bass
  note("<g1 [~ g1] bb1 c2>")
    .s("sine")
    .lpf(300)
    .decay(.4)
    .sustain(.2)
    .gain(.6),
  // Rain-like arpeggios
  note("g4 bb4 c5 d5 f5 d5 c5 bb4".fast(2))
    .s("sine")
    .decay(.08)
    .sustain(0)
    .delay(.5)
    .delaytime(".125 .25")
    .lpf(1200)
    .gain(".25 .2 .3 .2")
)`},{title:"Dragon Tea",chinese:"龙井茶",bpm:78,key:"Cm",code:`setcps(78/60/4)
stack(
  // Crispy drums
  s("[bd bd:1] sd, oh*2, hh*8")
    .bank("RolandTR808")
    .gain(.75)
    .lpf(2200)
    .room(.2),
  // Groovy bass
  note("c2 c2 eb2 ~ g2 ~ eb2 c2".slow(2))
    .s("square")
    .lpf(350)
    .decay(.2)
    .sustain(0)
    .gain(.5),
  // Oriental melody
  note("<c4 eb4 f4 g4 bb4>*2")
    .s("triangle")
    .lpf(1800)
    .decay(.15)
    .sustain(.1)
    .delay(.3)
    .gain(.3),
  // Background pad
  note("<c3,eb3,g3>".slow(4))
    .s("sine")
    .attack(1)
    .decay(3)
    .sustain(.2)
    .gain(.15)
)`},{title:"Moon Gate",chinese:"月亮门",bpm:65,key:"Fm",code:`setcps(65/60/4)
stack(
  // Slow, heavy drums
  s("bd ~ [~ bd] ~, ~ [sd ~] ~ sd, hh*4")
    .bank("RolandTR808")
    .gain(.7)
    .lpf(1400)
    .room(.4),
  // Deep bass
  note("<f1 ab1 c2 eb2>".slow(2))
    .s("sawtooth")
    .lpf(250)
    .decay(.5)
    .sustain(.1)
    .gain(.55),
  // Dreamy lead
  note("f4 ~ ab4 ~ c5 ~ ab4 f4".slow(2))
    .s("sine")
    .attack(.1)
    .decay(.3)
    .sustain(.2)
    .delay(.4)
    .delaytime(.5)
    .lpf(900)
    .gain(.25)
)`}],{repl:E}=await w(async()=>{const{repl:s}=await import("https://unpkg.com/@strudel/repl@latest");return{repl:s}},[]);let p=null,f=null;const R=document.getElementById("tracks");v.forEach((s,r)=>{const n=document.createElement("div");n.className="track",n.innerHTML=`
        <div class="track-header">
          <div>
            <span class="track-number">0${r+1}</span>
            <span class="track-title">${s.title}</span>
            <span class="track-title-cn">${s.chinese}</span>
          </div>
          <button class="play-btn">
            <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
          </button>
        </div>
        <div class="track-meta">
          <span>${s.bpm} BPM</span>
          <span>${s.key}</span>
          <span>Pentatonic</span>
        </div>
      `,n.addEventListener("click",async()=>{if(p&&(await p.stop(),document.querySelectorAll(".track").forEach(e=>e.classList.remove("playing"))),f===r){f=null,p=null;return}n.classList.add("playing"),f=r;const{scheduler:l}=await E({defaultOutput:"speaker",prebake:!0,getTime:()=>performance.now()/1e3});p=l,await l.setCode(s.code),await l.start()}),R.appendChild(n)});
