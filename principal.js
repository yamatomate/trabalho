const sites = [
  ["classico", "benClassico.html"],
  ["força alienigena", "benForca.html"],
  ["supremacia alienigena", "benSupre.html"],
  ["omniverse", "benOmniverse.html"],
  ["aliens", "aliens/todosAliens.html"],
  ["objetos", "objetos/todosObjetos.html"],
  ["ben", "personagens/ben.html"],
  ["azmuth", "personagens/Azmuth.html"],
  ["gwen", "personagens/gwen.html"],
  ["kevin", "personagens/kevin.html"],
  ["rook", "personagens/Rook.html"],
  ["tetrax", "personagens/tetrax.html"],
  ["vo max", "personagens/Vo_max.html"],
  ["formulario", "formulario.html"],
];

var escolhido = null;
function pesquisar1() {
  const ipPes = document.getElementById("inputBP");
  const btnPes = document.getElementById("btnBp");
  btnPes.style.borderRadius = "0px 25px 0px 0px";
  ipPes.style.borderRadius = "25px 0px 0px 0px";
  const iptPesquisa = ipPes.value.toLowerCase();
  const pesqui = document.getElementById("pes");
  pesqui.style.display = "flex";
  pesqui.innerHTML = "";
  let opa = 0;
  let i = 0;
  escolhido = null;
  console.log("começando varredura");
  for (i = 0; i < sites.length; i++) {
    console.log(
      `${i} (${iptPesquisa} == ${sites[i][0]})=${sites[i][0].includes(
        iptPesquisa
      )}`
    );
    if (!sites[i][0].includes(iptPesquisa)) {
      console.log("tipo1");
    } else {
      console.log("tipo2");
      escolhido = sites[i];
      if (opa < 5) {
        pesqui.innerHTML += `<a href="${sites[i][1]}"> ${sites[i][0]} </a>`;
        opa += 1;
      }
    }
    console.log(escolhido);
  }
  console.log("varredura completa " + opa);
}
function confirmar() {
  var tavazio = escolhido != null;
  console.log(tavazio);
  if (tavazio) {
    console.log("tem algo:" + escolhido);
    window.open(escolhido[1], "_self");
  } else {
    console.log("tem nada:" + escolhido);
  }
}
function restarBP() {
  const inputBP = document.getElementById("inputBP");
  const pesqui = document.getElementById("pes");
  const btnPes = document.getElementById("btnBp");
  inputBP.style = "";
  pesqui.style = "";
  btnPes.style = "";
}

// tema //

const corpoBdy = document.querySelector("body");
const corpo = document.querySelector("body").getAttribute("fundo");
console.log("imagem de fundo personalizada = " + corpo);

if (!corpo.includes("nada")) {
  console.log("img personalizado");
  corpoBdy.style.backgroundImage = `url(${corpo}`;
  corpoBdy.style.backgroundSize = "cover";
}



// tema claro = false; tema escuro = true
let tema = sessionStorage.getItem("tema");

if (tema === null) {
  tema = false;
  console.log(
    "não foi possivel regastar tema então foi atribuido a ele: " + tema
  );
} else {
  console.log("tema regastado e seu valor é: " + tema);
}

atualizarTema();

// botão de mudança de tema
function mudarTema() {
  console.log("alterando tema de: " + tema);
  tema = !tema;
  console.log("alterando tema para: " + tema);
  sessionStorage.setItem("tema", tema);
  atualizarTema();
}

function atualizarTema() {
  const css = document.getElementById("idCss");
  const icone = document.getElementById("bolsonaro_de_calcinha");
  
  if (tema) {
    css.setAttribute("href", "./temaEscuro.css");
    icone.style.filter = "var(--icone-escuro)";
    icone.setAttribute("src", "imagens/moon-svgrepo-com.svg");
    icone.style.transform = "translateX(140%)";

    if (!corpo.includes("nada")) {
      corpoBdy.style.backdropFilter = "blur(10px) brightness(45%)";
    }
  } else {
    css.setAttribute("href", "./temaClaro.css");
    icone.style.filter = "var(--icone-claro)";
    icone.setAttribute("src", "imagens/sun-svgrepo-com.svg");
    icone.style.transform = "";

    if (!corpo.includes("nada")) {
      corpoBdy.style.backdropFilter = "blur(10px) brightness(100%)";
    }
  }
}
