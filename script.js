function comprar(livro){

let lista = document.getElementById("meusLivros");

let item = document.createElement("li");

item.innerText = livro + " (comprado)";

lista.appendChild(item);

alert("Livro adicionado à sua biblioteca!");

}
