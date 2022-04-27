<template>
    <div class="row justify-center">
        <pokemon-card v-for="pokemon in pokemons" :key="`${pokemon.name}_${pokemon.id}`" class="col-4 q-ma-sm" :pokemon="{name:pokemon.name}" />
    </div>
</template>


<script>
import PokemonCard from "./PokemonCard.vue"
import pokemonMixin from 'src/mixins/pokemonMixin'
import {baseURL} from 'boot/axios'

export default {
    name:"PokemonList",
    mixins:[pokemonMixin],
    components:{
        PokemonCard
    },
    async created(){
        this.SetCurrentUrl(baseURL())
        await this.fetchPokemons()
    }
}
</script>