var searchParam = new URLSearchParams(window.location.search).get('termo');
var categoryParam = new URLSearchParams(window.location.search).get('val');

// Usar o valor do parâmetro para realizar a pesquisa ou qualquer outra ação necessária
console.log(searchParam);
console.log(categoryParam);

$('#pesquisaRealizada').text(searchParam);

// var urlPesquisa = 'https://fakestoreapi.com/products?limit=5&title=' + searchParam;
var urlPesquisa = 'https://fakestoreapi.com/products/';

if (categoryParam == 3) {
    urlPesquisa = 'https://fakestoreapi.com/products/category/jewelery';
}

if (categoryParam == 4) {
    urlPesquisa = 'https://fakestoreapi.com/products/category/electronics';
}

fetch(urlPesquisa).then(function (response) {
    return response.json()
}).then(function (produtos) {
    for (let i = 0; i < produtos.length; i++) {
        var produto = $(`
        <div class="card trails bg-fundo border border-3 border-black mx-auto p-0 pb-3 my-2" style="flex-grow: 1">
                <div class="card-header ondulado bg-link border-bottom border-3 border-black">
                    <img src="${produtos[i].image}" class="border border-3 border-black shadow-sm imgProduto">
                </div>
                <div class="card-body">
                    <a class="text-link" href="detalhes.html?id=${produtos[i].id}">
                        <p id="produto1-nome" class="fs-5 fw-normal mb-1">${produtos[i].title}</p>
                    </a>
                    <p class="estrelas m-0" style="font-size: smaller;">
                        <i class="bi-star-fill"></i>
                        <i class="bi-star-fill"></i>
                        <i class="bi-star-fill"></i>
                        <i class="bi-star-half"></i>
                        <i class="bi-star"></i>
                        <span class="mx-1 text-black fs-6">(${produtos[i].rating.count})</span>
                    </p>
                    <p class="fs-5 fw-bolder m-0 text-claro">
                        R$ ${produtos[i].price}
                    </p>
                    <p class="fst-italic mt-3">
                        ${produtos[i].description}
                    </p>
                </div>
            </div>
        `);
        $('#resultadoPesquisa').append(produto);
    }
});

$('#categoria').change(function () {
    console.log($('#categoria').val());
    window.location.href = 'pesquisa.html?val=' + $('#categoria').val();
});