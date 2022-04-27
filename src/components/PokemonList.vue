<template>
    <div class="row justify-center">

        <pokemon-card
        v-for="pokemon in pokemons"
        :key="`${pokemon.name}_${pokemon.id}`"
        class="col-4 q-ma-sm"
        :pokemon="pokemon"
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
                entries.forEach(entry => {
                    if(entry.intersectionRatio > 0 && this.nextUrl) {
                        //Callback
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
        selectPokemon(selectedPokemon){
            console.log('en componente', selectedPokemon)
            this.SetSelectedPokemon(selectedPokemon)
        }
    },
    components:{
        PokemonCard
    },
    async created(){
        this.SetCurrentUrl(baseURL())
        await this.fetchPokemons()
    },
    mounted() {
      this.scrollTriggerEvent();
    }
}
</script>