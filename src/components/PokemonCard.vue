<template>
    <q-card @click="selectPokemon" style="height:200px">{{pokemon.name}}</q-card>
</template>


<script>

import pokemonMixin from 'src/mixins/pokemonMixin'
export default {
    name:"PokemonCard",
    mixins:[pokemonMixin],
    props:{
        pokemon: Object
    },
    methods:{
        selectPokemon(){
            this.SetSelectedPokemon(this.pokemon)
        }
    }
}
</script>