<template>
    <div class="row justify-center">

        <pokemon-card
        v-for="pokemon in pokemons"
        :key="`${pokemon.name}_${pokemon.id}`"
        class="col-4 q-ma-sm"
        :pokemon="pokemon"
        @click.native="selectPokemon(pokemon)"
        @mouseenter.native="mouseenters(pokemon)"
        @mouseleave.native="mouseleaves(pokemon)"
        :ref="`${pokemon.name}_${pokemon.id}`"
        />

        <div ref="scrollWatcher" />

    </div>
</template>


<script>
import PokemonCard from "./PokemonCard.vue"
import pokemonMixin from 'src/mixins/pokemonMixin'
import {baseURL} from 'boot/axios'

export default {
    name:"PokemonList",
    mixins:[pokemonMixin],
    methods:{
        //
        scrollTriggerEvent() {
            //Event
            const observer = new IntersectionObserver((entries) => {
                //Callback
                entries.forEach(entry => {
                    if(entry.intersectionRatio > 0 && this.nextUrl) {
                        this.next();
                    }
                });
            });
            //Observe intersection with scrollWatcher el, always at page bottom
            observer.observe(this.$refs.scrollWatcher);
        },
        next(){
            this.SetCurrentUrl(this.nextUrl)
            this.fetchPokemons()
        },
        mouseenters(pokemon){
            this.$refs[`${pokemon.name}_${pokemon.id}`][0].focused = true
        },
        mouseleaves(pokemon){
            this.$refs[`${pokemon.name}_${pokemon.id}`][0].focused = false
        },
        selectPokemon(pokemon){
            this.SetSelectedPokemon(pokemon)
        }
    },
    components:{
        PokemonCard
    },
    created(){
        this.SetCurrentUrl(baseURL())
        this.fetchPokemons()
    },
    mounted() {
        this.scrollTriggerEvent();
    }
}
</script>