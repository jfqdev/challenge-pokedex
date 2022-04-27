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
          'SetPokemons'
      ]),
    },
    computed: {
      ...mapState('pokemonStore', [
        'pokemons',
        'nextUrl',
        'currentUrl'
      ])
    }
  };