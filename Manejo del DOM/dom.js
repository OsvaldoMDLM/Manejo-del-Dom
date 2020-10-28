function mostrar() {
    document.getElementById('ocultar-titulo-principal').style.display="block";
}

function ocultar() {
    document.getElementById('ocultar-titulo-principal').style.display="none";
}

var rectangulo=document.getElementById("color-fondo");  
    function mifuncion() {  
        var a=Math.floor(Math.random()*255);  
        var b=Math.floor(Math.random()*255);  
        var c=Math.floor(Math.random()*255);  
        var x=Math.floor(Math.random()*255);  
        var y=Math.floor(Math.random()*255);  
        var z=Math.floor(Math.random()*255);  
        rectangulo.style.backgroundColor='rgb('+a+','+b+','+c+')';  
        rectangulo.style.color='rgb('+x+','+y+','+z+')';  
}

/*****************************imagenes********************************/
var num=1;
function cambiarimagen() {
    num++;
    if(num>4)
        num=1;
    var foto = document.getElementById("foto");
    foto.src="foto"+num+".jpg";
}
/*
function cambiarimagen() {
    document.getElementById("imagen").src = "img/banner2.jpg";
}
*/