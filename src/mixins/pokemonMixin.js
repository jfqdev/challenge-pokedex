import {
    mapState,
    mapMutations,
    mapActions
  } from 'vuex';


  export default {
    methods: {
      ...mapActions('pokemonStore',[
        'fetchPokemons'
      ]),
      ...mapMutations('pokemonStore', [
          'SetCurrentUrl',
          'SetNextUrl',
          'SetPokemons',
          'SetSelectedPokemon',
          'SetError'
      ]),
    },
    computed: {
      ...mapState('pokemonStore', [
        'pokemons',
        'nextUrl',
        'selectedPokemon',
        'currentUrl',
        'error'
      ])
    }
  };