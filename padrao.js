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
    if (iptPesquisa.length > 3){
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
}
function confirmar(){
    var tavazio = escolhido != null
    console.log(tavazio)
    if (tavazio){
        console.log("tem algo:" + escolhido);
        window.open(escolhido[1], "_self")
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

function mudarTema() {
    if (tema == 0) {
        r.style.setProperty ('--main-bg-color', '#3a95d1');
        tema = 1
    }
    else {
        r.style.setProperty ('--main-bg-color', '#00FF00');
        tema = 0
    }
}

var tema = 0

var r = document.querySelector(':root');
