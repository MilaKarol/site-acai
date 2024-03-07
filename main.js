
// Lista de produtos dentro de uma Array
var produtosList = [];

// Push de produtos (título e imagem)

produtosList.push({
  titleProduct: 'Açaí com Leite Condensado e Morango',
  img: 'acai-condensado-e-morango.avif'
});

produtosList.push({
  titleProduct: 'Açaí Puro',
  img: 'acai-puro.avif'
});

produtosList.push({
  titleProduct: 'Açaí com fruta e leite em pó',
  img: 'acai-tradicional.avif'
});

produtosList.push({
  titleProduct: 'O verdadeiro açai do Pará',
  img: 'acai-paraense.jpg'
});

produtosList.push({
  titleProduct: 'Açaí na casquinha de sorvete',
  img: 'casquinha.jpeg'
});

produtosList.push({
    titleProduct: 'Barca de açai',
    img: 'barca.webp'
  });

  produtosList.push({
    titleProduct: 'Milk Shake de açai',
    img: 'milkshake.jpg'
  });

  produtosList.push({
    titleProduct: 'Açaí com creme de leite ninho com morango',
    img: 'acai-creme-de-avela.avif'
  });

  produtosList.push({
    titleProduct: 'Pote de açai',
    img: 'pote.jpeg'
  });

  produtosList.push({
    titleProduct: 'Marmita de açai',
    img: 'marmita.avif'
  });
  

// Variável que representa o input do usuário
var inputUserFilter = document.getElementById('inputUser');

// Função responsável por filtrar os itens do site
function searchBar() {
  // Variável que define a lista como elemento
  var list = document.getElementById('List');

  // ?
  list.innerHTML = '';
  // Resumo da sintaxe abaixo: var filteredAnimes = produtosList.filter(anime => anime.titleProduct.startsWith(inputUserFilter.value))
  // Constante produtos filtrados
  const filteredProducts = [];
  // ?
  for (let i = 0; i < produtosList.length; i++) {
    const productName = produtosList[i].titleProduct;
    if (productName.includes(inputUserFilter.value)) {
      filteredProducts.push(produtosList[i]);
    }
  }
  // ?
  for (let i = 0; i < filteredProducts.length; i++) {
    list.appendChild(createElementProduct(filteredProducts[i]));
  }



// ?
function createElementProduct(product) {
  const listItem = document.createElement('div');
  const img = document.createElement('img');
  const name = document.createElement('h2');
  img.src = product.img;
  name.innerHTML = product.titleProduct;
  listItem.appendChild(img);
  listItem.appendChild(name);
  return listItem;
}


inputUserFilter.addEventListener('change', function() {
  searchBar();
});

// Chama a função sem que o usuário coloque alguma informação na barra de pesquisa
document.addEventListener('DOMContentLoaded', function() {
searchBar();
});
}