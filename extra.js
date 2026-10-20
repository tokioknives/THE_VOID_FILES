/* extra.js - loads AFTER index.html's main script. Adds more clues + a talkative Zorp. */

/* ---------- 1. More clues in every room (add yours here too) ---------- */
const MORE={
area51:[
 {x:7,y:2,e:"🔭",t:"Groom Lake",d:"The base sits beside a dry lakebed called Groom Lake. The CIA picked the spot in 1955, and the first U-2 spy plane flights took off from there that same year."},
 {x:2,y:6,e:"✈️",t:"Spy planes = UFO reports",d:"A 1997 CIA study estimated that over half of 1950s and 60s UFO reports were really high-flying spy planes like the U-2. Nobody knew they existed, so people saw 'mystery lights'."},
 {x:8,y:4,e:"🗣️",t:"Bob Lazar (disputed)",d:"In 1989 Bob Lazar claimed he worked on recovered alien craft at a site near Area 51. No records have been found to confirm his story, and his claims remain disputed."}],
mkultra:[
 {x:7,y:2,e:"🏠",t:"Operation Midnight Climax",d:"The CIA ran safe houses in San Francisco where people were secretly given drugs while agents watched. This is documented in the surviving records and the Senate hearings."},
 {x:2,y:6,e:"🪟",t:"Frank Olson",d:"Army scientist Frank Olson died in 1953 after falling from a New York hotel window, days after being secretly dosed with LSD. The government apologized to his family in 1975. How he fell is still argued about."},
 {x:8,y:4,e:"🏥",t:"Montreal experiments",d:"Dr. Ewen Cameron ran brutal experiments on patients in Montreal with CIA-linked funding. Canada later paid compensation to survivors."}],
northwoods:[
 {x:7,y:2,e:"🚢",t:"The ideas",d:"The plan listed things like staging attacks near the Guantanamo Bay base and making it look like Cuba did them. Public opinion would then support action against Cuba."},
 {x:2,y:6,e:"🧑‍✈️",t:"Who wrote it",d:"The memo came from the Joint Chiefs, then led by Chairman Lyman Lemnitzer. Kennedy refused, and Lemnitzer was not kept on as chairman after 1962."},
 {x:8,y:4,e:"🇨🇺",t:"The backdrop",d:"This came after the failed Bay of Pigs invasion in 1961, when Washington was desperate to remove Castro. It was part of a wider push called Operation Mongoose."}],
tonkin:[
 {x:7,y:2,e:"🗳️",t:"The vote",d:"Congress passed the resolution almost unanimously: 416 to 0 in the House, and 88 to 2 in the Senate. Only Senators Wayne Morse and Ernest Gruening voted no."},
 {x:2,y:6,e:"📂",t:"Pentagon Papers",d:"In 1971 Daniel Ellsberg leaked the Pentagon Papers, a secret history of the war that showed the public had been told far less than the government knew."},
 {x:8,y:4,e:"🧾",t:"The NSA study",d:"The 2005 study was written by NSA historian Robert Hanyok. It found signals were misread and some intelligence was handled in a way that supported the idea of a second attack."}],
roswell:[
 {x:7,y:2,e:"🎤",t:"The Fort Worth press photo",d:"On July 8, 1947 General Roger Ramey showed reporters weather-balloon debris in Fort Worth. Critics said it was swapped in. Defenders said it was the real debris."},
 {x:2,y:6,e:"📖",t:"The book that revived it",d:"Roswell was mostly forgotten until the 1980 book 'The Roswell Incident' brought it back. Most of today's famous stories started after that, not in 1947."},
 {x:8,y:4,e:"🤖",t:"Crash-test dummies",d:"The Air Force said dummies were dropped from high altitude in the 1950s. Skeptics note those dates are years after 1947, so witness memories may have merged."}],
tuskegee:[
 {x:7,y:2,e:"🔢",t:"The numbers",d:"About 600 Black men were enrolled: 399 had syphilis and 201 did not. They were offered free meals and burial insurance, but not the truth."},
 {x:2,y:6,e:"💰",t:"The lawsuit",d:"After the story broke, a class-action lawsuit ended in a 1974 settlement of about 10 million dollars."},
 {x:8,y:4,e:"📘",t:"What changed",d:"The scandal led to new U.S. research rules, including required consent and review boards, and the Belmont Report in 1979."}]
};
Object.entries(MORE).forEach(([id,a])=>{const c=CASES.find(k=>k.id===id);if(c)c.objects.push(...a);});

/* ---------- 2. Zorp's brain ---------- */
const FACTS=[
"Declassified means a government released a once-secret file. Black boxes in it are called redactions.",
"FOIA, the Freedom of Information Act from 1966, lets ANYONE ask for government records. You can too!",
"The CIA has an online Reading Room with millions of declassified pages. Free to search.",
"A false flag is when someone stages an attack and blames someone else. Northwoods proposed one. It was rejected.",
"The 1975 Church Committee in the U.S. Senate exposed lots of secret CIA, FBI and NSA activity.",
"Project Blue Book was the Air Force's UFO study, from 1952 to 1969. It closed finding no evidence of alien craft.",
"Operation Paperclip was real: after WWII the U.S. brought German scientists to America to work for it.",
"The Stargate Project was a real government psychic-spying program. It was declassified in 1995 and judged not useful.",
"Primary source: made at the time (a memo, a photo). Secondary source: someone talking about it later. Primary sources win.",
"Good question to ask about any claim: what evidence would prove this WRONG?",
"Click the glowing dots on the globe. Green means documented. Orange means disputed.",
"Stand next to an object in a room and press E to read it. On a phone, just tap it."];
const QUIZ=[
["The CIA publicly acknowledged Area 51 in 2013.",true],["Operation Northwoods was carried out.",false],
["MKUltra records were mostly destroyed in 1973.",true],["The Aug 4, 1964 Tonkin attack is confirmed to have happened.",false],
["The Air Force linked Roswell debris to Project Mogul.",true],["The Tuskegee men were offered penicillin when it became standard.",false],
["The Church Committee investigated the CIA in 1975.",true],["FOIA only lets journalists request records.",false]];
const pick=a=>a[Math.floor(Math.random()*a.length)];
let score=0,asked=0;

/* ---------- 3. Zorp acts ---------- */
const zb=document.getElementById("zorp"),box=document.getElementById("alien");
const st=document.createElement("style");
st.textContent="@keyframes hop{0%,100%{transform:translateY(0)}40%{transform:translateY(-10px)}}.hop{animation:hop .5s}@media (prefers-reduced-motion:reduce){.hop{animation:none}}#menu{display:flex;gap:6px;flex-wrap:wrap;justify-content:flex-end}#menu button{font-size:.8rem;padding:3px 8px}";
document.head.appendChild(st);
function say(t){bubble.textContent=t;zb.classList.remove("hop");void zb.offsetWidth;zb.classList.add("hop");}
function fact(){say("💡 "+pick(FACTS));}
function quiz(){const [q,a]=pick(QUIZ);bubble.textContent="🧠 True or false? "+q+" ";
 ["True","False"].forEach(l=>{const b=document.createElement("button");b.textContent=l;
  b.onclick=()=>{asked++;const ok=(l==="True")===a;if(ok)score++;say((ok?"Correct! ":"Nope! ")+"It's "+(a?"true":"false")+". Score: "+score+"/"+asked);};bubble.appendChild(b);});}
function surprise(){nav.children[0].click();if(cur)document.getElementById("back").click();
 const k=pick(CASES);say("Hold on tight! Flying to "+k.name+"...");setTimeout(()=>fly(k),600);}
zb.onclick=fact;
const menu=document.createElement("div");menu.id="menu";
[["💡 Fact",fact],["🧠 Quiz me",quiz],["🎲 Surprise me",surprise]].forEach(([l,f])=>{const b=document.createElement("button");b.textContent=l;b.onclick=f;menu.appendChild(b);});
box.appendChild(menu);

/* Zorp notices what you're near in a room */
let lastNear=null;const _paint=paint;
paint=function(){_paint();const n=near();if(n&&n!==lastNear)say("👀 "+n.t+"! Press E or tap it.");lastNear=n;};

/* Zorp talks on his own every 40 seconds, unless a quiz is open */
setInterval(()=>{if(!document.hidden&&!bubble.querySelector("button"))fact();},40000);
say("Hi! I'm Zorp. Click me for a fact, or try the buttons.");
