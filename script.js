/* =========================
   PORTAL
========================= */

let cliques = 0;

const musica =
document.getElementById("musica");

const portal = document.getElementById("portal");

portal.addEventListener("click", () => {

  if(cliques === 0){

    musica.volume = 0.25;

    musica.play();

  }

  cliques++;

  document.getElementById("contador").innerText =
  cliques + " / 5";

  if(cliques === 1){
    texto("O portal começou a brilhar...");
  }

  if(cliques === 2){
    texto("Corações apareceram...");
  }

  if(cliques === 3){
    texto("Você está chegando...");
  }

  if(cliques === 4){
    texto("Tem certeza?");
  }

  if(cliques >= 5){

    document.getElementById("portal-screen").style.display = "none";

    document.getElementById("game-screen").style.display = "block";

  }

});

function texto(t){
  document.getElementById("texto").innerText = t;
}

/* =========================
   BIBI
========================= */

const bibi = document.getElementById("bibi");

let posicao = 10;

function moverDireita(){
  
  tocarPasso();

  posicao += 15;

  if(posicao > window.innerWidth - 120){
    posicao = window.innerWidth - 120;
  }

  bibi.style.left = posicao + "px";

  bibi.style.transform = "scaleX(-1)";
}

function moverEsquerda(){

  posicao -= 15;

  if(posicao < 0){
    posicao = 0;
  }

  bibi.style.left = posicao + "px";

  bibi.style.transform = "scaleX(1)";
}

/* =========================
   PULO
========================= */

let pulando = false;

function pular(){

  if(pulando) return;

  pulando = true;

  bibi.style.transition = "top 0.25s";

  bibi.style.top = "250px";

  setTimeout(() => {

    bibi.style.top = "310px";

    setTimeout(() => {
      pulando = false;
    },250);

  },250);

}

/* =========================
   TECLADO
========================= */

document.addEventListener("keydown",(e)=>{

  if(
    e.key === "ArrowRight" ||
    e.key.toLowerCase() === "d"
  ){
    moverDireita();
  }

  if(
    e.key === "ArrowLeft" ||
    e.key.toLowerCase() === "a"
  ){
    moverEsquerda();
  }

  if(e.code === "Space"){
    pular();
  }

  if(
    e.key.toLowerCase() === "e" &&
    podeInteragir
  ){
    interagir();
  }

  if(
    e.key.toLowerCase() === "c"
  ){
    abrirColecao();
  }

});

/* =========================
   BOTÕES MOBILE
========================= */

document.getElementById("direita")
.addEventListener("click", moverDireita);

document.getElementById("esquerda")
.addEventListener("click", moverEsquerda);

document.getElementById("pular")
.addEventListener("click", pular);

document.getElementById("acao")
.addEventListener("click", interagir);

document.getElementById("btn-colecao")
.addEventListener("click", abrirColecao);

/* =========================
   OBJETOS DO MAPA
========================= */

const mariposaX = 260;
const florDelicadaX = 120;

let podeInteragir = false;
let alvoAtual = null;

let luzColetada = false;

/* =========================
   CHECAR INTERAÇÃO
========================= */

function checarInteracao(){

  const aviso =
  document.getElementById("interacao");

  const botao =
  document.getElementById("acao");

  alvoAtual = null;

  if(Math.abs(posicao - mariposaX) < 80){

    alvoAtual = "mariposa";

  }

  if(
  !luzColetada &&
  Math.abs(posicao - florDelicadaX) < 80
){

  alvoAtual = "florDelicada";

}

  if(alvoAtual){

    aviso.style.display = "block";

    botao.style.display = "inline-block";

    podeInteragir = true;

  }else{

    aviso.style.display = "none";

    botao.style.display = "none";

    podeInteragir = false;

  }

}

setInterval(checarInteracao,100);

/* =========================
   INTERAÇÃO
========================= */

function interagir(){

  if(alvoAtual === "mariposa"){
    abrirCenaMariposa();
  }

  if(alvoAtual === "florDelicada"){
    coletarFlorDelicada();
  }

}

/* =========================
   MARIPOSA
========================= */

function abrirCenaMariposa(){

  document.getElementById("cena").style.display =
  "flex";

  document.getElementById("cena-conteudo").innerHTML = `

  <h2>🦋 Mariposa</h2>

  <p>
  Uma pequena mariposa se aproximou...
  </p>

  <p>
  Ela parece querer te mostrar uma lembrança.
  </p>

  <button onclick="seguirMariposa()">
  ❤️ Seguir a mariposa
  </button>

  `;

}

function seguirMariposa(){

  fecharCena();

  abrirInstagram();

}

/* =========================
   PONTINHO DE LUZ
========================= */

 function coletarFlorDelicada(){

document.getElementById("sticker-flor")
.innerHTML = "🌸 Flor Delicada";

  luzColetada = true;

  document.getElementById("flor-delicada")
  .style.display = "none";

  document.getElementById("cena").style.display =
  "flex";

  document.getElementById("cena-conteudo").innerHTML = `

  <h2>🌸 Sticker Encontrado</h2>

  <p>
  Você encontrou a Flor Delicada.
  </p>

  <p>
  Um pequeno símbolo de gentileza
  escondido pelo caminho. 🩷
  </p>

  <p>
  Adicionado à coleção.
  </p>

  <button onclick="fecharCena()">
  Continuar
  </button>

  `;

}

/* =========================
   CENA
========================= */

function fecharCena(){

  document.getElementById("cena").style.display =
  "none";

}

/* =========================
   INSTAGRAM
========================= */

function abrirInstagram(){

  document.getElementById("instagram")
  .style.display = "flex";

}

function fecharInstagram(){

  document.getElementById("instagram")
  .style.display = "none";

}

function curtirPost(){

if(curtido) return;

curtido = true;
curtidas++;

document.getElementById("numero-curtidas").innerText = curtidas;
document.getElementById("btn-curtir").innerText = "💖 Curtido";

// 💖 criar coração subindo
const heart = document.createElement("div");
heart.classList.add("heart-pop");
heart.innerText = "💖";

document.body.appendChild(heart);

// posição perto do botão
const rect = document.getElementById("btn-curtir").getBoundingClientRect();

heart.style.left = rect.left + "px";
heart.style.top = rect.top + "px";

// remove depois
setTimeout(()=>{
heart.remove();
},1000);

}

/* =========================
   COLEÇÃO
========================= */

function abrirColecao(){

  document.getElementById("colecao")
  .style.display = "flex";

}

function fecharColecao(){

  document.getElementById("colecao")
  .style.display = "none";

}

document.getElementById("btn-colecao")
.addEventListener("click", abrirColecao);

function abrirColecao(){
document.getElementById("colecao").style.display = "flex";
}

function fecharColecao(){
document.getElementById("colecao").style.display = "none";
}

function abrirStory(){

document.getElementById("cena").style.display = "flex";
document.getElementById("cena-conteudo").innerHTML = `
  <video autoplay controls width="100%">
    <source src="img/story.mp4" type="video/mp4">
  </video>

  <button onclick="fecharCena()">Fechar</button>
`;

}
   
const somPasso = new Audio("img/passo.mp3");

function tocarPasso(){

  somPasso.currentTime = 0;

  somPasso.play();

     }
