const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get('id');

console.log(id);

var urlProduto = 'https://fakestoreapi.com/products/' + id; 

fetch(urlProduto).then(function (response) {
    return response.json();}).then(function (produto) {
        var produtoDetalhe = $(`
        <div class="card trails bg-fundo border border-3 border-black mx-auto p-0 pb-3 mb-2 mb-md-0">
                <div class="card-header ondulado bg-link border-bottom border-3 border-black">
                    <img src="${produto.image}" class="border border-3 border-black shadow-sm imgProduto">
                </div>
                <div class="card-body">
                    <a class="text-link" href="detalhes.html?id=${produto.id}">
                        <p id="produto1-nome" class="fs-5 fw-normal mb-1">${produto.title}</p>
                    </a>
                    <p class="estrelas m-0" style="font-size: smaller;">
                        <i class="bi-star-fill"></i>
                        <i class="bi-star-fill"></i>
                        <i class="bi-star-fill"></i>
                        <i class="bi-star-half"></i>
                        <i class="bi-star"></i>
                        <span class="mx-1 text-black fs-6">(${produto.rating.count})</span>
                    </p>
                    <p class="fs-5 fw-bolder m-0 text-claro">
                        R$ ${produto.price}
                    </p>
                    <p class="fst-italic mt-3">
                        ${produto.description}
                    </p>
                </div>
            </div>
        `);
        $('#produtoPesquisado').append(produtoDetalhe);
    })