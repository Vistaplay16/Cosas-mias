document.addEventListener('DOMContentLoaded', inicio());

function inicio() {
    var btnCentro = document.getElementById('centro');
    var btnDocente = document.getElementById('docente');
    var btnFamilia= document.getElementById('familia');
    document.getElementById('centro').addEventListener('click', function () {
        localStorage.setItem('tipoUsu', 'Centro');
        window.location.href = './views/login.html';
    })
    btnDocente.addEventListener('click', function () {
        localStorage.setItem('tipoUsu', 'Docente');
        window.location.href = './views/login.html';

    })
    btnFamilia.addEventListener('click', function () {
        localStorage.setItem('tipoUsu', 'Familia');
        window.location.href = './views/login.html';
    })
}