//EJERCICIO ROMPECABEZAS JS
let fichas =[0,1,2,3,4,5,6,7,8];//#5
let num_click=0;
let primerClick=0;

//paso 3 funcion que se activa al dar click  en una casilla del puzzle
function seleccionar(casilla) {
    //console.log(casilla);
    //#6 contador de click
    num_click++;
    //#6 variable para llevar el control de los clicks
    if (num_click == 1) {
        //guardar un registro del click posicion/casilla innicio
        primerClick= casilla;    
    }
    if (num_click == 2) {
        let segundoClick = casilla;
        //intercambiar los valores en las casillas del puzzle con las posiciones del array
        let intercambio=fichas[primerClick];
        fichas[primerClick]=fichas[segundoClick];
        fichas[segundoClick]=intercambio; //ubico el contenido del primer click en la casilla del sugundio click
        //reiniciar el num_click, para volver a realizar otro movimiento en el puzzle
        num_click=0;
        moverFichas();//#5
    }
    quitarBorde();//#4
    document.getElementById("img_"+casilla).style.border="4px solid blue";
}
//desmarcar casillas con click #4
function quitarBorde() {
    for(let c=0;c<9;c++){
        document.getElementById("img_"+c).style.border=null;
    }
}
//paso 5
function desordenar() {
    fichas=fichas.sort(function() {
        return Math.random()-0.5;
    });
    // el valor que toma el Math.random +1 orden ascendente / -1 orden descendente /0,5 orden aleatorio
}
//crear una funcion para conocer que numero de imagen esta en la posicion de  la casilla.
function moverFichas() {
    //ciclo para recorrer cada posicion del array como casilla c.
    for(let i=0;i<9;i++){
        //obtener el numero de la imagen que hay en el array en la casilla c
        //ejemplo: mostrar que imagen eesta en la casilla c=3 del puzzle
        let imagenFicha=fichas[i];
        //colocar en la casilla del puzzle la imagen: ruta + nombre imagen + variable + extencion
        document.getElementById("img_"+i).src= "images/i"+(imagenFicha+1)+".jpg";
    }
}
//#7 crear una funcion que rectifique si la totalidad de imagenes esta correctamente posicionada.
function comprobarPuz() {
    let comprobar= true;
    for(let c=0;c<9;c++){
        if(fichas[c]!=c){
            comprobar=false;
        }
    }
    if(comprobar==true){
        alert("---> PUZZLE COMPLETO <---");
    }else{
        alert("---> PUZZLE INCOMPLETO <---");
    }
}
//#8 pasar la funcion con un evento boton comprobar
let btn=document.querySelector("#btnComprobar");//mejor practica
btn.addEventListener("click",(event)=>{
    comprobarPuz();
});
window.onload=function(){
    //invoco la funcion desordenar para que se ejecute al cargar la pagina.
    desordenar();
    // invoco la funcion que refresca el panel con las cifras del puzzle
    moverFichas();
}