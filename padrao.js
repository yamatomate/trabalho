const rotas = [
    ["classico","benClassico.html"],
    ["força alienigena","benForca.html"],
    ["supremacia alienigena","benSupre.html"],     
    ["omniverse","benOmniverse.html"],     
    ["aliens","aliens/todosAliens.html"],    
    ["objetos", "objetos/todosObjetos.html"],     
    ["ben", "personagens/ben.html"],     
    ["Azmuth", "personagens/Azmuth.html"],     
    ["gwen", "personagens/gwen.html"],     
    ["kevin", "personagens/kevin.html"],     
    ["rook", "personagens/Rook.html"],     
    ["tetrax", "personagens/tetrax.html"],     
    ["vo max", "personagens/Vo_max.html"],     
    ["formulario", "formulario.html"]
]
const sites = new Map(rotas);
console.log(sites.size);
console.log(sites);

function pesquisar1(){
    const ipPes = document.getElementById('inputBP');
    const btnPes = document.getElementById('btnBp');
    btnPes.style.borderRadius = "0px 25px 0px 0px";
    ipPes.style.borderRadius = "25px 0px 0px 0px";
    const iptPesquisa = ipPes.value;
    const pesqui = document.getElementById('pes');
    pesqui.style.display = "flex";
    pesqui.innerHTML = ""
    var opa = 0;
    for (const [chave, caminho] of sites){
        console.log(`${iptPesquisa} <=> chave || caminho => ${chave.localeCompare(iptPesquisa)} opa = ${opa}`);
        if ( chave.localeCompare(iptPesquisa) == 0 ) {
            pesqui.innerHTML = `<a href=${caminho}>${chave}</a>`;
        } if (chave.includes(iptPesquisa) && opa < 5) {
            pesqui.innerHTML += `<a href=${caminho}>${chave}</a>`
        }  
        opa += 1;
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
    console.log("teste")
    const css = document.getElementById("idCss")
    const iconCE = document.getElementById("bolsonaro_de_calcinha")
    console.log(`${css}\n${iconCE}`)
    if (css.getAttribute("href") == "nvPadrao.css"){
        css.setAttribute("href","nvPadraoEscuro.css")
        iconCE.setAttribute("src","imagens/moon-svgrepo-com.svg")
    } else {
        css.setAttribute("href","nvPadrao.css")
        iconCE.setAttribute("src","imagens/sun-svgrepo-com.svg")
    }
}