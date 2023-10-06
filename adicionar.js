function adicionarCarro(){
    
    alert('produto em falta!')

}

let links = document.querySelectorAll('.stretched-link')
// add.addEventListener("click",adicionarCarro)
links.forEach(function(link) {
    link.addEventListener("click", adicionarCarro);
  });






