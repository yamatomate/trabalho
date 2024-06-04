
function mostrar1(){
    let valor = document.getElementById("mostre")
    W = document.getElementById("input_W").value;
    a = document.getElementById("input_a").value * 10;
    b = document.getElementById("input_b").value * 10;
    t =document.getElementById("input_t").value * 10;
    valor.innerText = `W:${W}\n a:${a}\n b:${b}\n t:${t}`;
}

function ponto_X(){
    return Math.sin(W)*a*t;
}

function ponto_Y(){
    return Math.cos(W)*b*t
}

function atualizar(){
    let planeta = document.getElementById("obj_planeta")
    let transX = x+ponto_X()
    let transY = y+ponto_Y()
    let tamanhokkk = Math.sin(W)*10
    planeta.querySelector("circle").setAttribute("r", `${50-tamanhokkk}`)
    planeta.style.transform= `translate(${transX}px, ${transY}px)`
}


var W; //posição na equação
var a; //largura
var b; //altura
var t; //tamanho

const CorpoMain = document.getElementById("plano").getBoundingClientRect();
const x_plano = CorpoMain.width;   
const y_plano = CorpoMain.height;

const planeta = document.getElementById("obj_planeta")
const x_relativo = planeta.getBoundingClientRect().width;
const y_relativo = planeta.getBoundingClientRect().height;

const x = x_plano /2 - x_relativo/2
const y = y_plano /2 - y_relativo/2
