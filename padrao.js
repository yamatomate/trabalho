const rotas = [
    ["classico","benClassico.html"],
    ["força alienigena","benForca.html"],
    ["supremacia alienigena","benSupre.html"],
    ["omniverse","benOmniverse.html"],
    ["aliens","aliens/todosAliens.html"],
    ["objetos", "objetos/todosObjetos.html"]
]
const sites = new Map(rotas);
console.log(sites.size);
console.log(sites);

function pesquisar1(){
    var ipPes = document.getElementById('inputBP');
    var btnPes = document.getElementById('btnBp');
    btnPes.style.borderRadius = "0px 25px 0px 0px";
    ipPes.style.borderRadius = "25px 0px 0px 0px";
    var iptPesquisa = ipPes.value;
    var pesqui = document.getElementById('pes');
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
    var btnPes = document.getElementById('btnBp');
    inputBP.style = "";
    pesqui.style = "";
    btnPes.style = "";
}