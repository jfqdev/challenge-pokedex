export function SetNextUrl(state, nextUrl){
    state.nextUrl = nextUrl
}

export function SetCurrentUrl(state, currentUrl){
    state.currentUrl = currentUrl
}

export function SetPokemons(state, pokemons){
    state.pokemons.push(...pokemons)
}

export function SetSelectedPokemon(state, selectedPokemon){
    state.selectedPokemon = selectedPokemon
}