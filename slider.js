let indice = 1;

muestraSlides(indice);

var x = setInterval(tiempo,4000)

function tiempo(){
    muestraSlides(indice+=1)
}



function anvanzaSlider(n){
    clearInterval(x)
    x = setInterval(tiempo,4000)

    muestraSlides(indice+=n);
}

function posicionSlide(n){
    clearInterval(x)
    x = setInterval(tiempo,4000)
    muestraSlides(indice=n);
}




function muestraSlides(n){

    let i;
    let slides = document.getElementsByClassName("mislider")
    let barras = document.getElementsByClassName("barra")

    if(n>slides.length) indice = 1
    if(n < 1) indice = slides.length

    for(i=0; i<slides.length; i++)
        slides[i].style.display = "none"
    
    for(i=0; i<barras.length; i++)
        barras[i].className = barras[i].className.replace(" active", "")

    slides[indice-1].style.display = "block"
    barras[indice-1].className += " active"
}