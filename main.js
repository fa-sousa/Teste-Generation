function Enviar() {
 
  var nome = document.getElementById("input-name");

  if (nome.value != "") {
      alert('Muito obrigades pelo seu contato ' + nome.value + ' !');
  }

}
