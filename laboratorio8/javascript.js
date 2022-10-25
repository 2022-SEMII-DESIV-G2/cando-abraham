function contadorCaracteres(frase){
  // let text = document.form_main.text.value;
  // document.getElementById('a').innerText = text.length;
  // document.getElementById('i').innerText = text.length;
  // document.getElementById('b').innerText = text.length;
  if (typeof frase != 'string'){
    throw TypeError('El argumento debe ser una cadena de caracteres');  
  }

  let conteo = {};

  frase.replace(/\S/g, function(p){
    conteo[p] = (isNaN(conteo[p]) ? 1 : conteo[p] + 1);

  })

  return conteo;
}

try {
  console.log(contarCaracteres('JavaScript'));
} catch (e){
  console.log('Error: $(e.message)');
}