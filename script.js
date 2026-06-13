let cliques = 0;

const portal = document.getElementById("portal");

portal.addEventListener("click", () => {

cliques++;

document.getElementById("contador").innerText =
cliques + " / 5";

if(cliques == 1){
document.getElementById("texto").innerText =
"O portal começou a brilhar...";
}

if(cliques == 2){
document.getElementById("texto").innerText =
"Corações apareceram...";
}

if(cliques == 3){
document.getElementById("texto").innerText =
"Você está chegando...";
}

if(cliques == 4){
document.getElementById("texto").innerText =
"Tem certeza?";
}

if(cliques >= 5){

document.getElementById("portal-screen").style.display = "none";
document.getElementById("game-screen").style.display = "block";

}

});

/* PERSONAGEM */

const bibi = document.getElementById("bibi");

let posicao = 10;

/* FUNÇÃO DE ANIMAÇÃO */

function animarBibi(){

bibi.classList.add("andando");

setTimeout(() => {
bibi.classList.remove("andando");
}, 200);

}

/* TECLADO (PC) */

document.addEventListener("keydown", (e) => {

if(e.key === "ArrowRight"){

posicao += 10;

bibi.style.left = posicao + "px";

bibi.style.transform = "scaleX(1)";

animarBibi();

}

if(e.key === "ArrowLeft"){

posicao -= 10;

bibi.style.left = posicao + "px";

bibi.style.transform = "scaleX(-1)";

animarBibi();

}

});

/* BOTÕES CELULAR */

document.getElementById("direita").addEventListener("click", () => {

posicao += 10;

bibi.style.left = posicao + "px";

bibi.style.transform = "scaleX(1)";

animarBibi();

});

document.getElementById("esquerda").addEventListener("click", () => {

posicao -= 10;

bibi.style.left = posicao + "px";

bibi.style.transform = "scaleX(-1)";

animarBibi();

});