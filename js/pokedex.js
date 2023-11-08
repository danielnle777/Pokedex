// Variavel Global

const pokemoName = document.querySelector(".pokemon_name");
const pokemonId = document.querySelector(".pokemon_number");
const pokemonImg = document.querySelector(".pokemon_img");
const form = document.querySelector(".form");
const input = document.querySelector(".input_search");
const buttonPrev = document.querySelector(".btn-prev");
const buttonNext = document.querySelector(".btn-next");
let searchPokemon = 0

// procurar pokemon pelo input

form.addEventListener("submit", (event) =>{
    event.preventDefault(),
    renderpokemon(input.value.toLowerCase());
    
    

});
// Evento Botoes Prev e Next

    buttonPrev.addEventListener("click", ()  => {
        
        if(searchPokemon > 1){
            searchPokemon -= 1 
            renderpokemon(searchPokemon);

        };
    })
    buttonNext.addEventListener("click", ()  => {
        searchPokemon += 1 
        renderpokemon(searchPokemon);
    });


// Capturar infos API

const fetchpokemon = async (pokemon) =>{
    const apiResponse = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    if (apiResponse.status===200) {
        const data = await apiResponse.json();
        return data;
    } 
}
// Renderizar dados pokemon.

const renderpokemon = async (pokemon) => {
    pokemoName.innerHTML = "Carregando...";
    pokemonId.innerHTML = "";
    
    const data = await fetchpokemon(pokemon);
     console.log(data);

     if (data) {
        pokemoName.innerHTML = data.name;
        pokemonId.innerHTML = data.id;
        pokemonImg.src = data['sprites']['versions']['generation-v']['black-white']['animated']['front_default'];
        input.value = '';
        searchPokemon = data.id;
     } else {
        pokemoName.innerHTML = "Pokemon Não Encontrado :c";
        pokemonImg.src = ""; 
     };
};
renderpokemon(507);







