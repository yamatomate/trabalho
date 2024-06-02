const sites = [
    ["classico","benClassico.html"],
    ["força alienigena","benForca.html"],
    ["supremacia alienigena","benSupre.html"],     
    ["omniverse","benOmniverse.html"],     
    ["aliens","aliens/todosAliens.html"],    
    ["objetos", "objetos/todosObjetos.html"],     
    ["ben", "personagens/ben.html"],     
    ["azmuth", "personagens/Azmuth.html"],     
    ["gwen", "personagens/gwen.html"],     
    ["kevin", "personagens/kevin.html"],     
    ["rook", "personagens/Rook.html"],     
    ["tetrax", "personagens/tetrax.html"],     
    ["vo max", "personagens/Vo_max.html"],     
    ["formulario", "formulario.html"]
];

var tema;

try{
    tema = sessionStorage.getItem("tema");
    console.log("consegui")
    atualizarTema();
} catch(error) {
    sessionStorage.setItem("tema", true);
    tema = sessionStorage.getItem("tema");
    atualizarTema();
}

console.log(sites);
console.log(sites.length);
var escolhido = null;
console.log(escolhido)
function pesquisar1(){
    const ipPes = document.getElementById('inputBP');
    const btnPes = document.getElementById('btnBp');
    btnPes.style.borderRadius = "0px 25px 0px 0px";
    ipPes.style.borderRadius = "25px 0px 0px 0px";
    const iptPesquisa = ipPes.value.toLowerCase();
    const pesqui = document.getElementById('pes');
    pesqui.style.display = "flex";
    pesqui.innerHTML = ""
    var opa = 0;
    var i = 0;
    escolhido = null;
        console.log("começando varredura")
        for (i = 0; i < sites.length; i++){
            console.log(`${i} (${iptPesquisa} == ${sites[i][0]})=${sites[i][0].includes(iptPesquisa)}`);
            if (!sites[i][0].includes(iptPesquisa)){
                console.log("tipo1")
            } else {
                console.log("tipo2")
                escolhido = sites[i];
                if (opa < 5){
                    pesqui.innerHTML += `<a href="${sites[i][1]}"> ${sites[i][0]} </a>`
                    opa += 1;
                }
            }
            console.log(escolhido)
        }
        console.log("varredura completa " + opa)
    }
function confirmar(){
    var tavazio = escolhido != null
    console.log(tavazio)
    if (tavazio){
        console.log("tem algo:" + escolhido);
        window.open(escolhido[1], "_self");
    } else {
        console.log("tem nada:" + escolhido);
    }
}
function restarBP(){
    const inputBP = document.getElementById('inputBP');
    const pesqui = document.getElementById('pes');
    const btnPes = document.getElementById('btnBp');
    inputBP.style = "";
    pesqui.style = "";
    btnPes.style = "";
}

function mudarTema(){
    var icone = document.getElementById("bolsonaro_de_calcinha");
    if (tema == true){
        tema = false;
        icone.style.transform = "translateX(110%)";
        icone.style.filter = "invert(95%) sepia(9%) saturate(829%) hue-rotate(124deg) brightness(91%) contrast(94%) "
        icone.src = "imagens/moon-svgrepo-com.svg"
    } else {
        tema = true;
        icone.style.transform = "translateX(0%)";
        icone.style.filter = "invert(77%) sepia(58%) saturate(392%) hue-rotate(12deg) brightness(107%) contrast(105%)";
        icone.src = "imagens/sun-svgrepo-com.svg"
    }
    atualizarTema();
    sessionStorage.setItem("tema",tema);
    console.log(tema);

}

function atualizarTema(){
    const css = document.getElementById("idCss")
    if (tema){
        css.setAttribute("href", "temaClaro.css");
    } else{
        css.setAttribute("href", "temaEscuro.css");
    }
}