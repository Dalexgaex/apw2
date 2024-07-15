document.addEventListener('DOMContentLoaded', () => {
    // Fetch data from Mercado Libre API
    fetch('https://api.mercadolibre.com/sites/MLA/search?q=ordenadores')
        .then(response => response.json())
        .then(data => {
            const products = data.results;
            const productList = document.getElementById('mercado-libre-list');
            products.forEach(product => {
                const listItem = document.createElement('li');
                listItem.classList.add('list-group-item');
                listItem.innerHTML = `
                    <h5>${product.title}</h5>
                    <p>Price: $${product.price}</p>
                    <img src="${product.thumbnail}" alt="${product.title}" class="img-fluid">
                `;
                productList.appendChild(listItem);
            });
        })
        .catch(error => console.error('Error fetching data from Mercado Libre:', error));

    // Fetch data from PokeAPI
    fetch('https://pokeapi.co/api/v2/pokemon/ditto')
        .then(response => response.json())
        .then(data => {
            const pokemonDetails = document.getElementById('pokemon-details');
            pokemonDetails.classList.add('card-body');
            pokemonDetails.innerHTML = `
                <h5 class="card-title">${data.name}</h5>
                <p>Height: ${data.height}</p>
                <p>Weight: ${data.weight}</p>
                <img src="${data.sprites.front_default}" alt="${data.name}" class="img-fluid">
            `;
        })
        .catch(error => console.error('Error fetching data from PokeAPI:', error));
});
