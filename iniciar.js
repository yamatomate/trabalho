var tema = sessionStorage.getItem("tema");
let css = document.getElementById("idCss")
console.log("gozei = ", tema)
if (tema){
    css.setAttribute("href", "temaClaro.css");
} else{
    css.setAttribute("href", "temaEscuro.css");
}
