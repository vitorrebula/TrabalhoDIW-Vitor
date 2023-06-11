// * Aqui estarão os produtos principais da página inicial
fetch('https://fakestoreapi.com/products').then(function (response) {
    return response.json()
}).then(function (produtos) {
    for (let i = 0; i < 9; i++) {
        console.log(produtos[i].category);
        produto = $(`
            <div class="card trails bg-fundo border border-3 border-black mx-md-0 mx-auto p-0 pb-3 mb-2 mb-md-0">
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
                    <span class="fst-italic text-dark position-absolute bottom-0 end-0 me-3"
                        style="font-size: smaller;">
                        <s>R$790,00</s> 14% OFF
                    </span>
                </div>
            </div>
        `);
        if (i < 3) $('#linha-1').append(produto);
        else if (i < 6) $('#linha-2').append(produto);
        else $('#linha-3').append(produto);
    }
})
// * Aqui estarão os produtos em destaque
fetch('https://fakestoreapi.com/products?sort=desc').then(function (response) {
    return response.json()
}).then(function (produtos) {
    for (let i = 0; i < 5; i++) {
        produtoDestaque = $(`
        <div class="row m-0 p-0 flex-nowrap">
            <div class="col-4 p-0">
                <img src="${produtos[i].image}"
                    class="mx-auto imgProduto border border-3 border-black shadow-sm">
            </div>
            <div class="col text-claro ms-1">
                <p class="fs-6 fw-normal mb-1">
                    <a href="detalhes.html?id=${produtos[i].id}" class="text-link">
                        ${produtos[i].title}
                    </a>
                </p>
                <p class="estrelas m-0" style="font-size: smaller;">
                    <i class="bi-star-fill"></i>
                    <i class="bi-star-fill"></i>
                    <i class="bi-star-fill"></i>
                    <i class="bi-star-half"></i>
                    <i class="bi-star"></i>
                    <span class="mx-1 text-black fs-6">(${produtos[i].rating.count})</span>
                </p>
                <p class="fs-6 fw-bolder m-0">
                    R$ ${produtos[i].price}
                </p>
            </div>
        </div>
        <hr class="text-claro border border-2 border-black mx-2 opacity-100">
    `);
    $('#produtosDestaque').append(produtoDestaque);
    }
});

// * Criando uma função para selecionar os objetos aleatóriamente
function selecionarObjetoAleatorio(objetos) {
    return objetos[Math.floor(Math.random() * objetos.length)]
}

// * Criando uma função para mostrar os objetos selecionados
function mostrarObjetoSelecionado() {
    var objetoSelecionado = selecionarObjetoAleatorio(objetos)
    console.log(objetoSelecionado)
}

// * Criando uma função para mostrar os objetos selecionados na tela
function mostrarObjetoSelecionadoNaTela() {
    var objetoSelecionado = selecionarObjetoAleatorio(objetos)
    console.log(objetoSelecionado)
    document.getElementById('titulo').innerHTML = objetoSelecionado.title
    document.getElementById('descricao').innerHTML = objetoSelecionado.description
    document.getElementById('preco').innerHTML = objetoSelecionado.price
    document.getElementById('categoria').innerHTML = objetoSelecionado.category
    document.getElementById('imagem').src = objetoSelecionado.image
}