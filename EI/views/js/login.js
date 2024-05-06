document.addEventListener('DOMContentLoaded', inicio)

function inicio() {
    console.log(localStorage.getItem('tipoUsu'))
    var titulo=document.getElementById('titulo')
    var tipoUsu= document.createElement('p');
    tipoUsu.textContent=localStorage.getItem('tipoUsu')
    tipoUsu.style.fontStyle = 'italic'
    titulo.appendChild(tipoUsu)
}