const openHeart=document.getElementById("openHeart");
const opening=document.getElementById("opening");
const main=document.getElementById("mainContent");
const song=document.getElementById("song");
const musicToggle=document.getElementById("musicToggle");
const musicText=document.getElementById("musicText");

openHeart.addEventListener("click", async ()=>{
  opening.style.transition="opacity 1.2s ease, transform 1.2s ease";
  opening.style.opacity="0";
  opening.style.transform="scale(1.03)";
  setTimeout(()=>{opening.style.display="none";main.classList.remove("hidden");window.scrollTo(0,0)},1200);
  try{await song.play();}catch(e){musicText.textContent="Tap play to hear our song";}
});

musicToggle.addEventListener("click",()=>{
  if(song.paused){song.play();musicToggle.textContent="Ⅱ";musicText.textContent="Our song is playing"}
  else{song.pause();musicToggle.textContent="▶";musicText.textContent="Music paused"}
});

const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add("show")})
},{threshold:.15});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

const hearts=document.getElementById("hearts");
function makeHeart(){
  const h=document.createElement("div");h.className="heart";h.textContent=Math.random()>.35?"♡":"♥";
  h.style.left=Math.random()*100+"%";
  h.style.fontSize=(10+Math.random()*14)+"px";
  h.style.setProperty("--drift",(Math.random()*120-60)+"px");
  h.style.animationDuration=(8+Math.random()*8)+"s";
  hearts.appendChild(h);
  setTimeout(()=>h.remove(),17000);
}
setInterval(makeHeart,900);
for(let i=0;i<8;i++)setTimeout(makeHeart,i*400);
