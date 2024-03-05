function encriptar(){
    var texto = document.getElementById('cajaDeTextoEntrada').value;
    var textoEncriptado = texto.replace(/e/gi,"enter").replace(/i/gi,"imes").replace(/a/gi,"ai").replace(/o/gi,"ober").replace(/u/gi,"ufat");
    if(textoEncriptado != ""){
    document.getElementById('cajaEncriptada').value = textoEncriptado;
    console.log(textoEncriptado);
    }else{
        console.log("Escribe algo");
    }
    document.getElementById("imagen").style.display = "none";
    
}



function desencriptar(){
    var text = document.getElementById("cajaDeTextoEntrada").value;
    var textoDesencriptado = text.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u");
    document.getElementById("cajaEncriptada").value = textoDesencriptado;
    document.getElementById("imagen").style.display = "none";
}

function copy() {
    let copyText = document.querySelector("#cajaEncriptada");
    copyText.select();
    document.execCommand("selectAll");
    document.execCommand("copy");
  }
  
  document.querySelector("#btn-copiar").addEventListener("click", copy);