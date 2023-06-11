
function pesquisaProduto() {
    console.log('Clicou no botão de pesquisa');
    var searchTerm = document.querySelector('input[type="search"]').value;
    console.log($('#caixaDeTexto').val());
    window.location.href = 'pesquisa.html?termo=' + $('#caixaDeTexto').val();
}

function pesquisaProduto2() {
    console.log($('#caixaDeTexto2').val());
    window.location.href = 'pesquisa.html?termo=' + $('#caixaDeTexto2').val();
}

function pesquisaPorForm() {
    console.log('Clicou no botão de pesquisa por formulário');
}

console.log('O script de pesquisa de produto foi carregado');