<template>
    <q-page>
        <div class="row justify-center">
            <q-space class="bg-main shadow-3"></q-space>
                <div class="col-8 col-md-8 col-sm-10 col-xs-12 text-center">
                    <pokemon-list @selectPokemon="selectPokemon" @mouseOverCard="mouseOverCard" @mouseOutCard="mouseOutCard" />
                </div>
            <q-space class="bg-main shadow-3"></q-space>
        </div>
        <pokemon-scoped  :ref="'pokemonScoped'"></pokemon-scoped>
        <custom-cursor :ref="'customCursor'"></custom-cursor>
    </q-page>   
</template>

<script>
import PokemonList from "src/components/PokemonList"
import PokemonScoped from "src/components/PokemonScoped.vue"
import pokemonMixin from 'src/mixins/pokemonMixin'
import CustomCursor from 'src/components/CustomCursor.vue'


export default {
    name: 'PageIndex',
    mixins:[pokemonMixin],
    methods:{
        selectPokemon(){
            this.$refs.pokemonScoped.showPokemon()
        },
        mouseOverCard(){
            this.$refs.customCursor.mouseOverCard()
        },
        mouseOutCard(){
            this.$refs.customCursor.mouseOutCard()
        }
    },
    components:{
        PokemonList,
        PokemonScoped,
        CustomCursor
    }
}
</script>
