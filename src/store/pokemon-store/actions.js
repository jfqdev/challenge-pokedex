import axios from "axios"
//Before triggering this action remember to set currentUrl state.
export async function fetchPokemons ({state, commit}) {
        
    //Get Pokemons Pagination and Basic data
    let response = await axios.get(state.currentUrl)
    let pokemonUrls = []
    response.data.results.forEach(pokemon => {
        pokemonUrls.push(axios.get(pokemon.url))
    });
    
    //Set Next Url
    commit('SetNextUrl', response.data.next)
    
    //Get Pokemon Details
    let pokemonsFullData = await axios.all(pokemonUrls)
    let pokemons = []
    pokemonsFullData.forEach(pokemon =>{
        pokemons.push(pokemon.data)
    })
    //Set Pokemons state
    commit('SetPokemons', pokemons)

}


